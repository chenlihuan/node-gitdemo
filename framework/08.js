const express = require("express");
const app = express();

const home = require("./router/home");
const admin = require("./router/admin");
//为路由对象匹配请求路径
app.use('/home', home);
app.use('/admin', admin);


app.listen(3000)