//1，通过模块的名字fs对模块进行引用
const fs  = require('fs');
//2,通过模块内部的readFile读取文件内容
fs.readFile('./b.js','utf8',(err,doc) =>{
    console.log(err)
    console.log(doc)
})