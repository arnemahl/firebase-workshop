import React from 'react';
import { Router, Route, Redirect }  from 'react-router';
import { createHashHistory } from 'history/lib';

import LoginPage from 'pages/login/LoginPage.jsx';

export default (
    <Router history={createHashHistory({ queryKey: false })}>
        <Route path="login" component={LoginPage}/>
        <Redirect from="*" to="login" />
    </Router>
);
