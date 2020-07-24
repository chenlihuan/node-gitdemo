//引入mongoose第三方模块 用来操作数据库
const mongoose = require("mongoose");
// 连接数据库
mongoose
  .connect("mongodb://localhost/playground", {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log("数据库连接成功"))
  .catch(() => console.log("数据库连接失败"));

//创建集合规则
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  isPublished: Boolean
});

//使用规则创建集合
// 1， 集合名称
// 2,  集合规则
const Course = mongoose.model("Course", courseSchema);

//创建文档
const course = new Course({
  name: "node.js基础",
  author: "ada讲师",
  isPublished: true
});
course.save(); // 把数据插入数据库中
