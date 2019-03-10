import React, {useEffect} from 'react';

/**
 * Import css modules
 */
import cssClasses from './Cockpit.module.css';

const cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    const timer = setTimeout(() => {
      //alert('Saved data to cloud!');
      console.log('Saved data to cloud!');
    }, 1000);

    return () => {
      clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect');
    }

    // also can set [] empty array as argument
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    }
  });

  //useEffect();

  const assignedClasses = [];
  let btnClasses = '';
    
  if (props.showPerson) {
      btnClasses = cssClasses.Red;
  }
  
  if (props.personsLength <= 2) {
    assignedClasses.push(cssClasses.red);
  } 
  
  if (props.personsLength <= 1) {
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

export default React.memo(cockpit);