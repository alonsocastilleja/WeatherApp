const express = require('express');
const app = express();

// Middleware used to view static files such as your CSS
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

// Import Route module
const weatherRoute = require('./routes/weather');

// Use View Engine
app.set('view engine', 'ejs');

// Middleware route
app.use('/', weatherRoute);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server starting at port ${PORT}`));