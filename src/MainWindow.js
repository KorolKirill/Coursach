import './App.css';
import ContentTable from "./ContentTable";
import SearchTable from "./SearchTable";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useState} from "react";
import SendIcon from '@mui/icons-material/Send';
import {Rating} from "@mui/material";

function MainWindow({setShowAuth, servicesToShow, give, setGive, get, setGet, search, userData}) {
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

    const [open, setOpen] = useState(false);
    const [exchangeToRate, setExchangeToRate] = useState({})
    const handleOpen = (service) => {
        console.log(service)
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

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
                    <ContentTable servicesToShow={servicesToShow} handleOpen={handleOpen}/>
                </div>

                <div className='sidebar'>
                    <SearchTable give={give} setGive={setGive} get={get} setGet={setGet} search={search}/>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Rate
                    </Typography>
                    <Rating name="size-large" defaultValue={2} size="large" />
                    <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
                </Box>
            </Modal>
        </div>
    );
}

export default MainWindow;
