import React, {Component} from 'react';
import PropTypes from 'prop-types';

/*
* Customs CSS
*/

// import "./Person.css"
import classes from "./Person.module.css"

/*
* Import custom js
*/
import withClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Auxiliary';

class Person extends Component {

    render() {
        console.log('[Person.js] rendering...');

        return (
            // <div className="Person">
            // <React.Fragment>  Can use Fragment if add {Fragment} to import for react
            <Aux>
                <p onClick={this.props.click}>
                    I'm a {this.props.name} and I am {this.props.age}
                </p>
                <p>
                    {this.props.children}
                </p>
                <input type="text" 
                    onChange={this.props.changed}
                    value={this.props.name}/>
            </Aux>
            // </React.Fragment>
            // </div>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
  };

export default withClass(Person, classes.Person);