import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Loader from './Loader';

const Home = ({ showInput, setShowInput, setResult }) => {
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false);
    const [coords, setCoords] = useState()

    const successCoords = (pos) => {
        const position = {
            lat: pos.coords.latitude,
            lon: pos.coords.longitude
        }

        setCoords(position)
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(successCoords);
    }, [])

    const handleSubmit = () => {
        if (coords) {
            setError(false);
            setLoader(true);
            const APIKEY = '1b137e43cb1b277f6ed9675a637eab85';
            const ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}&lang=es`;

            axios.get(ENDPOINT)
                .then((result) => {
                    setResult(result.data);
                })
                .catch((error) => {
                    console.log('Se a producido un error');
                })
        } else {
            setError(true)
        }
    }

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError(false)
            }, 5000);
        }
    }, [error])



    return (
        <article className={`card`}>
            <div className="lines"></div>
            <div className="elements">

                {
                    !loader
                        ?
                        <>
                            <div className="content-home">
                                <h1>BIENVENIDO</h1>
                                <p className={`${error && 'txt__error'}`}>
                                    {
                                        error
                                            ? 'Para continuar debes de activar tu ubicacion'
                                            : 'Para ver el clima actual selecciona una opción'
                                    }
                                </p>
                            </div>

                            <div className="buttons">
                                <button onClick={handleSubmit}>Ubicacion actual</button>
                                <button onClick={() => setShowInput(!showInput)}>Buscar por ciudad</button>
                            </div>
                        </>
                        : <Loader />

                }


            </div>
        </article>
    )
}

export default Home