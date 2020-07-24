//搭建网站服务器，实现客户端与服务器的通信
const http = require("http");
// 导入数据库
require('./model/index')
// 导入数据集合规则与创建集合，返回集合构造函数
const User = require('./model/user');

const url = require('url')

const queryString = require("querystring")

// 创建服务器
const app = http.createServer();
// 为服务器添加对象请求事件
app.on('request', async (req, res) => {
    const method = req.method;
    const {
        pathname,
        query
    } = url.parse(req.url, true);
    if (method == 'GET') {
        if (pathname == '/list') {
            let users = await User.find()
        }
    }
})

//监听端口
app.listen(3000)