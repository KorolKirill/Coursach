
const Rating = ({rating, setRating}) => {
    return (
        <div className="half-stars">
            <div className="rating-group">
                <input checked name="hsr" value="0" type="radio" onChange={() => setRating(0)}/>
                <label className="hsr" htmlFor="hsr-052">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path
                            d="M288 0c-11.4 0-22.8 5.9-28.7 17.8L194 150.2 47.9 171.4c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.1 23 46 46.4 33.7L288 439.6V0z"/>
                    </svg>
                </label>
                {/*<input disabled checked={rating >= 0.5} name="hsr" id="hsr-052" value="0.5" onChange={() => setRating(0.5)} type="radio"/>*/}

                <label htmlFor="hsr-102">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path
                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                    </svg>
                </label>
                <input checked={rating >= 1} name="hsr" id="hsr-102" value="1" onChange={() => setRating(1)} type="radio"/>

                <label className="hsr" htmlFor="hsr-152">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path
                            d="M288 0c-11.4 0-22.8 5.9-28.7 17.8L194 150.2 47.9 171.4c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.1 23 46 46.4 33.7L288 439.6V0z"/>
                    </svg>
                </label>
                {/*<input disabled checked={rating >= 1.5} name="hsr" id="hsr-152" value="1.5" onChange={() => setRating(1.5)} type="radio"/>*/}

                <label htmlFor="hsr-202">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path
                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                    </svg>
                </label>
                <input checked={rating >= 2} name="hsr" id="hsr-202" value="2" onChange={() => setRating(2)} type="radio"/>

                <label className="hsr" htmlFor="hsr-252">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path
                            d="M288 0c-11.4 0-22.8 5.9-28.7 17.8L194 150.2 47.9 171.4c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.1 23 46 46.4 33.7L288 439.6V0z"/>
                    </svg>
                </label>
                {/*<input disabled checked={rating >= 2.5} name="hsr" id="hsr-252" value="2.5" onChange={() => setRating(2.5)} type="radio"/>*/}

                <label htmlFor="hsr-302">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path
                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                    </svg>
                </label>
                <input checked={rating >= 3} name="hsr" id="hsr-302" value="3" onChange={() => setRating(3)} type="radio"/>

                <label className="hsr" htmlFor="hsr-352">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path
                            d="M288 0c-11.4 0-22.8 5.9-28.7 17.8L194 150.2 47.9 171.4c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.1 23 46 46.4 33.7L288 439.6V0z"/>
                    </svg>
                </label>
                {/*<input disabled checked={rating >= 3.5} name="hsr" id="hsr-352" value="3.5" onChange={() => setRating(3.5)} type="radio"/>*/}

                <label htmlFor="hsr-402">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 576 512">
                        <path
                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                    </svg>
                </label>
                <input checked={rating >= 4} name="hsr" id="hsr-402" value="4" onChange={() => setRating(4)} type="radio"/>

                <label className="hsr" htmlFor="hsr-452">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 576 512">
                        <path
                            d="M288 0c-11.4 0-22.8 5.9-28.7 17.8L194 150.2 47.9 171.4c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.1 23 46 46.4 33.7L288 439.6V0z"/>
                    </svg>
                </label>
                {/*<input disabled checked={rating >= 4.5} name="hsr" id="hsr-452" value="4.5" onChange={() => setRating(4.5)} type="radio"/>*/}


                <label htmlFor="hsr-502">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 576 512">
                        <path
                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                    </svg>
                </label>
                <input checked={rating >= 5} name="hsr" id="hsr-502" value="5" onChange={() => setRating(5)} type="radio"/>
            </div>
        </div>
    )
}

export default Rating