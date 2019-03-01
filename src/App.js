import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
* Custom compoments
*/
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>
        <Person name="Max" age="14"/>
        <Person name="Dima" age="21">My Hobbies: Racing</Person>
        <Person name="Diana" age="18"/>
      </div>
    );
    
    // child elements are text elements
    //return React.createElement('div', null, 'h1', 'I\'m here');

    // child element is a HTMLElement
    //return React.createElement('div', {className: 'App'} , React.createElement('h1', null, 'Hello world!!!'));
  }
}

export default App;
