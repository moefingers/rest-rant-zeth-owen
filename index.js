// Modules and Globals
require('dotenv').config();
const express = require('express');
const app = express();
const render = require('./render');
const router = require('express').Router()
const methodOverride = require('method-override');

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


// Controllers & Routes
app.use('/places', require('./controllers/places'));


app.get('/', (req, res) => {
    res.send(render('home'));
});

// Wildcard/404 route
app.get('*', (req, res) => {
    res.render('error404')
})

// Listen for Connections
app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});

module.exports = router





