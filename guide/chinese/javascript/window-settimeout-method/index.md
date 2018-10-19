---
title: Window setTimeout Method
localeTitle: 窗口setTimeout方法
---
## 窗口setTimeout方法

`setTimeout()`方法在指定的毫秒数后调用函数或计算表达式。

提示：

*   1000毫秒= 1秒。
*   该功能仅执行一次。如果需要重复执行，请使用`setInterval()`方法。
*   使用`clearTimeout()`方法来阻止函数运行。

`setTimout()`方法的语法如下：

```js
setTimeout(function, milliseconds, param1, param2, ...); 
```

例如：

```js
setTimeout(function(){ alert("Hello"); }, 3000); 
```

关于`setTimeout()`一个非常重要的事情是它将异步执行。我们来举个例子：

```js
console.log("A"); 
 setTimeout(function(){ console.log("B"); }, 0); 
 console.log("C"); 
 // The order in the console will be 
 // A 
 // C 
 // B 
```

**没有像预期的那样！但我们只指定0秒！** 要解决这个问题并确保我们的代码将同步执行，我们只需将最后一个控制台嵌套在函数中

```js
console.log("A"); 
 setTimeout(function() { 
    console.log("B"); 
    console.log("C"); 
 }, 0); 
 // The order in the console will be 
 // A 
 // B 
 // C 
```

#### 更多信息：

文档： [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)

更多setTimeout函数的例子： [w3schools](https://www.w3schools.com/jsref/met_win_settimeout.asp)

要了解幕后真正发生的事情，请观看这​​个精彩的视频 [菲利普罗伯茨：无论如何，事件循环到底是什么？ | JSConf EU 2014](https://www.youtube.com/watch?v=8aGhZQkoFbQ)