---
title: Implement a Root-Level Request Logger Middleware
localeTitle: 实现根级请求记录器中间件
---
## 实现根级请求记录器中间件

在顶部编写这个挑战更容易（已经存在一个存根）。这是因为中间件必须放置您希望它用于的函数调用。

要设置自己的中间件，您可以这样做：

```javascript
app.use(function middleware(req, res, next) { 
  // Do something 
  // Call the next function in line: 
  next(); 
 }); 
```

如果您无法正确格式化字符串，一种方法是：

```javascript
  var string = req.method + ' ' + req.path + ' - ' + req.ip; 
```

[帮助我们的社区扩展这些提示和指南](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/implement-a-root-level-request-logger-middleware/index.md) 。