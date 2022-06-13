console.log("Executing Notes.js File");
const fs = require('fs');


// fatch all notes
var fetchNotes = () => {
    try {

        // reading file using readFileSync and gettting all data in JSON formate
        var noteString = fs.readFileSync('data.json');
        return JSON.parse(noteString);
    } catch (e) {
        return [];
    }
};


// Functions to save notes in json formate
var saveNotes = (notes) => {
    fs.writeFileSync('data.json', JSON.stringify(notes));
}

// add notes functions
var addNote = (title, body) => {
    // Dummy console 
    //console.log('Adding note', `\nTitle: ${title} \nBody:  ${body}`);


    var notes = fetchNotes();
    var note = {
            title,
            body
        } // object form

    // checking for duplicate notes with entered title
    var duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });


    // If note doesnt exist push and save it
    if (duplicateNotes.length === 0) {
        notes.push(note); // doubt
        saveNotes(notes);
        return note;
    }

};

// get all notes
var getAll = () => {
    // dummy console
    // console.log('Getting all notes');

    return fetchNotes();
};

// Get notes with title and body
var getNote = (title, body) => {
    // dummy console
    //console.log('Getting note', `\nTitle: ${title} \nBody:  ${body}`);

    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => {
        return note.title === title;
    });
    return filteredNotes[0];
};


// Remove added notes
var removeNote = (title) => {
    // dummy console
    // console.log('Removing note', title);

    var notes = fetchNotes(title);
    var filteredNotes = notes.filter((note) => {
        return note.title !== title;
    });

    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
};

// exporting modules
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
};