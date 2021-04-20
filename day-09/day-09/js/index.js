// Drawing circles in an svg with JavaSciprt 
'use strict';

// Constants / global variables
const height = 255;
const width = 255;
const fill = '#d3d3d3';
const namespace = 'http://www.w3.org/2000/svg';

// State of our application
let state = {
    circles: []
};

// Create a `p` element DOM


// Set the inner HTML of the paragraph to be some bold text


// Select the element with class `container`, and append the paragraph to it


// Select `svg` element from the DOM


// Set the width and height attributes using `setAttribute`


// Add a `rect` with the same width and height, and set the fill to `fill`
// Note, you'll have to use `createElementNS` with our namespace
// Also, set the pointerEvents to 'none'. Then, append this `rect` to the svg


// Create a button with class "btn center-align" and append it to the element with class container.
// You want to have it *inserted before* the div with class `svg-wrapper`


// Function to render a circle in a parent element
function renderCircle(coord, parent) {
    // Create the circle


    // Define styles

    // Append

}

// Function to draw all circles in a parent
function drawCircles(data, parent) {

}

// Function to clear circles from a parent
function clearCircles(parent) {

}

// Assign event listener - on click:
// - push a new data element into the state
// - call the `update` function


// Update function: call `clearCircles`, `drawCircles`, and `updateText`
function update() {
    // Clear container

    // Update container contents

}

// Text function: change paragraph text to display the number of circles, and avg. color.
// Avg. color (in rgb) is the avg. x position (green) and avg. y position (blue)
// Set the text to be that color
function updateText(data) {
    // Compute average in x direction (green)


    // Compute average in x y direction (blue)


    // Set values to 0 if there is no data


    // Set text string and the color of the element

}

// Assign an event listener for the `clear` button
// Reset state.circles to an empty array and then `update`