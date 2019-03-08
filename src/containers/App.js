import React, { Component } from 'react';
//import './App.css';


/**
 * Import css modules
 */
import cssClasses from './App.module.css';

/*
* Third party libraries
*/

/*
* Custom compoments
*/
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

class App extends Component {
 
  state = {
    persons: [
      {id: 'srr23', name: "Mark", age: "14"},
      {id: 'qwda2', name: "Dima", age: "21"},
      {id: 'dasf3', name: "Diana", age: "18"}
    ],
    hello: "Hello world",
    showPerson: false
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons : [
        {name: newName, age: "12"},
        {name: "Dima", age: "21"},
        {name: "Kate", age: "21"}
      ]
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id; 
    });

    const person = {
      ...this.state.persons[personIndex]
    };
 
    // Alternative way
    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons : persons});
  };  

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.splice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    let doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  };

  render () { 
    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons persons={this.state.persons} changed={this.nameChangedHandler} clicked={this.deletePersonHandler}/>
        </div>
      );
    }

    return (
      <div className={cssClasses.App}>
        <Cockpit 
          showPerson={this.state.showPerson} 
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
