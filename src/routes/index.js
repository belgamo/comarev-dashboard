import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SecureRoute from 'routes/secure-route.component';
import LoginPage from 'pages/login/login.component';
import Dashboard from 'pages/dashboard/dashboard.component';
import UserList from 'pages/users/user-list.component';
import CompaniesList from 'pages/companies/company-list.component';
import CompanyRegister from 'pages/companies/company-register.component';
import CompanyEdit from 'pages/companies/company-edit.component';
import UserRegister from 'pages/users/user-register.component';
import UserEdit from 'pages/users/user-edit.component';
import DiscountRequests from 'pages/users/user-discount-request.component';
import InvoiceList from 'pages/invoices/invoice-list.component';
import InvoiceRegister from 'pages/invoices/invoice-register.component';
import InvoiceView from 'pages/invoices/invoices-view.component';
import InvoiceEdit from 'pages/invoices/invoice-edit.component';
import Scanner from 'pages/scanner/scanner.component';
import InviteEmployee from 'pages/invite-employee/invite-employee.component';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LoginPage} />
        <SecureRoute path='/dashboard' component={Dashboard} />
        <SecureRoute
          path='/companies'
          exact
          component={CompaniesList}
          roles={['admin', 'manager']}
        />
        <SecureRoute
          path='/companies/new'
          exact
          component={CompanyRegister}
          roles={['admin']}
        />
        <SecureRoute
          path='/companies/:id'
          exact
          component={CompanyEdit}
          roles={['admin', 'manager']}
        />
        <SecureRoute
          path='/users'
          exact
          component={UserList}
          roles={['admin']}
        />
        <SecureRoute
          path='/users/new'
          exact
          component={UserRegister}
          roles={['admin']}
        />
        <SecureRoute
          path='/users/:id'
          exact
          component={UserEdit}
          roles={['admin']}
        />
        <SecureRoute
          path='/discount_requests/'
          exact
          component={DiscountRequests}
          roles={['admin', 'manager']}
        />
        <SecureRoute
          path='/invoices'
          exact
          component={InvoiceList}
          roles={['admin', 'customer']}
        />
        <SecureRoute
          path='/invoices/new'
          exact
          component={InvoiceRegister}
          roles={['admin']}
        />
        <SecureRoute
          path='/invoices/:id'
          exact
          component={InvoiceEdit}
          roles={['admin']}
        />
        <SecureRoute
          path='/invoices/show/:id'
          exact
          component={InvoiceView}
          roles={['admin', 'customer']}
        />
        <SecureRoute
          path='/scanner'
          exact
          component={Scanner}
          roles={['customer']}
        />
        <SecureRoute
          path='/invite-employee'
          exact
          component={InviteEmployee}
          roles={['manager']}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
