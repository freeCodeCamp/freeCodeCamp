---
title: Onload Event
localeTitle: Onload事件
---
## Onload事件

`onload`事件用于在加载页面后立即执行JavaScript函数。

### 例：

```javascript
<body onload="myFunction()"> 
 
 <script> 
  function myFunction() { 
    alert('Page finished loading'); 
  } 
 </script> 
```

在上面的示例中，只要加载了网页，就会调用`myFunction`函数，向用户显示`Page finished loading`警报。

`onload`事件最常用于`<body>`元素中以执行脚本。如果它附加到`<body>` ，则一旦网页完全加载了所有内容（图像，脚本文件，CSS文件等），脚本就会运行。

#### 更多信息：

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload)

#### 其他资源

[jQuery .on（）事件处理程序附件](https://api.jquery.com/on/) [Stack Overflow：window.onload与document.onload](https://stackoverflow.com/questions/588040/window-onload-vs-document-onload)