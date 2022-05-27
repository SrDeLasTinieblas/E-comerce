const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require('cors')
const routes = require('./routes')

const app = express()
app.set('port', process.env.PORT || 9000)
const dbOptions = {
    host: 'localhost',
    port: '',
    user: 'root',
    password: 'tinieblas',
    database: 'dolcelivelli'
}
app.use(express.urlencoded({extended:true}))
// middlewares -------------------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(cors())
// routes -------------------------------------------
/*app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})*/
app.use('/', routes)

// server running -----------------------------------
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
    console.log('http://localhost:' + app.get('port'))
})