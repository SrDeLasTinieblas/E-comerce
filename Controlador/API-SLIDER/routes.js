const express = require('express');
const routes = express.Router();

// GET /
routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return console.log(err);

        conn.query('SELECT * FROM todo', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })

    })
})

routes.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
            //console.log(req.body);
        conn.query('INSERT INTO todo set ?',[req.body] ,(err, rows) => {
            if (err) return console.log(err);

            res.send('Todo added successfully');
        });

    })
})

routes.delete('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
            //console.log(req.body);
        conn.query('DELETE FROM todo WHERE id = ?',[req.params.id] ,(err, rows) => {
            if (err) return console.log(err);
            
            res.send('deleted');
        });

    })
})

routes.put('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
            //console.log(req.body);
        conn.query('UPDATE todo set ? WHERE id = 3',[req.body] ,(err, rows) => {
            if (err) return console.log(err);
            
            res.send('updated');
        });

    })
})


module.exports = routes