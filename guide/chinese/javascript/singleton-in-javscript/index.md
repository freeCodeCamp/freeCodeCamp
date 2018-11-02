---
title: Creating Singleton In JavaScript
localeTitle: 在JavaScript中创建Singleton
---
## 在Javascript指南中创建Singleton

这篇文章是关于在Native（纯）Javascript中创建单身人士。这个概念对于维护干净的代码很有用。

如果你想维护你的代码，或者某些数据在整个应用程序中应保持相同，这就是你完成它的方法。

**先验知识** 这只是为了帮助您更轻松地理解概念，否则您始终可以复制粘贴代码并相应地进行更改。

*   基本的Javascript语法
*   Javascript函数
*   Javascript中的IIFE

### 让我们开始吧

让我们创建具有IIFE功能的对象，该功能将立即执行以使我们能够使用Singleton。
```
var singletonFn = (function(){ //Created IIFE Function 
  var dataCounter = 0; 
  return { //Any code inside this return stuff will be accessible directly using objectname. 
 
    getDataCounter: function(){ 
      return dataCounter; 
    }, 
 
    setDataCounter: function(val){ 
      dataCounter = val; 
    }, 
 
    fishNames: ["SimpleFish"] //Can create variables, Arrays, etc. 
  } 
 })(); 
```

现在执行或使用你的单身人士。在将此文件保存到js文件并加载后，在浏览器中。
```
console.log(singletonFn.getDataCounter()); //0 as bydefault it will be 0. 
 
 singletonFn.setDataCounter(20); 
 
 console.log(singletonFn.getDataCounter()); //20 as we assigned. 
 
 console.log(fishNames); //will Print array with "SimpleFish". 
```

现在有了这些知识，您可以定义常量，枚举或需要在此处编写的项目中使用多个的任何内容。或类似配置的东西。

希望，这将帮助您编写更好的代码。快乐编码:)