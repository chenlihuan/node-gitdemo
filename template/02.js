//导入模板引擎
const template = require('art-template');
const path = require('path');
//template方法是用来拼接字符串的
// 1，模板路径，绝对路径
// 2，要在模板中显示
const views = path.join(__dirname, 'views', '02.art')
const html = template(views, {
    name: '战三',
    age: 17,
    content: '<h1>我是标题</h1>'
})
console.log(html);