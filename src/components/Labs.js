import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs=()=>{
    const navigate = useNavigate();
    const clickHandler = () => navigate("/about")
    const backHandler = () => navigate(-1)

    return(
        <div >
        <div>This is Labs Page</div>
        <button onClick={clickHandler}>Move to About Page</button>
        <button onClick={backHandler}>Go back</button>
        </div>
    )

}
export default Labs