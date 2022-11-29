import React, { useState } from 'react'

const WeatherHome = ({ result, fecha, temperature }) => {
    const tempCelsius = (result.main.temp - 273.15).toFixed(2);
    const tempFahrenheit = ((tempCelsius * 9 / 5) + 32).toFixed(2);

    return (
        <>
            <header>
                <p className='firs__txt'> {fecha} </p>
                <h3 className='second__txt'>{result.name}, {result.sys.country}</h3>
            </header>

            <section>
                <div className="img">
                    <img src={`${result.weather[0].icon}.png`} alt="weather" />
                </div>
                <div className="information">
                    <ul>
                        <li>{result.weather[0].description}</li>
                        <li>Velocidad del viento {result.wind.speed} m/s</li>
                        <li>Nubes {result.clouds.all}%</li>
                        <li>Presion: {result.main.pressure} hPa</li>
                    </ul>


                    <p className='temperature'>
                        {
                            temperature ? tempCelsius + '°C': tempFahrenheit + '°F'
                        }
                    </p>
                </div>

            </section>
        </>
    )
}

export default WeatherHome