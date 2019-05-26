import React, { Component } from 'react';

import './App.css';

import UserOuput from  "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {
  state = {
    userName: "Pre Name"     
  } 

  swithStateHandler = (event)=>{
    this.setState({
      userName: "From Button"  
    }
    );
    document.getElementById('myinput').value = "";
  }

    inputChangeHandler = (event) =>{
      console.log("From inputChangeHandler");
      this.setState({
        userName: event.target.value 
      }      
      );  

    }
      
  render() {


    return (
      <div className="App">
        <h1> Assignemnt for Base Text</h1>   
        <UserOuput name={this.state.userName}/>
        <UserOuput name={this.state.userName}/>       
        <p><b>Enter Name Here </b>
        <UserInput currentValue={this.state.userName} onChange={this.inputChangeHandler} /> </p>       
      </div>
    );
  }
}

export default App;
