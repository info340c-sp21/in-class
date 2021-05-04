'use strict';


// Class Puppy
class Puppy {
    // Constructor: takes in an img url, and a sound

    // Method for "speaking" using responsiveVoice

    // Render a Div that you can click on to bark

}


// Class Form
class PuppyForm {
    // Contructor: takes in a callback function you can do
    constructor(callback) {
        this.callback = callback;
    }

    // Render: build the form with submit event
    render() {
        // Build form and input elements
        let form = $('<form>');
        let urlInput = $('<input class="url">');
        urlInput.attr({
            type: "text",
            placeholder: "Puppy URL...",
            class: "form-control"
        });
        let soundInput = $('<input class="sound">');
        soundInput.attr({
            type: "text",
            placeholder: "Sound to make...",
            class: "form-control"
        });
        form.append(urlInput);
        form.append(soundInput);
        form.append($('<button class="btn btn-primary mb-3" type="submit">Add a puppy!</button>'));

        // On submit, do the callback function
        form.on('submit', (event) => {
            event.preventDefault();
            this.callback(urlInput.val(), soundInput.val());
            return false;
        });
        return form;
    }
}

// Class for the app
class PuppyApp {
    // Constructor: takes in a parent element and list of puppies

    // Add puppy: pushes new data into list of puppies and re-renders the app


    // Render;
    render() {
        // Empty parent element


        // Create and render a new form

        // Append puppy list element to parent (in a wrapper div)

    }
}

// Create a new app with a single puppy


// Render the app
