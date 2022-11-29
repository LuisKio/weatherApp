import React, { useEffect, useState } from 'react'
import CardCity from './CardCity'
import Home from './Home'

const CardHome = ({setResult}) => {
    const [showInput, setShowInput] = useState(false)

    return (
        <div className='card-home'>

            {
                !showInput
                    ? <Home showInput={showInput} setShowInput={setShowInput} setResult={setResult} />
                    : <CardCity showInput={showInput} setShowInput={setShowInput} setResult={setResult}/>
            }
        </div>
    )
}

export default CardHome