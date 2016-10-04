[Last: Add Firebase to your web app](./4_add_firebase_to_web_app.md)

# Authentication

It's time to add authentication to our web-app. Firebase offers several types of authentication and they're all quite easy to use.

We are going to look at [email and password based authentication](https://firebase.google.com/docs/auth/web/password-auth). The use cases we want to support are:

* Creating a new user
* Logging in with an existing user
* Logging out
* Listening to authentication state


#### 1. Turn on Authentication for your Firebase App

Before we write any code, we must turn on Email/Password authentication for our Firebase app. Go to the [Firebase console](https://console.firebase.google.com/) and select your app. In your Firebase app console select **Auth** in the left hand menu, then **SIGN-IN-METHOD** in the top menu. Click on **Email/Password** under *Sign-in providers* and flick the switch to Enabled (is is enabled when blue).


#### 2. Accessing Firebase auth API

In the file [LoginPage](../src/pages/login/LoginPage.jsx) there are some TODOs for authentication. At the top, uncomment the line to import `FIREBASE_APP` from [MyFirebase.js](../src/MyFirebase.js). The Firebase auth API is accessible through `FIREBASE_APP.auth()`.

You can search for `TODO: Authentication, listen for logged in state` in [LoginPage](../src/pages/login/LoginPage.jsx).


#### 3. Creating a new user

Find the next TODO in [LoginPage](../src/pages/login/LoginPage.jsx), , `TODO: Authentication, create user`, inside the React component `CreateUserForm`. Here you should write your code to log in to your Firebase app.


It should now be possible to create a new user, and get logged in in the process.

```
firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function() {
        // SUCCESS
    })
    .catch(function(error) {
        // FAILURE
        const { code, message } = error;
    });
```

On success, do `store.set({ currentUserId: 'foo' })`. (This lets the rest of the App know when a user gets created and redirects to the main page.)

On failure, update the `errorMessage` in the component state.


#### 4. Logging in with an existing user

Still in [LoginPage](../src/pages/login/LoginPage.jsx), find the `TODO: Authentication, create user`, this is inside the `LoginForm` component.

```
firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function() {
        // SUCCESS
    })
    .catch(function(error) {
        // FAILURE
        const { code, message } = error;
    });
```

On success, do `store.set({ currentUserId: 'foo' })`. (This lets the rest of the App know when a user gets logged in and redirects to the main page.)

On failure, update the `errorMessage` in the component state.


#### 5. Logging out

In [MainPage](../src/pages/main/MainPage.jsx) uncomment the import of `FIREBASE_APP`and implement log-out (`TODO: Authentication, log out`).

```
firebase.auth().signOut().then(function() {
    // SUCCESS
}, function(error) {
    // FAILURE
});
```

On success, do `store.set({ currentUserId: '' })`. (This lets the rest of the App know when a user gets logged out and redirects to the login page.)


#### 6. Listening to authentication state

Because Firebase authentication can recognize a device which has recently been logged in, the users may not need to log in again when starting a new session. Let us write a listener so that Firebase can let us know whether the user is logged in or not.

Back in [LoginPage](../src/pages/login/LoginPage.jsx), find the `TODO: Authentication, listen for logged in state`.

```
FIREBASE_APP.auth().onAuthStateChanged((user) => {
    // If NOT logged in, user is falsy

    // Otherwise, user is an object which may contain all of the fields:
    const { displayName, emailVerified, photoURL, isAnonymous, refreshToken, providerData, email, uid } = user;

    // We only care about the uid in our examle.
});
```

On success, do `store.set({ currentUserId: uid })`. (You may now remove the code for updating currentUserId when creating user, loggin in and logging out.)

If that worked, you can now refresh the page without having to log in again (but only if you were logged in before you refreshed of course).


[Next: Realtime Database](./6_realtime_database.md)
