// required packages and files
const fs = require("fs");
const yargs = require('yargs');
const argv = yargs.argv;
const command = argv._[0];

// Included Files
const mainFunctions = require('./functions.js');

// Printing entered commands
console.log('\n\n============================================\n\n');
console.log("Starting Project 2");
console.log("Command is: ", command, '\n');
//console.log("yargs ", argv);


if (command === 'login') {
    console.log("Logged in successfully!");
} else if (command === 'register') {
    //console.log("Taking You to the Registration Portal!");

    var registration = mainFunctions.register(argv.userName, argv.userPassword);

    if (registration) {
        //console.log('Registered Successfully!');
    } else {
        console.log('Something Went Wrong. Please Try again.');
    }

} else if (command === 'delete') {
    console.log('Are you sure you want to delete your data');
} else {
    console.log('You have Entered a invalid Command.');
}

console.log('\n\n============================================');