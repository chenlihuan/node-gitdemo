const express = require('express');
const fs = require('fs')
const prmoisify = require('util').promisify;
const readFile = prmoisify(fs.readFile);

const app = express();

app.get("/index", async (req, res, next) => {
    try {
        await readFile('./aaa.js')
    } catch (ex) {
        next(ex);
    }
})

app.use((err, rqe, res, next) => {
    res.status(500).send(err.message);
})

app.listen(3000);
console.log("successful")