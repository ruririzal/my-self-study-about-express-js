const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo');
const connectDB = require('./config/db');

// Load Config
dotenv.config({path: './config/config.env'})

// Passport config
require('./config/passport')(passport)

connectDB();

const app = express();
// Logger
if(process.env.NODE_ENV === 'development'){
    app.use(logger('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// Sessions
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({mongoUrl: process.env.MONGO_URI,}),
    })
)

// Passport middleware
// app.use(passport.initialize())
app.use(passport.session())

// Set global var
app.use(function (req, res, next) {
    res.locals.user = req.user || null
    next()
})

// set static folder
app.use(express.static(path.join(__dirname, 'public')));


// routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));

module.exports = app;
