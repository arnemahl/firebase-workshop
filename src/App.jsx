import React from 'react';
import { Router, Route, IndexRoute }  from 'react-router';
import { createHashHistory } from 'history/lib';

import store from 'store/Store';

import MainPage from 'pages/main/MainPage.jsx';
import LoginPage from 'pages/login/LoginPage.jsx';

class App extends React.Component {

    componentWillMount() {
        store.listenWhileMounted(this, 'currentUserId');
    }

    componentWillUpdate() {
        const {currentUserId} = store;

        if (!currentUserId) {
            if (window.location.hash !== '#/login') {
                window.location.hash = 'login';
            }
        } else {
            if (window.location.hash === '#/login') {
                window.location.hash = '/';
            }
        }
    }

    render() {
        return this.props.children;
    }
}

export default (
    <Router history={createHashHistory({ queryKey: false })}>
        <Route path="/" component={App}>
            <IndexRoute component={MainPage} />
            <Route path="login" component={LoginPage}/>
        </Route>
    </Router>
);
