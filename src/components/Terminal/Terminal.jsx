import React from 'react'
import './Terminal.css'
import '../LineContainer/LineContainer'
import LineContainer from '../LineContainer/LineContainer'
import HiddenForm from '../HiddenForm/HiddenForm'

class Terminal extends React.Component {
    constructor(props){
        super(props)
        this.state={
            input: '',
        }

        this.focusInput.bind(this)
        this.getInput.bind(this)
        this.changeDisplay.bind(this)
    
        
    }
    focusInput(e){
        document.querySelector('input[name="inputConsole"]').focus()
    }
    getInput(){
        document.querySelector('input[name="inputConsole"]')
    }

    changeDisplay(newDisplay){
        this.setState({
            input: newDisplay
        })
    }

    handleSubmit = (e) => {
		e.preventDefault();
		
		if (input === 'clear') {
            console.log("clearing")
            console.log("display FALSE")
			//clearTerminal();
			//setDisplayNeofetch(false);
		} else if (input === ' ' || input.replace(/\s/g, '') === '') {
			console.log("add new Line + $ input")
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
      const { input } = this.state
    return (
      <div className="terminal">
          <ul>
            <LineContainer text="Try typing Neofetch!" />
            <LineContainer active={true} text={input} />
            
          </ul>

          <HiddenForm handleSubmit={this.handleSubmit} />
          
          
      </div>
    )
  }
}

export default Terminal
