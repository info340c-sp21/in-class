import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchApp from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';


// Data to pass to our List elements
const employeeData = [
    {
        name: "Joan",
        title: "developer",
        salary: 100000
    },
    {
        name: "Enrique",
        title: "manager",
        salary: 200000
    },
    {
        name: "Shana",
        title: "developer",
        salary: 105000
    },
    {
        name: "Shana",
        title: "manager",
        salary: 105000
    },
];

ReactDOM.render(<SearchApp data={ employeeData } />, document.getElementById('root'));
registerServiceWorker();