import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import { dashboardRequest } from './action';

import { Search }  from '../../components';

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <Search />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispathToProps(dispatch) {
    return bindActionCreators({ dashboardRequest }, dispatch);
}

export default connect(mapStateToProps, mapDispathToProps)(Dashboard);