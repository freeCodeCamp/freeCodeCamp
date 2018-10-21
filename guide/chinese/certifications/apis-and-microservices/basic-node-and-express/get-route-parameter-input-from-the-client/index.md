---
title: Get Route Parameter Input from the Client
localeTitle: 从客户端获取路由参数输入
---
## 从客户端获取路由参数输入

如果有人告诉你构建GET或POST，你会相应地做app.get（...）或app.post（...）。挑战的基本结构是：

```javascript
app.get("/:word/echo", function(req, res) { 
  // word = req.params.word; 
  // respond with the json object 
 }); 
```

[帮助我们的社区扩展这些提示和指南](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/get-route-parameter-input-from-the-client/index.md) 。