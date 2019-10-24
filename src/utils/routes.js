import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from '../components/Landing';
import Register from '../components/Register';
import Account from '../components/Account';

export default (
  <Switch>
    <Route exact to="/" component={Landing} />
    <Route to="/register" component={Register} />
    <Route to="/account" component={Account} />
  </Switch>
)