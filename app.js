const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const connectDB = require('./config/db');

// Load Config
dotenv.config({path: './config/config.env'})
connectDB();

const app = express();
// Logger
if(process.env.NODE_ENV === 'development'){
    app.use(logger('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', require('./routes/index'));
app.use('/api/users', require('./routes/users'));

module.exports = app;
