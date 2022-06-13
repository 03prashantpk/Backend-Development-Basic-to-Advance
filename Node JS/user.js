console.log("Starting app.js");

// required packages and files
const fs = require('fs');
const yargs = require('yargs');
const argv = yargs.argv;
const command = argv._[0];

const notes = require('./notes.js');

console.log("Command is: ", command);
console.log("yargs ", argv);


// Conditions
// TO run add command
if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);

    if (note) {
        console.log(`Note Created\nTitle is ${note.title} \nBody ${note.body}`);
    } else {
        console.log('Note Exist')
    }

    // To run read command
} else if (command === 'read') {
    var readingNotes = notes.getNote(argv.title);

    if (readingNotes) {
        //console.log("Working...");
        notes.getNote(argv.title);
        console.log(readingNotes);
    } else {
        console.log('Someting Went wrong!')
    }

    // TO run remove command
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var msg = noteRemoved ? 'Note was removed' : 'Note Was not found';
    console.log(msg);

    // Listing all notes
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log("Printing all notes")
    console.log(`Printing ${allNotes.length} Note(s)`);

    allNotes.forEach((note) => {
        console.log(`Title: ${note.title}\nBody: ${note.body}`)
    });


    // Else Invailed command
} else {
    notes.getAllNote("Command Not recog...");
}