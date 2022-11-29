import React, { useState } from 'react'
import Loader from './Loader';
import { useInput } from '../hooks/useInput'
import axios from 'axios';

const WeatherSearch = ({ setResult, setShowSearch }) => {
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);
    const { inputState, disable, onInputChange } = useInput();

    const handleSubmit = () => {
        const APIKEY = '1b137e43cb1b277f6ed9675a637eab85';
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputState}&appid=${APIKEY}&lang=es`;

        axios.get(URL)
            .then((response) => {
                setLoader(true);
                setTimeout(() => {
                    setResult(response.data);
                    setShowSearch(false);
                }, 5000);

            })
            .catch((err) => {
                setError(true);
            });
    }

    return (
        <>
            {
                !loader
                    ?
                    <>
                        <div className="content-home">
                            <h1>Weather App</h1>
                            <p className={`${error && 'txt__error'}`}>
                                {
                                    !error
                                        ? 'Ingresa la ciudad o pais'
                                        : 'Ha ocurrido un error, verifica la ciudad ingresada'
                                }

                            </p>
                        </div>

                        <div className="searchBox">
                            <div className='inputBox'>
                                <input
                                    type="text"
                                    required="required"
                                    value={inputState}
                                    onChange={onInputChange}
                                />
                                <span>Ciudad</span>
                                <i></i>
                            </div>

                            <div className="buttons">
                                {
                                    disable && <button onClick={handleSubmit}>Buscar</button>
                                }
                                <button onClick={() => setShowSearch(false)}>Cancelar</button>
                            </div>
                        </div>


                    </>

                    : <Loader />
            }
        </>
    )
}

export default WeatherSearch