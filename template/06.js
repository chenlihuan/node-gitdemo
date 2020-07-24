//导入模板引擎
const template = require('art-template');
const path = require('path');
const dateFormat = require('dateformat')
//template方法是用来拼接字符串的
// 1，模板路径，绝对路径
// 2，要在模板中显示
const views = path.join(__dirname, 'views', '06.art');
// 导入模板变量
template.defaults.imports.dateFormat = dateFormat;

//设置模板根目录
template.defaults.root = path.join(__dirname, 'views')

// 配置模板的默认后缀
template.defaults.extname = '.art'

const html = template('06', {
    tiem: new Date()
})
console.log(html);