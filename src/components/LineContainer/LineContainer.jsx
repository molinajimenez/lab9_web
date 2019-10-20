import React from 'react';
import Blinker from '../Blinker/Blinker'

const LineContainer = (props) => {
    const {text, active} = props
    const style = {
        "color": "white",
	    "marginTop": "0.15rem",
        "position": "relative"
    }
    if(active){
        return(
            <li style={style}>${text}
                <Blinker></Blinker>
                
            </li>
        )

    } else{
        return(
        
            <li style={style}>{text}</li>
        )
    
    }
    
}

export default LineContainer