import React, {useEffect} from 'react';

/**
 * Import css modules
 */
import cssClasses from './Cockpit.module.css';

const cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);
    // also can set [] empty array as argument
  }, [props.persons]);

  //useEffect();

  const assignedClasses = [];
  let btnClasses = '';
    
  if (props.showPerson) {
      btnClasses = cssClasses.Red;
  }
  
  if (props.persons.length <= 2) {
    assignedClasses.push(cssClasses.red);
  } 
  
  if (props.persons.length <= 1) {
    assignedClasses.push(cssClasses.bold);
  }

  return (
      <div className={cssClasses.Cockpit}>
          <h1>{props.tittle}</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button 
          className={btnClasses}
          onClick={props.clicked}>Toggle Persons</button>
      </div>
  );
};

export default cockpit;