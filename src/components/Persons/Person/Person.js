import React from 'react';

/*
* Third party libraries
*/

import "./Person.css"

const person = (props) => {
    console.log('[Person.js] rendering...');
    return (
        <div className="Person">
            <p onClick={props.click}>
                I'm a {props.name} and I am {props.age}
            </p>
            <p>
                {props.children}
            </p>
            <input type="text" 
                onChange={props.changed}
                value={props.name}/>
        </div>
    )
}

export default person;