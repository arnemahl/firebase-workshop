import React, { Component } from 'react';
import store from 'store/Store';

import Button from 'components/button/Button';
import TextInput from 'components/text-input/TextInput';

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

    componentWillMount() {
        store.auth.listenWhileMounted(this, ['email', 'password', 'passwordRepeat']);
    }

    onCreateUser = () => {
        const {email, password, passwordRepeat} = this.state;

        console.log('Create user:\n\temail:', email, '\n\tpassword:', password, '\n\tpasswordRepeat:', passwordRepeat);
    }

    render() {
        return (
            <form className="form-create-user">
                <h1>Create user</h1>
                <AuthInput field="email" label="E-mail" type="text" />
                <AuthInput field="password" label="Password" type="password" />
                <AuthInput field="passwordRepeat" label="Repeat password" type="password" />
                <Button onClick={this.onCreateUser}>Create user</Button>
            </form>
        );
    }
}

class LogInForm extends Component {

    componentWillMount() {
        store.auth.listenWhileMounted(this, ['email', 'password']);
    }

    onLogin = () => {
        const {email, password} = this.state;

        console.log('Log in:\n\temail:', email, '\n\tpassword:', password);
    }

    render() {
        return (
            <form className="form-log-in">
                <h1>Log in</h1>
                <AuthInput field="email" label="E-mail" type="text" />
                <AuthInput field="password" label="Password" type="password" />
                <Button onClick={this.onLogin}>Log in</Button>
            </form>
        );
    }
}

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
