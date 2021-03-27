const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const { notes } = require('../../db/db.json');
const writeNotes = require('../../db/notes');


// read db.json and return contents as JSON
router.get('/api/notes', (req, res) => {
    res.json(notes)
})

// POST /api/notes should receive a new note to save on the request body,
// add it to the db.json file, and then return the new note to the client. 
// You'll need to find a way to give each note a unique id when it's saved 
// (look into npm packages that could do this for you).
router.post('/api/notes', (req, res) => {
    let newNotes = req.body;
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();
    // push note to /db
    notes.push(newNotes);
    // test with console log
    console.log(newNotes);
    // write notes string to /db/db.json
    writeNotes(notes);
    // return new note as json
    res.json(newNotes);

});


module.exports = router;