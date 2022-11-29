import React from 'react'
import './../assets/css/loader.css'

const Loader = () => {
  return (
    <div className='card__loader'>
      <div className="container">
        <div className="loader"><span></span></div>
        <div className="loader"><span></span></div>
        <div className="loader"><i></i></div>
        <div className="loader"><i></i></div>

        <span className='loader__txt'>Loading...</span>
      </div>

      
    </div>
  )
}

export default Loader