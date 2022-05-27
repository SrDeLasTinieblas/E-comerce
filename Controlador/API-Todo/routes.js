const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM todo', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
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
/*routes.put('/:update', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE `todo` SET `slider`= WHERE 1', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('banner añadido')
        })
    })
})*/
/*UPDATE `todo` SET WHERE id = 1 
routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM productos WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Producto excluded!')
        })
    })
})

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE productos set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Producto updated!')
        })
    })
})*/

module.exports = routes