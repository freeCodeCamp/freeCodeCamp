---
title: Window setInterval Method
localeTitle: Window setInterval方法
---
## Window setInterval方法

`setInterval()`方法以指定的时间间隔（以毫秒为单位）调用函数或计算表达式。

```js
    setInterval(function(){ alert("Hello"); }, 3000); 
```

`setInterval()`方法将继续调用该函数，直到调用`clearInterval()`或关闭窗口。

`setInterval()`方法可以将其他参数传递给函数，如下例所示。

```js
    setInterval(function, milliseconds, parameter1, parameter2, parameter3); 
```

`setInterval()`返回的ID值用作`clearInterval()`方法的参数。

提示：

*   1000毫秒= 1秒。
*   要在指定的毫秒数后执行一次函数，请使用`setTimeout()`方法。

#### 更多信息：

文档： [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)

JavaScript setInterval（）函数示例： [Sitepoint](https://www.sitepoint.com/setinterval-example/)

还有一些例子： [w3schools](https://www.w3schools.com/jsref/met_win_setinterval.asp)