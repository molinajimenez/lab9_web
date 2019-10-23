import React from 'react'
import './HiddenForm.css'

class HiddenForm extends React.Component{

    constructor(props){
        super(props);
    }

    getInput=()=>{
        //console.log(this)
        const { Onchange } = this.props
        Onchange(document.querySelector('input[name="inputConsole"]').value)

        console.log(document.querySelector('input[name="inputConsole"]').value)
    }

    render(){
        return(
            <form className="InputForm" autoComplete="off" onSubmit={this.props.handleSubmit}>
                <input autoComplete="off" name="inputConsole" onKeyUp={this.getInput}></input>
            </form>
        )
    }
    
}

export default HiddenForm