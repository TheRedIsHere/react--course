import React, { Component } from 'react';
import logo from './logo.svg';
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
import Person from './Person/Person';
import { throws } from 'assert';

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
    let btnClasses = '';

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person key={person.id}
                click={()=>{this.deletePersonHandler(index)}}
                name={person.name} 
                age={person.age}
                changed={(event) => {this.nameChangedHandler(event, person.id)}}/>
            )
          })}
         
          {/* <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Max!")}
            changed={this.nameChangedHandler}>My Hobbies: Racing</Person> */}
        </div> 
      );

      btnClasses = cssClasses.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(cssClasses.red);
    } 
    
    if (this.state.persons.length <= 1) {
      assignedClasses.push(cssClasses.bold);
    }

    return (
      <div className={cssClasses.App}>
        <h1>Hi, I'm a React App!!!</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button 
          className={btnClasses}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
