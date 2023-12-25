import './App.css';
import ContentTable from "./ContentTable";
import SearchTable from "./SearchTable";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useState} from "react";
import SendIcon from '@mui/icons-material/Send';
import Rating from "./Rating";
import {CircularProgress, TextField} from "@mui/material";
import {MonitorApi} from "./api/Monitor.api";
import OpenAI from "openai";
import ChatGptDialog from "./ChatGptDialog";

function MainWindow({setShowAuth, servicesToShow, give, setGive, get, setGet, search, userData, ratings, fetchRates, rates}) {
    const openai = new OpenAI({ apiKey: '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', dangerouslyAllowBrowser: true });

    const [showDialog, setShowDialog] = useState(false)
    const [gptText, setGptText] = useState('')
    const sendChatGpt = async () => {
        setShowLoader(true)
        try {
            const completion = await openai.chat.completions.create({
                messages: [{ role: "system", content: "You are a professional trader." },
                    {"role": "user", "content": "Give advice on what you need to pay attention to before a transaction " + give + " - " + get }],
                model: "gpt-3.5-turbo",
            });
            setShowLoader(false)
            const result = completion.choices[0].message.content;
            setGptText(result)
            setShowDialog(true)
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        color: 'black'
    };

    const [showLoader, setShowLoader] = useState(false)
    const [exchangeToRate, setExchangeToRate] = useState({})
    const handleOpen = (service) => {
        console.log(ratings)
        setRating(ratings.filter(r => r.exchange_id === service?.serviceId && r.user_id === userData?.id)[0] ?? 0)
        setExchangeToRate(service)
        setOpen(true);
    }
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);


    const [openNewExchange, setOpenNewExchange] = useState(false);
    const [rating, setRating] = useState(0.1)

    const [exchangeName, setExchangeName] = useState('')
    const [exchangeLink, setExchangeLink] = useState('')
    const [exchangeRateLink, setExchangeRateLink] = useState('')

    return (
        <div className="App">
            <Button variant="contained" onClick={() => setShowAuth(true)} style={!userData?.fullname ? {position: "absolute", top: '3%', right: '3%'} : {position: "absolute", top: '3%', right: '3%', pointerEvents: 'none'}}>{userData?.fullname ? userData.fullname : "Sign in"}</Button>
            <div className='wrapper'>
                <div className='header'>
                    <h1 style={{fontSize: '200%',
                        borderBottom:'aliceblue 5px solid'}}>Korol Exchange</h1>
                </div>
                <div className='content'>
                    <div id="small_text" className="intro"><h1>Buy and sell crypto and fiat with BestChange.com!</h1>
                        <p>BestChange is a directory of vetted exchangers with the help of which you can safely buy crypto,
                            fiat and e-currency. The service monitors exchange rates in the listed exchangers, and you can
                            easily choose the best exchanger to transfer your money. Watch the explanation <span
                                className="videolink" onClick="show_video('en')"><span className="videoicon"></span><span
                                className="link dashlink">video</span></span> to see how the service works.</p>

                        <h2>Best exchange rates</h2>
                        <p>The table below shows the best exchange rates for the 20 most popular directions, with the best
                            rates on top. Other relevant information is available in icons next to the exchanger name and
                            columns to its right.</p>

                    </div>

                    {userData?.role === 'a' ? <Button onClick={() => setOpenNewExchange(true)} sx={{marginBottom: '10px'}} variant="contained">Add new Exchanger</Button> : <></>}

                    {showLoader ?
                        <CircularProgress color='inherit' sx={{float: 'right', marginBottom: '10px'}}/>
                        : <>{(get && give) ? <Button onClick={() => sendChatGpt()} sx={{
                            marginBottom: '10px',
                            float: 'right'
                        }} variant="contained">Analyze {give + " - " + get} course</Button> : <></>} </>
                    }

                    <ContentTable fetchRates={fetchRates} servicesToShow={servicesToShow} handleOpen={handleOpen} userData={userData}/>

                </div>

                <div className='sidebar'>
                    <SearchTable rates={rates} give={give} setGive={setGive} get={get} setGet={setGet} search={search}/>
                </div>

            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h4" sx={{display: 'flex',
                        justifyContent: 'center'}} component="h2">
                        Rate
                    </Typography>
                    <Rating rating={rating} setRating={setRating}/>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}><Button onClick={() => {MonitorApi.setRating(userData.id, exchangeToRate.serviceId, rating).then(() => {
                        fetchRates();
                        handleClose()
                    })}} variant="contained" endIcon={<SendIcon />}>Send</Button></Box>
                </Box>
            </Modal>

            <Modal
                open={openNewExchange}
                onClose={() => setOpenNewExchange(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Typography id="modal-modal-title" variant="h4" component="h2">
                            New exchange
                        </Typography>

                        <TextField value={exchangeName} onChange={(event) => setExchangeName(event.target.value)} label={'Name'} id="margin-normal" margin="normal" />
                        <TextField value={exchangeLink} onChange={(event) => setExchangeLink(event.target.value)} label={'Link to exchange'} id="margin-normal" margin="normal" />
                        <TextField value={exchangeRateLink} onChange={(event) => setExchangeRateLink(event.target.value)} label={'Link to rates xml'} id="margin-normal" margin="normal" />

                        <Button sx={{marginTop: '15px'}} onClick={() => {MonitorApi.setExchange(exchangeName, exchangeLink, exchangeRateLink).then(() => {fetchRates()})}} variant="contained" endIcon={<SendIcon />}>Send</Button>
                    </Box>
                </Box>
            </Modal>

            <ChatGptDialog text={gptText} setOpen={setShowDialog} open={showDialog} />
        </div>
    );
}

export default MainWindow;
