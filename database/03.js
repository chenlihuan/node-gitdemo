const mongoose = require('mongoose');
// 连接数据库
mongoose
    .connect("mongodb://localhost/playground", {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => console.log("数据库连接成功"))
    .catch(() => console.log("数据库连接失败"));

//创建集合
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
})

const Course = new mongoose.model('Course', courseSchema)

// Course.create({
//     name: 'javascipt',
//     author: 'evif',
//     isPublished: true
// }, (err, doc) => {
//     console.log(err)
//     console.log(doc)
// });

// Course.create({
//         name: 'pho',
//         author: "chen",
//         isPublished: true
//     })
//     .then(doc => console.log(doc))
//     .catch(err => console.log(err))

Course.create({
        name: 'jchen',
        author: "hurry",
        isPublished: false
    })
    .then(result => {
        console.log(result)
    })