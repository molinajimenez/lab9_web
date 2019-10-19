import React from 'react'
import './Terminal.css'
import '../LineContainer/LineContainer'
import LineContainer from '../LineContainer/LineContainer'

class Terminal extends React.Component {
  render() {
    return (
      <div className="terminal">
          <LineContainer text="Try typing Neofetch!"></LineContainer>
          <LineContainer active={true}></LineContainer>
      </div>
    )
  }
}

export default Terminal
