import React from 'react';
import LineContainer from '../LineContainer/LineContainer'

const Lines = (props) => {
    const { commands, line } = props
    const style = {
        "listStyle": "none",
        "padding": "0",
        "margin": "0",
        "color": "black"
    }
    return(
        <ul style={style}>
            {commands.map((line, index) => <LineContainer key={index} text={line}></LineContainer>)}
        </ul>
    )
    
}
    
export default Lines