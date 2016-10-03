import React from 'react';

import Button from 'components/button/Button';

import { FIREBASE_APP } from 'MyFirebase'; // TODO: Authentication: Uncomment this line

import './MainPage.scss';

class MainPage extends React.Component {

    state = {
        logoutErrorMessage: ''
    }

    onLogOut = () => {
        // TODO: Authentication, log out
        // Write code to log out of your Firebse app here

        const logoutSuccess = () => {
            console.log('logged out');
        };
        const logoutError = (error) => {
            this.setState({ logoutErrorMessage: error.message });
        };

        FIREBASE_APP.auth().signOut().then(logoutSuccess, logoutError);
    }

    render() {
        return (
            <div className="page-main">
                <h1>You are logged in!</h1>

                <Button className="button-log-out" onClick={this.onLogOut}>
                    Log out
                </Button>

                <div className="error-message">{this.state.logoutErrorMessage}</div>
            </div>
        );
    }
}

export default MainPage;
