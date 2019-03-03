import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
* Custom compoments
*/
import Person from './Person/Person';

class App extends Component {
 
  state = {
    persons: [
      {name: "Mark", age: "14"},
      {name: "Dima", age: "21"},
      {name: "Diana", age: "18"}
    ],
    hello: "Hello world"
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons : [
        {name: newName, age: "12"},
        {name: "Dima", age: "21"},
        {name: "Kate", age: "21"}
      ]
    });
  } 

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        {name: "Max", age: "12"},
        {name: event.target.value, age: "21"},
        {name: "Kate", age: "21"}
      ]
    });
  }

  render () { 
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hello world</h1>
        <button 
          style={style}
          onClick={() => this.switchNameHandler("Maximilian")}>Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Max!")}
          changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
