import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound=()=>{

    const navigate = useNavigate();
    const clickHandler = () => navigate("/")

    return(
        <div>
        <div>This is NotFound Page</div>
        <button onClick={clickHandler}>Back to Home Page</button>
        </div>
    )

}
export default NotFound