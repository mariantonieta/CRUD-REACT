import React from 'react'
import './message.css'
const Message = ({msg}) => {

    return (
    <div className='errorM'>
    <p>{msg}</p>
    </div>
  )
}

export default Message