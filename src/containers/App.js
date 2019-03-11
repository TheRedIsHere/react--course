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
import Aux from '../hoc/Auxiliary';
import withClass from '../hoc/WithClass';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
 
  state = {
    persons: [
      {id: 'srr23', name: "Mark", age: 14},
      {id: 'qwda2', name: "Dima", age: 21},
      {id: 'dasf3', name: "Diana", age: 18}
    ],
    hello: "Hello world",
    showPerson: false,
    showCockpit: true,
    changeCounter: 0
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  /*componentWillMount() {
    console.log('[App.js] componentWillMount');
  }*/

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }
  
  switchNameHandler = (newName) => {
    this.setState({
      persons : [
        {name: newName, age: 12},
        {name: "Dima", age: 21},
        {name: "Kate", age: 21}
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

    this.setState((prevState, props) => {
      return {
        persons : persons, 
        changeCounter : prevState.changeCounter + 1
      };
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
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons persons={this.state.persons} changed={this.nameChangedHandler} clicked={this.deletePersonHandler}/>
        </div>
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({showCockpit: !this.state.showCockpit})
          }} 
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? <Cockpit 
          tittle={this.props.appTittle}
          showPerson={this.state.showPerson} 
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler}
        /> : null}
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, cssClasses.App);
