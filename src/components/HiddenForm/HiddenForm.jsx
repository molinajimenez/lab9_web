import React from 'react'
import './HiddenForm.css'

const HiddenForm = (props) =>{

    return(
        <form className="InputForm" onSubmit={props.handleSubmit}>
            <input  name="inputConsole"></input>
        </form>
    )
}

export default HiddenForm