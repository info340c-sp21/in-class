# React Activity

In this activity, we'll walk through **all** of the steps of building an interactive visualization in React. Follow the steps below to build an interactive bar chart of Olympic Medalists.

## Instructions
1. Transform the scaffolding of this application by running `create-react-app .` _in this folder_. Note the `.` after `create-react-app`, which will create the app in the _current folder_. Before you can do this, you'll need to **temporarily move** the content in the folder because the file names _may_ conflict (you can move them to your `Desktop/`).

2. Move this `README.md` file back into the folder. Also, move the `data/` folder into the recently created `public/` folder. This is where you'll need to store publicly accessible content (`.csv` files, images, etc.).

3. We'll a variety of data manipulation functions from the `d3` (i.e., loading data, grouping data, etc.). Use `npm` to _install_ the `d3` package, making sure to **save it** to your `package.json` file.

4. Open up your `App.js` file and remove all unnecessary content(some `import` statements, the current content returned by the `render()` method, etc.).

5. Write a `constructor` method in which you set the initial state. You should define `data` to an empty array, and `xVariable` to `sport`.

6. Now we'll **load our data**. To do this, import the `d3` package. Then, create a `componentDidMount()` method on your `App` class that loads the data from `data/medalists.csv`. Load your data with the `d3.csv` method, then should set the `data` attribute of state to trigger a re-rendering. To see if this worked, add a `console.log` statement to your `render()` method where you log the data.

7. We'll want to group our data by our `xVariable` to change what goes on the xAxis (i.e., are we looking by sport, by country, by year, etc.). Take a few minutes and read through [this tutorial](http://learnjsdata.com/group_data.html) on grouping data. Then, create a variable `chartData` that is an **array of objects**, one for each observation. For example, if the `xVarible` is `year`, one of those objects would be `{x:2000, y:145}`, where `y` is the total number of medalists for that year.

8. Now that we have the data to graph, we'll need to install and import our charting library. Begin by install (and saving) the `recharts` package using `npm`. Then, in your `App.js` file, import these named exports from the library: BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar.

9. Run ```npx react-codemod rename-unsafe-lifecycles``` to fix issues with this codebase

10. Using the [documentation](http://recharts.org/#/en-US/) as a reference, make a bar chart on your page!

11. To make the page interactive, we'll add a `ButtonGroup` for your user to select the `xVariable`. To do this, we'll use `reactstrap` to have bootstrap styled components ([docs](https://reactstrap.github.io/components/button-group/)). We'll need to install both `bootstrap` and `reactstrap` using npm, then import this content:

```javascript
// Get bootstrap css
import 'bootstrap/dist/css/bootstrap.css';

// Import dropdown menu
import { Button, ButtonGroup } from 'reactstrap';

```

12. To create your `Button` elements in your `ButtonGroup`, I suggest you iterate through an array of options (i.e., `['Sport', 'Year', 'CountryName']`). Then, return a `<Button` element, that (when clicked) updates the state of `xVariable` (you should now write a function that does that as well).
