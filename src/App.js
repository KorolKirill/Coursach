import './App.css';
import ContentTable from "./ContentTable";
import SearchTable from "./SearchTable";
import {Button} from "@mui/material";

function App() {
  return (
    <div className="App">
      <Button variant="contained" style={{position: "absolute", top: '5%', right: '3%'}}>Sign in</Button>
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
              <ContentTable/>
          </div>

          <div className='sidebar'>
                <SearchTable/>
          </div>
      </div>
    </div>
  );
}

export default App;
