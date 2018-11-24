---
title: Serve an HTML File
localeTitle: 提供HTML文件
---
## 提供HTML文件

你可能需要评论最后的挑战。如果您有一个网站并想要提供index.html文件，您可能希望将其放在公共文件夹中。这是为了确保公众看不到你不想要的东西，它有时被称为“公共”或“观点”，但你可以从技术上称之为你想要的任何东西。

要在根域中名为“public”的文件夹中提供index.html，您可以这样做：

```javascript
  app.get("/", function(req, res) { 
        res.sendFile( __dirname + "/public/index.html"); 
  }); 
```

注意：\_\_dirname返回根目录是节点开发人员的最佳实践。

[帮助我们的社区扩展这些提示和指南](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/serve-an-html-file/index.md) 。