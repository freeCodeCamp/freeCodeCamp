---
title: HTTP
localeTitle: HTTP
---
## HTTP

Node.js有一组内置模块，无需进一步安装即可使用。类似地， **HTTP模块**包含通过超文本传输​​协议（HTTP）传输数据所需的一组功能。

HTTP模块可以创建一个HTTP服务器，该服务器侦听服务器端口并将响应返回给客户端。

要包含模块，请使用`require()`函数和模块名称。

```javascript
const http = require('http');
```

## Node.js作为Web服务器

`createServer()`方法用于创建HTTP服务器。 `res.writeHead()`方法的第一个参数是状态代码， `200`表示一切正常，第二个参数是包含响应头的对象。

```javascript
const http = require('http');

 //create a server object:
 http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
 }).listen(8000); //the server object listens on port 8000

 console.log("Server is listening on port no : 8000");
```

### 执行步骤：

*   您应该在计算机中安装Node.js.
*   创建一个_app.js_文件并粘贴上面的代码。
*   现在打开工作目录中的控制台并执行命令`node app.js`
*   打开浏览器并输入`http://localhost:8000`

_注意：_要关闭服务器，请在控制台中为Windows用户按`ctrl + C`

## 资源

*   [Node.js API](https://nodejs.org/api/http.html#http_http)
*   [W3学校](https://www.w3schools.com/nodejs/nodejs_http.asp)