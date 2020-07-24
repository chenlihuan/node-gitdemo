// 引入router模块
const getRouter = require("router");

const router = getRouter();
//学生信息集合
const Student = require("../model/user");
//引入模板引擎
const template = require("art-template");
// 引入queryString模块
const queryString = require("querystring");

// 传递学生信息界面
router.get("/add", (req, res) => {
    let html = template("index.art", {});
    res.end(html);
});

//传递学生信息列表界面
router.get("/list", async (req, res) => {
    // 查询学生信息
    let students = await Student.find();
    console.log(students);
    let html = template("list.art", {
        students: students
    });
    res.end(html);
});
// 实现学生信息添加功能路由
router.post("/add", (req, res) => {
    //接受post请求参数
    let formData = "";
    req.on("data", param => {
        formData += param;
    });
    req.on("end", async () => {
        // console.log(queryString.parse(formData))
        await Student.create(queryString.parse(formData));
        // res.end("abv");
        res.writeHead(301, {
            Location: "/list"
        });
        res.end();
    });
});

module.exports = router;