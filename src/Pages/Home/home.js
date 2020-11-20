import React from 'react'
import {Link} from 'react-router-dom'
import '../Home/home.css'

var home = () => {
    return (
        <div className="Home">
            <div className='HomeRow flex c'>
            <h1>Home</h1>
            <Link to={`/Profiles`}><button className='button'>View Profiles</button></Link>
            </div>
        </div>
    )
}

export default home
