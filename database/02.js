const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(() => console.log("数据库连接成功"))
    .catch(err => console.log(err, "数据库连接失败"));

const courseScheam = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseScheam);

const course = new Course({
    name: 'ada',
    author: 'teacher',
    isPublished: true
});

course.save();