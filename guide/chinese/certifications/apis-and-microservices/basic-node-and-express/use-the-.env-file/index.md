---
title: Use the .env File
localeTitle: 使用.env文件
---
## 使用.env文件

我们可以使用.toUpperCase（）方法使字符串全部大写，例如：

```javascript
  var response = "Hello World".toUpperCase(); // now becomes "HELLO WORLD" 
```

我们现在需要做的就是检查环境变量的值是什么，你可以这样做：

```javascript
   if (process.env.VAR_NAME === "allCaps") { 
    response = "Hello World".toUpperCase(); 
   } else { 
    response = "Hello World"; 
   } 
  }); 
```

[帮助我们的社区扩展这些提示和指南](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/use-the-.env-file/index.md) 。
