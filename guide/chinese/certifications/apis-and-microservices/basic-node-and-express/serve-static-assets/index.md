---
title: Serve Static Assets
localeTitle: 服务静态资产
---
## 服务静态资产

静态网页使用express非常简单。这对于构建自己的投资组合网站或博客等非常有用。

要从“views”文件夹提供静态网页，您可以使用以下代码：

```javascript
 const express = require("express"); 
 const app = express(); 
 app.use(express.static(__dirname + "/views")); 
```

[帮助我们的社区扩展这些提示和指南](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/meet-the-node-console/index.md) 。