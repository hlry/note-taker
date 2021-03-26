const fs = require("fs");
const path = require('path');
const router = require('express').Router();
const { notes } = require("../../db/db.json");

// read db.json and return contents as JSON
router.get('/api/notes', (req, res) => {
    res.json(notes)
})

// post 
// POST /api/notes should receive a new note to save on the request body,
// add it to the db.json file, and then return the new note to the client. 
// You'll need to find a way to give each note a unique id when it's saved 
// (look into npm packages that could do this for you).
router.post("/api/notes", (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();

    // if any data in req.body is incorrect, send 400 error back
    if (!validateAnimal(req.body)) {
        res.status(400).send("The animal is not properly formatted.");
    } else {
        const animal = createNewAnimal(req.body, animals);
        res.json(animal);
    }

});


module.exports = router;