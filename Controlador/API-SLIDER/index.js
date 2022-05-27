const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const cors = require('cors');
const routes = require('./routes');

const app = express();

//settings
app.set('port', process.env.PORT || 3056)

const dbOptions = {
    host: 'localhost',
    user: 'root',
    password: 'tinieblas',
    port: 3306,
    database: 'dolcelivelli'
}


// middleware
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())
// routes
app.get('/', (req, res, next) => {
    res.send('Hello World');
});

app.use('/api', routes)


// server is listening
app.listen(app.get('port'), () => {
    console.log('Server is running on port ',app.get('port'))
});