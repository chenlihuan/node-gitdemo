//引入http模块
const http = require("http");
//引入path路径
const path = require("path");
//引入模板引擎
const template = require("art-template");
// 引入处理日期的第三方模块
const dateformat = require("dateformat");

const router = require('./router/router');

// 引入静态资源访问模块
const serveStatic = require("serve-static");
//配置模板跟目录
template.defaults.root = path.join(__dirname, "views");
// 实现静态资源访问服务
const serve = serveStatic(path.join(__dirname, "public"));

// 导入模板变量的方式处理日期格式的方法
template.defaults.imports.dateformat = dateformat;

//导入数据库
require("./model/connect");
const Student = require("./model/user");

// 创建网站服务器
const app = http.createServer();
// 当客户端访问模块
app.on("request", (req, res) => {
    // 启用路由访问功能
    router(req, res, () => {
        // 启用静态资源服务访问功能
        serve(req, res, () => {});
    });
});
app.listen(80);
console.log("服务器启动成功");