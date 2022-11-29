import React, { useState } from 'react'
import { utilities } from '../utilities/utilities';
import './../assets/css/cardWeather.css'
import WeatherHome from './WeatherHome';
import WeatherSearch from './WeatherSearch';

const CardWeather = ({ result, setResult}) => {
    const date = new Date(result.dt * 1000 - (result.timezone * 1000));
    const fecha = `${utilities().months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    const [showSearch, setShowSearch] = useState(false)
    const [temperature, setTemperature] = useState(false);

    console.log(result);

    return (
        <div className="card-home">
            <article className="card card__weather">
                <div className="lines"></div>

                <div className="elements">
                    {
                        !showSearch
                            ? <WeatherHome result={result} fecha={fecha} temperature={temperature}/>
                            : <WeatherSearch setResult={setResult} setShowSearch={setShowSearch}/>
                    }

                    <footer>
                        <ul className='navigation'>
                            <li>
                                <a href="#" onClick={() => setShowSearch(false)}>
                                    <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={() => setShowSearch(true)}>
                                    <span className="icon"><ion-icon name="search-outline"></ion-icon></span>
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={() => setTemperature(!temperature)}>
                                    <span className="icon"><ion-icon name="cloudy-night-outline"></ion-icon></span>
                                </a>
                            </li>
                        </ul>
                    </footer>
                </div>
            </article>
        </div>
    )
}

export default CardWeather