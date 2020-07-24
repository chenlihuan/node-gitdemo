const express = require('express');
const app = express();
//网站公告
// app.use((req, res) => {
//     res.send("当前网站正在维护中.......")
// })

app.use("/admin", (req, res, next) => {
    //用户没有登录
    let isLogin = false;
    if (isLogin) {
        //让请求继续向下执行
        next()
    } else {
        //如果用户没有登录，直接对客户端做出响应
        res.send("您还没有登录，不能访问/admin这个页面")
    }
})

app.get('/admin', (req, res) => {
    res.send("您已经登录，可以访问当前页面")
})

app.use((req, res, next) => {
    // 为客户端响应404状态码以及提示信息
    res.status(404).send('当前访问的页面不存在')
})




app.listen(3000);
console.log("successful")