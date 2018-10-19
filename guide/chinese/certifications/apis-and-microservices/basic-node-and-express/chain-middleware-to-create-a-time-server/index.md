---
title: Chain Middleware to Create a Time Server
localeTitle: 用于创建时间服务器的链中间件
---
## 用于创建时间服务器的链中间件

与上一次挑战类似，但现在我们将两个功能链接在一起。这似乎很复杂，但它只是javascript。

我们还可以在请求中添加字符串并将其传递给下一个函数，而不是响应时间。这是微不足道的，但它是一个很好的例子。代码如下：

```javascript
app.get("/now", middleware(req, res, next) { 
  req.string = "example"; 
  next(); 
 }, 
  function (req, res) { 
      res.send(req.string); // This will display "example" to the user 
  }); 
```

[帮助我们的社区扩展这些提示和指南](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/chain-middleware-to-create-a-time-server/index.md) 。