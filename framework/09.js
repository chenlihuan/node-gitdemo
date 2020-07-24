const express = require("express");
const bodyParser = require('body-parser');
const app = express();
// app.get("/index", (req, res) => {
//     //获取get请求参数
//     res.send(req.query)
// })


//post
app.use(bodyParser.urlencoded({
    extended: false
}))

app.post("/add", (req, res) => {
    res.send(req.body)
})

app.listen(3000)