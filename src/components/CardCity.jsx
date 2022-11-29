import axios from 'axios';
import React, { useState } from 'react'
import { useInput } from '../hooks/useInput'
import Loader from './Loader';

const CardCity = ({ showInput, setShowInput, setResult }) => {
    const [error, setError] = useState(false);
    const { inputState, disable, onInputChange } = useInput();
    const [loader, setLoader] = useState(false);

    const handleSubmit = () => {
        const APIKEY = '1b137e43cb1b277f6ed9675a637eab85';
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputState}&appid=${APIKEY}&lang=es`;

        axios.get(URL)
            .then((response) => {
                setLoader(true);
                setTimeout(() => {
                    setResult(response.data);
                }, 5000);

            })
            .catch((err) => {
                setError(true);
            });
    }

    return (
        <article className="card card__city">
            <div className="lines"></div>

            <div className="elements">

                {
                    !loader
                        ?
                        <>
                            <div className="content-home">
                                <h1>Weather App</h1>
                                <p className={`${error && 'txt__error'}`}>
                                    {
                                        !error
                                            ? 'Ingresa la ciudad'
                                            : 'Ha ocurrido un error, verifica la ciudad ingresada'
                                    }

                                </p>
                            </div>

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
                                <button onClick={() => setShowInput(!showInput)}>Cancelar</button>
                            </div>
                        </>

                        : <Loader />
                }

            </div>
        </article>
    )
}

export default CardCity