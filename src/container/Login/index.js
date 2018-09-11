import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import { loginRequest } from './action';

class Login extends React.Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispathToProps(dispatch) {
    return bindActionCreators({ loginRequest }, dispatch);
}

export default connect(mapStateToProps, mapDispathToProps)(Login);