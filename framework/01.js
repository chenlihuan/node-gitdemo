// 引入express框架
const express = require('express');
// 创建服务器
const app = express();

app.get('/', (req, res) => {
    //send();
    // 1，send方法内部会检测响应内容的类型
    // 2, send方法会自动设置http状态码
    // 3, send方法会帮我们自动设置响应的内容类型级编码
    res.send('hello, Express');
})

app.get('/list', (req, res) => {
    res.send({
        name: '张三',
        age: 20
    })
})

app.listen(3000);
console.log('网站服务启动成功');