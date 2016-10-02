[Last: Hosting](./hosting.md)

# Clone Project

Now we'll change the frontend code. Since our focus is on Firebase, you can just clone this project into your project directory.
    
1. `$ cd your/project-directory`
2. `$ git clone https://github.com/arnemahl/firebase-workshop.git .`
    * Be sure to add the `.` at the end to clone directly into your project directory
3. `$ npm install`
4. Run the code with two npm commands (at the same time, they need to keep running).
    1. `npm run start`
    2. `npm run hot`
    3. Go to [http://localhost:3000/#/login](http://localhost:3000/#/login) look at the page.
5. If the installation went OK, build the app and deploy.
    1. `npm run build`
    2. `firebase deploy`
        * Tip: You can also run the buildt code with `$ firebase serve`, this is as close to seeing the deployed code as you'll get without actually deploying.
    3. Go check yout your app online, to see that it really worked :)
