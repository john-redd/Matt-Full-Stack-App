import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from '../components/Landing';
import Register from '../components/Register';
import Account from '../components/Account';

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/register" component={Register} />
    <Route path="/account" component={Account} />
  </Switch>
)