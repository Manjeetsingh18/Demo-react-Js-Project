import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import {
  Home,
  Login,
  Dashboard
} from './container';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
