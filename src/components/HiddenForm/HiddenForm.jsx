import React from 'react'
import './HiddenForm.css'

class HiddenForm extends React.Component{

    constructor(props){
        super(props);
    }

    getInput=(e)=>{
        const { Onchange } = this.props
        const hiddenInput =  document.querySelector('input[name="inputConsole"]')
        if(e.which != 13){
            Onchange(hiddenInput.value)
        } else{
            //limpiamos input, limpiamos screen value
            Onchange('')
            hiddenInput.value = ''
        }
        
    }

    render(){
        return(
            <form method="post" className="InputForm" autoComplete="off" onSubmit={this.props.handleSubmit}>
                <input autoComplete="off" name="inputConsole" onKeyUp={this.getInput}></input>
            </form>
        )
    }
    
}

export default HiddenForm