const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.set('port', process.env.PORT || 5000)
const dbOptions = {
    host: 'localhost',
    user: 'root',
    password: 'tinieblas',
    port: 3306,
    database: 'dolcelivelli'
}

// middlewares esta funcion procesa el dato antes de que el servidor lo reciba-------------------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())
// routes -------------------------------------------
app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})
app.use('/blog', routes)

// server running -----------------------------------
app.listen(app.get('port'), () => {
    console.log('server running on port', app.get('port'))
})