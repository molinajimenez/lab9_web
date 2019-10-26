import React from 'react';
import Blinker from '../Blinker/Blinker';

const LineContainer = (props) => {
  const { text, active } = props;
  const style = {
    color: 'black',
	    marginTop: '0.15rem',
    position: 'relative',
    listStyle: 'none',
  };
  if (active) {
    return (
      <li style={style}>
$
        {text}
        <Blinker />
      </li>
    );
  }
  return (

    <li style={style}>{text}</li>
  );
};

export default LineContainer;
