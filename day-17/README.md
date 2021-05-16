# Authentication

In this problem set, we'll walk through setting up an application powered by [Firebase](https://firebase.google.com/). Make sure to reference the [course book chapter](https://info340.github.io/firebase.html#user-authentication) for details.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Instructions
In this exercise, we'll build an authentication system for a React application. Before getting started, make sure that:

1. You have your account set up on Firebase ([instructions](https://info340.github.io/firebase.html#setting-up-firebase)).

2. You [create a new project](https://info340.github.io/firebase.html#creating-a-project) for this exercise.

### Set up
In your `src/index.js` file, do the following:

1. Import necessary modules: `firebase` (from `'firebase/app'`), and bootstrap styles (`'bootstrap/dist/css/bootstrap.css'`).

2. **Copy and paste** the configuration object from the Firebase web console into a new script `Config.js`. Make sure to **add this filename** to your `.gitignore` file (so that your private key isn't added to GitHub). Then, import that object into your `index.js` script and pass the `config` object into the `firebase.initializeApp()` function. Do this _before_ you render your `<App>`.

You are now ready to integrate the app into your application.

### Authentication
To start using Firebase's authentication services, you'll need to use the `onAuthStateChanged()` method. This will watch for changes to the authentication status, and fire a callback function, which is powerful because it will **automatically fire** when you execute the methdos described below. Because this method should only be executed once, you should write it in the `componentDidMount()` method. It should:

1. Check if there is a `user` (the name we will give to the callback argument of the function).
2. If there is a user, set the state of the application such that the `user` is equal to the `user`. It will also help (for future functionality) to reset the email, password, and username to an empty string ('').
3. If there _is not_ a user, set the state of the `user` to `null`. This will happen when the user signs out. 

### Sign up
We'll start by adding a _sign up_ method that will allow users to sign-up for your application using their email and a password. To do this, we'll need to manipulate our app as follow:

1. Add a method to our app `handleChange()` that will track the state of the `email`, `password`, and `displayName` entered by the user. This event should be fired by each input element of the form, updating the `state` of the application appropriately.
2. Add a method to our app `handleSignUp()` that will:
    -  Use Firebase's `createUserWithEmailAndPassword()` to create a new user using the email and password currently stored in the state. When that method is successful(i.e., in the _callback_)...
    -  It should **set the `displayName` property** of the newly created user (using the `updateProfile` method), _then_,
    - It should change the state of the current user. And,
    - It should `catch` any errors, and update the `errorMessage` property of the application state. This will likely reveal issues that you need to resolve.
3. Assign the `handleSignUp()` method as an event listener to the `Sign Up` button.

You should now be able to create users through your form, catch errors (that are provided by Firebase), and see newly created users on Firebase!

### Sign in
In this section, we'll provide the necessary functionality to enable users (who have already been created) to sign-in. Because of the work we did on set-up, this step is quite straightforward:

1. Add a new `handleSignIn()` method that leverages Firebase's `signInWithEmailAndPassword` method. When this changes, the `onAuthStateChanged()` callback will execute, and should update our state properly.
2. Just in case, make sure to `catch` any errors.
3. Assign the `handleSignIn()` method as an event listener to the `Sign In` button.

### Sign Out
In this section, we'll provide the necessary functionality to enable users (who are logged in) to sign-out.

1. Add a new `handleSignOut()` method that leverages Firebase's `signOut` method. When this changes, the `onAuthStateChanged()` callback will execute, and should update our state properly.
2. Assign the `handleSignOut()` method as an event listener to the `Sign Out` button.

### Conditional rendering
To make a more sensible application, certain information should be conditionally displayed. In the `render()` method, define the following content that holds different values depending on the state of the application:

1. A `welcomeDiv` that contains the content `<div>Hello, {this.state.user.displayName}</div>`. However, if `this.state.user` is `null`, it should only contain an empty string (`""`). Render your `welcomeDiv` above your form.
2. An `errorDiv` that contains the content `<div>Error: {this.state.errorMessage}</div>`. However, if `this.state.errorMessage` is `null`, it should only contain an empty string (`""`). Render your `errorMessage` above your form.

You should apply a similar methodology to only show relevant parts of the form. For example, the `Sign Out` button should not be displayed (or shouldn't be _actve_) if there is no user.