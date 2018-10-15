---
title: Window clearTimeout Method
localeTitle: 窗口clearTimeout方法
---
## 窗口clearTimeout方法

'clearTimeout（）'方法用于停止使用'setTimeout（）'方法设置的计时器。

```js
    clearTimeout(setTimeout_ID); 
```

如果在计时器完成计数之前调用'clearTimeout（）'方法，'clearTimeout（）'方法将停止执行'setTimeout（）'方法。

为了能够使用'clearTimeout（）'方法，您必须使用全局变量。请参阅下面的示例

```js
    myID = setTimeout(function, milliseconds); 
```

#### 更多信息：

文档： [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout)