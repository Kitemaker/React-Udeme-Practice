import React from 'react';

const userInput = (props) => {
    console.log("out from userINput",props);
    return <input id="myinput" type="text" onChange={props.onChange} value={props.currentValue}/>
};

export default userInput;