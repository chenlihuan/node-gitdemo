const fs = require('fs');

const content = '<h3>正在使用fs.writeFile写入文件内容</h3>';
fs.writeFile('./demo.txt',content, err => {
    if(err !=  null){
        console.log(err)
    }
    console.log('文件写入成功')
})