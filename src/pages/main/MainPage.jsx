import React from 'react';

import Button from 'components/button/Button';

// import { FIREBASE_APP } from 'MyFirebase'; // TODO: Authentication: Uncomment this line

import './MainPage.scss';

class MainPage extends React.Component {

    state = {
        logoutErrorMessage: ''
    }

    onLogOut = () => {
        // TODO: Authentication, log out
        // Write code to log out of your Firebse app here
        this.setState({
            logoutErrorMessage: 'Logout is not implemented'
        });
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
