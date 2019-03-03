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

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        {name: "Max", age: "12"},
        {name: event.target.value, age: "21"},
        {name: "Kate", age: "21"}
      ]
    });
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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person key={person.id}
                click={()=>{this.deletePersonHandler(index)}}
                name={person.name} 
                age={person.age}/>
            )
          })}
         
          {/* <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Max!")}
            changed={this.nameChangedHandler}>My Hobbies: Racing</Person> */}
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hello world</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
