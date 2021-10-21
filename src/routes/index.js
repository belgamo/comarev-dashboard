import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SecureRoute from './secure-route.component';
import LoginPage from '../pages/login/login.component';
import Dashboard from '../pages/dashboard/dashboard.component';
import userList from '../pages/user-list/user-list.component';
import CompaniesList from '../pages/companies-list/companies-list';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LoginPage} />
        <SecureRoute path='/dashboard' component={Dashboard} />
        <SecureRoute path='/users' component={userList} admin />
        <SecureRoute path='/companies' component={CompaniesList} admin />
      </Switch>
    </Router>
  );
};

export default Routes;
