import React from 'react'
import { useNavigate } from 'react-router-dom'

const Support=()=>{
    const navigate = useNavigate();
    const clickHandler = () => navigate("/")

    return(
        <div>
                    <div>This is Support Page</div>
                    <button onClick={clickHandler}>Back to Home Page</button>

        </div>

    )

}
export default Support