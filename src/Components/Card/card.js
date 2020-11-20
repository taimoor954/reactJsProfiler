import React from 'react'
import {Link, withRouter}from 'react-router-dom'
import "../Card/card.css"
const card = (props) => {
    console.log(props)
    return (
        <div className='row2'>
           <div className='name flex'><h3>{props.user.name}</h3></div>
          <div className='email flex '><h5 >{props.user.email}</h5></div>  
           <div className='c3 flex'>
           {props.match.params.id ? null : <Link to={`/Profiles/${props.user.id}`}> <button className='buttonProfile'>View Details</button></Link>} 
            </div>
               
        </div>
    )
}

export default withRouter(card)
