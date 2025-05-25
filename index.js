const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

// Middleware
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
    res.render('homee'); // Changed from homee.ejs to index.ejs
});

app.get('/contacts', (req, res) => {
    res.render('contacts');
});

app.get('/syllabus', (req, res) => {
    res.render('syllabus');
});

app.get('/learn', (req, res) => {
    res.render('learn');
});

app.get('/demo', (req, res) => {
    res.render('demo');
});

// Start server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});