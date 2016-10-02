[Last: Getting Started](./getting_started.md)

# Hosting

1. `$ cd your/project/directory`
1. `$ firebase init`
    1. Hit ENTER: (Leave both Database and Hosting seleted)
    2. Select which one of your Firebase projects you want to write a web-app for, then hit ENTER
    3. Hit ENTER: (Database rules file, use default)
    4. Hit ENTER: (Public directory, use defualt)
    5. "Y", then hit Enter: (Single-page app because we'll do all the routing client side)
1. `$ firebase deploy`
    - Deploys the contents of index.html
1. In browser, go check out your Firebase app!
    - Find the url in your [Firebse console](https://console.firebase.google.com/), or just go to `your-project-name.firebaseapp.com` (Should work unless your-project-name was already taken).
    - This shows your newly deployed firebase app! If you didn't change the public/index.html file, the page is the default provided by firebase with some information about how to proceed.

[Next: Clone Project](./clone_project.md)
