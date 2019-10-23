import React from 'react';
import './App.css';
import Terminal from '../Terminal/Terminal';

class App extends React.Component{
  constructor(props){
    super(props)
  }

  focusInput = (e) =>{
    //document.querySelector('input[name="inputConsole"]').focus()
    console.log("fired")
}
  render(){
    return(
      <Terminal onClick={this.focusInput} />
    )
  }

}
  
 


export default App;
