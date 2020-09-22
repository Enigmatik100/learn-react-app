const express = require('express');


const produitRouter = (con) => {
    const router = express.Router();
    router.get('/', (req, res) => {
        console.log("this router is working")
        con.query('SELECT * FROM produits', (err, data) => {
            if (err) throw err;
            res.status(200).json(data)
        });
    });

    router.get('/:id', (req, res) => {
        const id = req.params.id;
        con.query('SELECT * FROM produits WHER id=' + id, (err, data) => {
            if (err) throw err;
            res.status(200).json(data)
        });
    });
    return router;
};

module.exports = produitRouter;