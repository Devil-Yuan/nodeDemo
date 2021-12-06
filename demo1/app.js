/*
 * @@功能描述: node 学习1 创建服务器
 * @@工单地址: 
 * @@版本: 
 * @@作者: Devilyuan
 * @Date: 2021-12-06 20:24:08
 * @@最新修改内容: 
 * @LastEditTime: 2021-12-06 20:59:10
 */
const http = require('http');
http.createServer((req, res)=> {
  res.writeHead(200, {"Content-Type": ";chartset='utf-8'"});
  if(req.url != '/favicon.ico'){
    console.log(req.url)
    res.write(req.url);
  }
  res.end();
}).listen(3000);
