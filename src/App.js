import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {useEffect, useState} from "react";
import Auth from "./Auth";
import MainWindow from "./MainWindow";
import {MonitorApi} from "./api/Monitor.api";
const { XMLParser } = require('fast-xml-parser');


function App() {

    const [give, setGive] = useState('')
    const [get, setGet] = useState('')

    const [userData, setUserData] = useState({})

    const [showAuth, setShowAuth] = useState(false)
    const [services, setServices] = useState([])
    const [rating, setRating] = useState([])
    const [rates, setRates] = useState([])
    const [search, setSearch] = useState([])

    const [servicesToShow, setServicesToShow] = useState([])

    const fetchRates = () => {
        MonitorApi.getRating().then(rating => {
            setRating(rating.data ?? [])

            MonitorApi.getExchanges().then(r => {
                setServices(r.data)
                const promises = r.data.map(service => {
                    return MonitorApi.getRates(service.rate_link).then(r => {
                        const parserOptions = {
                            ignoreAttributes: true
                        };
                        const ratingsByService = rating.data?.filter(r => r?.exchange_id === service.id)
                        const avgRating = ratingsByService?.reduce((acc, curr) => acc + curr.score, 0) / ratingsByService?.length;
                        const parser = new XMLParser(parserOptions);
                        const jsonObj = parser.parse(r);
                        return jsonObj.rates.item.map(item => ({
                            ...item,
                            service: service.name,
                            serviceLink: service.link,
                            rating: avgRating,
                            serviceId: service.id
                        }));
                    });
                });

                Promise.all(promises).then(results => {
                    const newRates = results.flat();
                    setRates(newRates);

                    if (get && give) {
                        setServicesToShow(newRates.filter((item) => item.from === get && item.to === give))
                    }

                    const fromToValues = newRates.flatMap(item => [item.from, item.to]);
                    const uniqueValues = Array.from(new Set(fromToValues));
                    setSearch(uniqueValues);

                    setGet('')
                    setGive('')
                });

            })
        })

    }

    useEffect(() => {
        fetchRates()
    }, []);


    useEffect(() => {
        if (get && give) {
            setServicesToShow(rates.filter((item) => item.from === get && item.to === give))
        }
    }, [get, give])

    return (
      showAuth ? <Auth setShowAuth={setShowAuth} setUserData={setUserData}/> : <MainWindow fetchRates={fetchRates}
          userData={userData} ratings={rating}
          rates={rates} setShowAuth={setShowAuth} servicesToShow={servicesToShow}
          give={give} setGive={setGive} get={get} setGet={setGet} search={search}
      />
    );
}

export default App;
