import React, {Component} from 'react';

class ErrorBoundary extends Component {

    state = {
        hasError: false,
        errorMesssage: 'Something went wrong!'
    };

    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMesssage: error
        });
    };

    render() {
        if (this.state.hasError) {
            return <h1>this.state.errorMesssage</h1>
        } else {
            return this.props.children;
        }
    }
}


export default ErrorBoundary;