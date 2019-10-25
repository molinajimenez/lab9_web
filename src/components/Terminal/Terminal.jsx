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
    
        this.handleSubmit.bind(this)
        
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
        this.setState({
            commands: [],
            input: ''
        })
    }

    handleSubmit=(e)=>{
        const { input } = this.state
        e.preventDefault();
		if (input === 'clear') {
            console.log("clearing")
			this.clearTerminal()
			//setDisplayNeofetch(false);
        } 
        else if (input === 'neofetch') {
            console.log("add new line")
            console.log("display TRUE")
            //setLines([...lines, '$ ' + input]);
            this.setState(prevState=>({
                commands: [...prevState.commands, '$ ' + input]
            }))

			//setDisplayNeofetch(true);
		} else {
            console.log("add new line: command not found")
            //setLines([...lines, '$ ' + input, `${input}: command not found`]);
            this.setState(prevState=>({
                commands: [...prevState.commands, '$ ' + prevState.input + ': command not found']
            }))
		}
	}
    componentDidMount(){
        this.focusInput()   
    }
  render() {
      const { input, commands } = this.state
      const { onClick } = this.props
    return (
      <div className="terminal" onClick={onClick} tabIndex={0}>
          <Lines commands={commands}>

          </Lines>

          <LineContainer active={true} text={' '+input}/>
        
          <HiddenForm handleSubmit={this.handleSubmit} Onchange={this.changeDisplay}/>
          
          
      </div>
    )
  }
}

export default Terminal
