import CardHome from './components/CardHome'
import { useState } from 'react';
import CardWeather from './components/CardWeather';
import './assets/css/home.css'

function App() {
    const [result, setResult] = useState();

    return (
        <>
            <div className={`app ${result && 'status'}`}></div>

            {
                !result
                    ? <CardHome setResult={setResult} />
                    : <CardWeather result={result} setResult={setResult}/>
            }

        </>

    )
}

export default App
