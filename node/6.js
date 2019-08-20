var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;//浏览器路由路径，规定在这个路由时显示什么
    
    switch (pathname) {
        case '/':
            // console.log(url.parse(req.url));
            goIndex(res);
            break;
        case '/parse':
            resAdd(req,res);
            break;

        default:
            res.writeHead(404, { 'Content-type': 'text/plain' });
            res.end('not found page');
    }
}).listen(3000);
console.log('Server start');
function goIndex(res) {
    var pathname = __dirname + '/module/' + url.parse('index.html').pathname;//要取到文件的真实路径，这样才可以取到这个文件
    var data = fs.readFileSync(pathname, 'utf-8');//读取文件要用文件所在的真实路径
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(data);
}
function resAdd(req, res) {
    var postData = "";
    req.setEncoding('utf8');
    req.addListener('data', function (postChunk) {
        //检测数据开始发送，执行操作为发送数据包
        postData += postChunk;

    });
    req.addListener('end', function () {
        // console.log(postData);
        var objdns=querystring.parse(postData);//将字符串转化为对象，然后取对象中某个属性
        // console.log(objdns);
        var strdns=objdns.search_dns;
        res.writeHead(200,{'content-type':'text/plain'});
        res.end(strdns);
    })

}