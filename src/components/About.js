import React from 'react'
import { useNavigate } from 'react-router-dom'

const About=()=>{
    const navigate = useNavigate();
    const clickHandler = () => navigate("/")

    return(
        <div>
        <div>This is About Page</div>
        <button onClick={clickHandler}>Back to Home Page</button>
        </div>
    )

}
export default About