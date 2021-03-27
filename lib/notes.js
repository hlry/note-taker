const fs = require("fs");
const path = require("path");
const { notes } = require("../db/db.json");

// write notes to database every time a note is created or deleted
function writeNotes(notes) {
    fs.writeFile("../db/db.json", JSON.stringify(notes), err => {
        if (err) throw err;
        return true;
    });
}

// return notes as json
// function readNotes(notesArray) {
//     const result = notesArray.filter(notes)

// }

// writeNotes();

module.exports = writeNotes;