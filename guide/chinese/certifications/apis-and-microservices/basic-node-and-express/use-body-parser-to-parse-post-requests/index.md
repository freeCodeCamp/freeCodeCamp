---
title: Use body-parser to Parse POST Requests
localeTitle: 使用body-parser来解析POST请求
---
## 使用body-parser来解析POST请求

如果您使用提供的样板，则应该已经将身体解析器添加到您的项目中，但如果不是，它应该在那里：

```json
"dependencies": { 
    "body-parser": "^1.4.3", 
    ... 
```

你需要做的就是将中间件传递给app.use（）。确保它在需要使用的路径之前。

[帮助我们的社区扩展这些提示和指南](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/use-body-parser-to-parse-post-requests/index.md) 。