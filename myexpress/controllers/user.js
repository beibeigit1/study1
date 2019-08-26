//注册
var User_model=require('../models/user_model.js');



//存放业务逻辑
exports.reg = function (req, res, next) {
    res.render("reg.ejs");
}
exports.do_reg = function (req, res, next) {
    var name = req.body.uname;
    var pass = req.body.pass;
    // console.log(name);
    User_model.insert_data(function(err,data){
        console.log(data);
    })

    
}