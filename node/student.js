var util=require('util');
var Person=require('./Person.js');
function Student(){
    Person.call(this);
    util.inherits(Student,Person);
    
}
Student.prototype.study=function(){
    //防止被继承
    console.log('I am learning');
}
