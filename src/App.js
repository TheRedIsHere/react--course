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
    ]
  }

  switchNameHandler = () => {
    console.log('Was clicked!');
  } 

  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    
    // child elements are text elements
    //return React.createElement('div', null, 'h1', 'I\'m here');

    // child element is a HTMLElement
    //return React.createElement('div', {className: 'App'} , React.createElement('h1', null, 'Hello world!!!'));
  }
}

export default App;
