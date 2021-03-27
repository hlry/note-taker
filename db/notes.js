const fs = require("fs");
const path = require("path");
const { notes } = require("./db.json");

// write notes to database every time a note is created or deleted
function writeNotes(notes) {
    fs.writeFile("./db.json", JSON.stringify(notes), err => {
        if (err) throw err;
        return true;
    });
}

module.exports = writeNotes;