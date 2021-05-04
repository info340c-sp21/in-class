'use strict';

// Base of the api
const urlBase = "https://api.github.com/search/repositories?sort=stars&q=";

// Create a click event for your button
$('form').submit(function (event) {
    // Prevent the default behavior for your event
    event.preventDefault();

    // Get the value of your queryInput, and construct your API query

    // Fetch the data at that URL, THEN
    // Return the `.json()` of the response, THEN
    // Pass the results to renderSearchResults, make sure to CATCH
    // Any of your errors


    return false; // prevent unwanted page behavior
});

// Write a function to render an <li> inside of a parent
// You should display the title as a link, and
// The description of the repo
function renderItem(item, parent) {

}

// Write a function to render search results. 
// It should iterate through items and call the renderItem method
function renderSearchResults(results) {
    // Create a new ul as the parent + append it to the body

    // Iterate through results and call the renderItem method

}