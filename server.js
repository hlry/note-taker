const express = require('express');
const apiRoutes = require('./routes/apiRoutes/notes.js');
const htmlRoutes = require('./routes/htmlRoutes');

// add heroku port or local port
const PORT = process.env.PORT || 3001;
// instantiate server
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(apiRoutes);
app.use('/', htmlRoutes);

// make front end files available
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
});