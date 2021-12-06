/*
 * @@功能描述: url 模块
 * @@工单地址: 
 * @@版本: 
 * @@作者: Devilyuan
 * @Date: 2021-12-06 20:57:07
 * @@最新修改内容: 
 * @LastEditTime: 2021-12-06 21:18:59
 */
const http = require('http');
const url = require('url');



http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset:'utf-8'"});
    res.write("<head><meta charset='UTF-8'></head>")
    if(req.url == '/favicon.ico')return
    let qurl = "https://www.baidu.com?name=zhangsan&age=18"
    let wurl = url.parse(qurl);
    let wurl2 = url.parse(qurl,true)
    console.log(wurl)
    console.log(wurl2)
    res.end('服务创建成功！！')
}).listen(8081)
