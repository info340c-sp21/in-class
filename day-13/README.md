# Activity-1
In this activity, you'll practice passing props to a simple react component, and nesting your components.

In your `index.js` file, you'll want to do the following:

- Create a class (component) `Person` by extending `React.Component`. 
- The `render()` function of your `Person` class should return a _single HTML element_ with the phrase: Hello, my name is NAME and I am interested in INTEREST
- The `NAME` and `INTEREST` will be passed in via _props_
- Create anothe class (component) `People` by extending `React.Component`. 
- The `render()` function of your `People` class should return a _single HTML element_ that contains a `<Person>` object for each element in your `people` constant.
- Render your `<People>` component to the DOM.