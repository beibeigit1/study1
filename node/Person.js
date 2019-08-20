function Person(){
    this.sleep=function(){
        console.log('sleep in night')
    }
    this.eat=function(){
        console.log('eat everyday')
    }
}
module.exports=Person;