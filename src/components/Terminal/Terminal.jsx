import React from 'react'
import './Terminal.css'
import '../LineContainer/LineContainer'
import LineContainer from '../LineContainer/LineContainer'
import HiddenForm from '../HiddenForm/HiddenForm'
import Lines from '../Lines/Lines'

class Terminal extends React.Component {
    constructor(props){
        super(props)
        this.state={
            input: '',
            commands: ['try typing Neofetch!']
        }
    
        
    }
    focusInput = (e)=>{
        document.querySelector('input[name="inputConsole"]').focus()
    }

    changeDisplay=(newDisplay)=>{
        this.setState({
            input: newDisplay
        })
    }

    clearTerminal = () =>{
        this.setState={
            commands: []
        }
    }

    handleSubmit=(e)=>{
        const { input, commands } = this.state
		e.preventDefault();
		if (input === 'clear') {
            console.log("clearing")
            console.log("display FALSE")
			clearTerminal()
			//setDisplayNeofetch(false);
		} else if (input === ' ' || input.replace(/\s/g, '') === '') {
			setLines([...commands, '$ ' + input]);
		} else if (input === 'neofetch') {
            console.log("add new line")
            console.log("display TRUE")
			//setLines([...lines, '$ ' + input]);
			//setDisplayNeofetch(true);
		} else {
            console.log("add new line: command not found")
			//setLines([...lines, '$ ' + input, `${input}: command not found`]);
		}
        console.log("clearInput")
		//clearInput();
	}
    componentDidMount(){
        this.focusInput()   
    }
  render() {
      const { input, commands } = this.state
    return (
      <div className="terminal">
          <Lines commands={commands}>

          </Lines>

          <LineContainer active={true} text={' '+input}/>
        
          <HiddenForm handleSubmit={this.handleSubmit} Onchange={this.changeDisplay}/>
          
          
      </div>
    )
  }
}

export default Terminal
