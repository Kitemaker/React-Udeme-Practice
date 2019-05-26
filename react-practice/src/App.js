import React, { Component } from 'react';

import './App.css';
import  Person from './Person/Person';
import UserOuput from  "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {
  state = {
   persons: [
     {name:"Alpha", age:28},
     {name:"beta", age:28},
     {name:"theta", age:28}
   ],
   otherstate: "other state"

  }

  swithStateHandler = ()=>{
    this.setState({
      persons: [
        {name : "I am changed", age:28},
        {name : "beta", age:28},
        {name : "theta", age:28}
      ]
    }
    );

  }
  render() {
    return (
      <div className="App">
        <h1> THis is really working</h1>
        <button onClick={this.swithStateHandler}>CLick Me</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>         

      </div>
    );
  }
}

export default App;
