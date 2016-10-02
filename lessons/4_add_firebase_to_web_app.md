[Last: Clone Project](./3_clone_project.md)

# Add Firebase to your web app

We've already added our web app to Firebase. Now it's time add some Firebase to our web app. That way we can use the other Firebase features, not just hosting.

In [MyFirebase.js](../src/MyFirebase.js), change the `config` constant so that it points to your own app. To do this, go to the app dashboard in the [Firebase console](console.firebase.google.com). Click **Add Firebase to your web app** and copy the config part of if. (We won't copy the entire code, because we want to use ES-2015 `import`/`export` rather than binding variables to `window`.)

In MyFirebase.js we create three constants. We'll get back to those when we're gonna start using the *Realtime Database* feature.

[Next: Authentication](./5_authentication.md)
