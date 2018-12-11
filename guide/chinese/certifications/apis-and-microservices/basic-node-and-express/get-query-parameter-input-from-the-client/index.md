---
title: Get Query Parameter Input from the Client
localeTitle: 从客户端获取查询参数输入
---
## 从客户端获取查询参数输入

鉴于存根之后的提示，“/ name？first = ＆最后= ，“我们可以像这样构建响应：

```javascript
 app.get("/name", function(req, res) { 
   var firstName = req.query.first; 
   var lastName = req.query.last; 
   // Send the json object 
 }); 
```

[帮助我们的社区扩展这些提示和指南](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/get-query-parameter-input-from-the-client/index.md) 。