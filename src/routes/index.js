import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SecureRoute from './secure-route.component';
import LoginPage from '../pages/login/login.component';
import Dashboard from '../pages/dashboard/dashboard.component';
import ForgotPassword from '../pages/forgotPassword/forgotPassword.component';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LoginPage} />
        <SecureRoute path='/dashboard' component={Dashboard} />
        <Route path='/forgot_password' component={ForgotPassword} />
      </Switch>
    </Router>
  );
};

export default Routes;
