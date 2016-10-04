[Last: Authentication](./5_authentication.md)

# Realtime Database

Finally we are going to use core feature of Firebase, the [Realtime Database](https://firebase.google.com/docs/database/)!

Remember the constants in [MyFirebase.js](../src/MyFirebase.js)? The constant we called `FIREBASE_REF` gives us access to read and write to our Firebase app's realtime database.

## Introducing the concepts

Before we do any implementation excercises, let's go through a few key concepts.

#### References

First off, before we read or write data we need to decide what part of the database to write to or read from, by defining a [Reference](https://firebase.google.com/docs/reference/js/firebase.database.Reference) (or `ref` for short).

Our constant `FIREBASE_REF` is the reference to the entire database. In order to reference other parts of the database, we use the `child('somePath')` method of the reference. This returns a new reference, so you can chain it:

```
const userNameRef = FIREBASE_REF.child('users').child(currentUserId).child('name');
```

We can use this reference to read from and write to the database, amongst other things.


#### Writing data

We can [save data](https://firebase.google.com/docs/database/web/save-data) to our firebase through four API methods:

> * `set()` Write or replace data to a defined path, such as users/<user-id>/<username>.
> * `push()`  to a list of data. Every time you call push(), Firebase generates a unique key that can also be used as a unique identifier, such as user-posts/<user-id>/<unique-post-id>.
> * `update()` Update some of the keys for a defined path without replacing all of the data.
> * `transaction()` Update complex data that could be corrupted by concurrent updates.


#### Retrieving data

Lets look at the different ways we can read data with Realtime Database API.

###### Listeners: `on()` and `off()` vs. `once()`

First off all, the it's called _Realtime_ Database for a reason: If we use `someRef.on(<changeType>, listenerFn)`, the listenerFn will be called every time there is a change (of the specified type) to the data at `someRef`. In the odd case that you only want to read once and ignore any updates to the value, you can use `once(...)` instead of `on(...)`, which works the same way, but only calls the callback once.

To deregister a listener, use `off(...)`, e.g. `someRef.off(<changeType>, listenerFn)`.

###### Change types

There are five types of change that can happen:

> * `value` Read and listen for changes to the entire contents of a path.
> * `child_added` Retrieve lists of items or listen for additions to a list of items. Suggested use with child_changed and child_removed to monitor changes to lists.
> * `child_changed` Listen for changes to the items in a list. Use with child_added and child_removed to monitor changes to lists.
> * `child_removed` Listen for items being removed from a list. Use with child_added and child_changed to monitor changes to lists.
> * `child_moved` Listen for changes to the order of items in an ordered list. child_moved events always follow the child_changed event that caused the item's order to change (based on your current order-by method).

The one you'll use most frequently is 'value': `someRef.on('value', listenerFn)`.

###### Data snapshot

When a listener is called, it receives a [Data snapshot](https://firebase.google.com/docs/reference/android/com/google/firebase/database/DataSnapshot). You can get several pieces of information by calling methods on this snapshot. Most importantly you extract the value of the snapshot like this:

```
const listenerFn = (snapshot) => {
    const value = snapshot.val();
}
```
#### ServerValue: timestamp

The last constans in [MyFirebase.js](../src/MyFirebase.js) is `TIMESTAMP`. This is a special value you can write to a field in the database and the database will replace it with a guaranteed accuarte timestamp! The timestamp will be in milliseconds since epoch time (just like `Date.now()` in JavaScript), and you can create a [JavaScript Date](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date) from it with `new Date(timestamp)`.


## Usage example

Finally, let's put this knowledge to some good use. We'll let the user change her user name, and make sure it's synced into our app-state and displayed on subsequent visits.

#### 1. Set userName

For this example we will write using `set()`. In the [MainPage](../src/pages/main/MainPage.jsx) component, let us create a function to write data to our Firebase.

Update the import statement to get `FIREBASE_REF` as well as `FIREBASE_APP`.

```
import { FIREBASE_APP, FIREBASE_REF } from 'MyFirebase'; // TODO: Authentication: Uncomment this line
```

Create a form where the user can update her user name (you may look at how forms can be created in [LoginPage](../src/pages/login/LoginPage.jsx)). Upon confirmation, we can now write to the database:

```
FIREBASE_REF.child('users').child(store.currentUserId).child('name').set(this.state.userName);
```


#### 2. Listen for updates to userName

// We also want to read from the database and sync the user name next time we load the page.


In [Store](../src/store/Store.js) we will add a listener to make sure we always sync the userName from the database once we are logged in.

```
store.addListener((currentUserId) => {
    if (currentUserId) {
        FIREBASE_REF.child('users').child(currentUserId).child('name').on('value', (snapShot) => {
            const userName = snap.val();

            store.set({ userName });
        })
    }
}
},'currentUserId')
```

Now, in the MainPage component, we can sync `userName` from the store.

```
componentWillMount() {
    store.listenWhileMounted(this, 'userName');
}
```

To see that this updates in real-time, open the page in another browser window and change the userName there.
