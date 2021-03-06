import React, { Component } from 'react';
import store from 'store/Store';

import Button from 'components/button/Button';
import TextInput from 'components/text-input/TextInput';

// import { FIREBASE_APP } from 'MyFirebase'; // TODO: Authentication: Uncomment this line

import './LoginPage.scss';

class AuthInput extends Component {
    componentWillMount() {
        store.auth.listenWhileMounted(this, this.props.field);
    }
    onChange = (event) => {
        store.auth.set({
            [this.props.field]: event.target.value
        });
    }

    render() {
        const {field, label, ...otherProps} = this.props;
        const value = this.state[field];

        return (
            <div className="auth-input">
                <label>{label}</label><br />
                <TextInput value={value} onChange={this.onChange} {...otherProps} />
            </div>
        );
    }
}

class CreateUserForm extends Component {

    state = {
        errorMessage: ''
    }

    componentWillMount() {
        store.auth.listenWhileMounted(this, ['email', 'password', 'passwordRepeat']);
    }

    onCreateUser = () => {
        const {email, password, passwordRepeat} = this.state;

        console.log('Create user:\n\temail:', email, '\n\tpassword:', password, '\n\tpasswordRepeat:', passwordRepeat);

        // TODO: Authentication, create user:
        // Write code to create a new user in your Firebase app here
        this.setState({
            errorMessage: 'Create user is not implemented!'
        });
    }

    render() {
        return (
            <form className="form-create-user">
                <h1>Create user</h1>
                <AuthInput field="email" label="E-mail" type="text" />
                <AuthInput field="password" label="Password" type="password" />
                <AuthInput field="passwordRepeat" label="Repeat password" type="password" />
                <Button onClick={this.onCreateUser}>Create user</Button>

                <div className="error-message">{this.state.errorMessage}</div>
            </form>
        );
    }
}

class LogInForm extends Component {

    state = {
        errorMessage: ''
    }

    componentWillMount() {
        store.auth.listenWhileMounted(this, ['email', 'password']);
    }

    onLogin = () => {
        const {email, password} = this.state;

        console.log('Log in:\n\temail:', email, '\n\tpassword:', password);

        // TODO: Authentication, log in
        // Write code to log in to your Firebase app here
        this.setState({
            errorMessage: 'Login is not implemented!'
        });
    }

    render() {
        return (
            <form className="form-log-in">
                <h1>Log in</h1>
                <AuthInput field="email" label="E-mail" type="text" />
                <AuthInput field="password" label="Password" type="password" />
                <Button onClick={this.onLogin}>Log in</Button>

                <div className="error-message">{this.state.errorMessage}</div>
            </form>
        );
    }
}

// TODO: Authentication, listen for logged in state
// For example right here, or somewhere else if you want

export default class LoginPage extends Component {

    state = {
        showLoginForm: true
    }

    onClick = () => {
        const {showLoginForm} = this.state;

        this.setState({
            showLoginForm: !showLoginForm
        });
    }

    render() {
        const {showLoginForm} = this.state;

        console.log('showLoginForm:', showLoginForm); // DEBUG

        return (
            <div className={'page-login ' + (showLoginForm ? 'log-in' : 'create-user')}>
                { showLoginForm ? <LogInForm /> : <CreateUserForm /> }

                <Button onClick={this.onClick}>
                    {showLoginForm ? 'Create user' : 'Log in'} instead
                </Button>
            </div>
        );
    }
}
