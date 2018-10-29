---
title: Serve JSON on a Specific Route
localeTitle: 在特定路线上提供JSON
---
## 在特定路线上提供JSON

使用节点（在'/ json'路径）提供json对象相当简单，如果我们想要传递消息并给它值“Hello World”，我们可以这样做：

```javascript
  app.get("/json", function(req, res) { 
        res.json({"message": "Hello World"}); 
  }); 
```

[帮助我们的社区扩展这些提示和指南](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/serve-json-on-a-specific-route/index.md) 。