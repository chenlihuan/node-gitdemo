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
const UserSchema = new mongoose.Schema({
    name: String,
    author: String,
    email: String,
    password: String,
    hobbies: [String]
});

const User = new mongoose.model('User', UserSchema);

//查询用户集合中的所有文档
//User.find().then(result => console.log(result));

// 通过下划线id查找文档
// User.find({
//     _id: '5c09f2d9aeb04b22f846096b'
// }).then(result => console.log(result));

//findOne方法返回一条文档，默认返回当前集合的第一条文档
// User.findOne({
//     name: '李四'
// }).then(result => console.log(result))

// User.find({
//     age: {
//         $gt: 20,
//         $lt: 50
//     }
// }).then(result => console.log(result));
User.findOneAndDelete({
    _id: '5c09f267aeb04b22f8460968'
}).then(result => console.log(result));