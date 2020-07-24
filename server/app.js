//用于创建网站服务器的模块
const http = require('http');
//用于处理url地址
const url = require('url');
//app对象就是网站服务器对象
const app = http.createServer();
//当客户端有请求来的时候
app.on('request', (req, res) => {
    res.writeHead(200,{
        'content-type':"text/html; charset=utf8"
    })
    console.log(req.url);
    let { query , pathname } = url.parse(req.url,true);
    console.log(query.name);
    console.log(query.age);
    
    if(pathname == '/index' || pathname == "/"){
        res.end('<h2>hello,weclome to homepage</h2>')
    }else if(pathname == '/list'){
        res.end('<h2>hello,weclome to listhome</h2>')
    }else{
        res.end('not found')
    }

    if(req.method == 'POST'){
        res.end('post')
    }else if(req.method == 'GET'){
        res.end('get')
    }

    // res.end('<h2>hello,weclome to my home</h2>')
});

app.listen(3000)
console.log('网站服务器启动成功')