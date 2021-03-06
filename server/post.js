const http = require('http');
const app = http.createServer();
const querystring = require('querystring');
app.on('request',(req,res) => {
    // post参数是通过事件的方式接受的
	// data 当请求参数传递的时候出发data事件
	// end 当参数传递完成的时候出发end事件
    let postParams = '';
    req.on('data',params => {
        postParams += params;
    });

    req.on('end',() =>{
        console.log(querystring.parse(postParams));
    });
    res.end('ok');
})

app.listen(3000);
console.log('suceessful')