const fs = require("fs");
const path = require('path');
const router = require('express').Router();
const { notes } = require("../../db/db.json");

// read db.json and return contents as JSON
router.get('/api/notes', (req, res) => {
    res.json(notes)
})

// router.get('/notes', (req, res) => {
//     const result = 
// })




module.exports = router;