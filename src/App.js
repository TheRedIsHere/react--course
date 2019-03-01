import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

/*
* Custom compoments
*/
import Person from './Person/Person';

const app = props => {
  //DON'T keep the previous state when rewriting states
  const [personsState, setPesronsState] = useState({
    persons: [
      {name: "Mark", age: "14"},
      {name: "Dima", age: "21"},
      {name: "Diana", age: "18"}
    ],
    hello: "Hello world"
  });

  const switchNameHandler = () => {
    //console.log('Was clicked!');
    //DON'T DO THIS: this.state.persons[0].name = 'Nike';
    setPesronsState({
      persons : [
        {name: "Lora", age: "12"},
        {name: "Dima", age: "21"},
        {name: "Kate", age: "21"}
      ]
    });
  } 

  return (
    <div className="App">
      <h1>Hello world</h1>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
}

export default app;
