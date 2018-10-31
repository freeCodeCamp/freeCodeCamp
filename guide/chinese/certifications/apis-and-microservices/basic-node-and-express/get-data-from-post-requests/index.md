---
title: Get Data from POST Requests
localeTitle: 从POST请求中获取数据
---
## 从POST请求中获取数据

就像使用req.query一样，我们可以使用req.body来获取我们的数据。此挑战与“从客户端获取查询参数输入”非常相似。

为了从post请求中获取数据，通用格式为：

```javascript
app.post(PATH, function(req, res) { 
  // Handle the data in the request 
 }); 
```

[帮助我们的社区扩展这些提示和指南](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/use-body-parser-to-parse-post-requests/index.md) 。