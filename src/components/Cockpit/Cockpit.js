import React from 'react';

/**
 * Import css modules
 */
import cssClasses from './Cockpit.module.css';

const cockpit = (props) => {
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
            <h1>Hi, I'm a React App!!!</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
            className={btnClasses}
            onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;