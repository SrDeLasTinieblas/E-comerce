const express = require('express')
const md5 = require('md5')
const routes = express.Router()


routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM usuarios', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
// un enrutado  

routes.post('/', async(req, res)=>{
    //const pass = md5(req.body.pass);
    
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO usuarios set ?', [req.body], (err, rows)=>{
            if(err)return res.send(err)
            //res.status(200).json()
            //res.send(pass)
        })
   })

})
routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM usuarios WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('User excluded!')
        })
    })
})

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE productos set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('User updated!')
        })
    })
})

module.exports = routes