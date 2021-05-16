# react-router
This is a simple demo of building a multi-page application using `react-router`. Because this project was created with **create-react-app**, you'll need to run `npm install` and `npm start` to get started.

## Router
`react-router` is a package for building multi-page applications in the context of react. It is quite powerful, so we'll aim for a mastery of the basic functionalities. In this application, we'll build a personal website to showcase your work, showing your `homepage`, `about` section, and `projects` pages as separate "routes".


1. To get started, place a `<Router>` tag in your `<App>`. In your `<Router>`, tag you'll need to include two types of elements:
- `<Link>` tags: links to each page of your application. For example, `<Link to="/about">About</Link>`
- `<Route>` tags: descriptions of what Components to render at each route. For example, `<Route path="/about" component={About}/>`

Create a `<Link>` and `<Route>` element for each of 3 sections: `homepage`, `about`, and `projects`.

2. Create a `<Homepage>` component, in which you display a `<Jumbotron>` tag ([docs](https://reactstrap.github.io/components/jumbotron/))with your name.

3. Create an `<About>` component, in which you display some text about your interests.

4. Edit the `<Projects>` component so that you render a reactstrap Card for each project you've worked on. These projects are stored in the  `public/data/projects.csv` file which is read into the Component.
