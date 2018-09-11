import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import { homeRequest } from './action';
class Home extends React.Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {}
}

function mapDispathToProps(dispatch) {
    return bindActionCreators({ homeRequest }, dispatch);
}

export default connect(mapStateToProps, mapDispathToProps)(Home);