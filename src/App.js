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
    const [services, setServices] = useState([
        {'name': 'Kingex', 'link': 'https://kingex.io/rates.xml'},
        {'name': 'E-change', 'link': 'https://e-change.io/courses.xml'},
    ])
    const [rates, setRates] = useState([])
    const [search, setSearch] = useState([])

    const [servicesToShow, setServicesToShow] = useState([])

    useEffect(() => {
        const promises = services.map(service => {
            return MonitorApi.getRates(service.link).then(r => {
                const parserOptions = {
                    ignoreAttributes: true
                };
                const parser = new XMLParser(parserOptions);
                const jsonObj = parser.parse(r);
                return jsonObj.rates.item.map(item => ({
                    ...item,
                    service: service.name
                }));
            });
        });

        Promise.all(promises).then(results => {
            const newRates = results.flat();
            setRates(newRates);

            const fromToValues = newRates.flatMap(item => [item.from, item.to]);
            const uniqueValues = Array.from(new Set(fromToValues));
            setSearch(uniqueValues);
        });
        console.log(rates)
    }, []);


    useEffect(() => {
        if (get && give) {
            setServicesToShow(rates.filter((item) => item.from === get && item.to === give))
        }
    }, [get, give])

    return (
      showAuth ? <Auth setShowAuth={setShowAuth} setUserData={setUserData}/> : <MainWindow userData={userData}
          rates={rates} setShowAuth={setShowAuth} servicesToShow={servicesToShow}
          give={give} setGive={setGive} get={get} setGet={setGet} search={search}
      />
    );
}

export default App;
