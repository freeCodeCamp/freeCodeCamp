---
title: Start a Working Express Server
localeTitle: 启动Working Express服务器
---
## 启动Working Express服务器

如果您在“example.com/”上有一个网站，并希望向访问根域的任何人提供诸如“Hello World”之类的字符串，您可以使用node和/或express轻松地执行此操作：

```javascript
app.get("/", function(req, res) { 
  res.send("Hello World"); 
 }); 
```

此外，使用ES6 +，您可以使用“=>”而不是“function”来保存一些输入，如下所示：

```javascript
app.get("/", (req, res) => { 
  res.send("Hello World"); 
 }); 
```

[帮助我们的社区扩展这些提示和指南](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/start-a-working-express-server/index.md) 。