---
title: Mousedown Method
localeTitle: Mousedown方法
---# Mousedown方法

按下鼠标左键时会发生mousedown事件。 要触发所选元素的mousedown事件，请使用以下语法： `$(selector).mousedown();`

但是，大多数情况下，mousedown方法与附加到mousedown事件的函数一起使用。 这是语法： `$(selector).mousedown(function);` 例如：
```
$(#example).mousedown(function(){ 
   alert("Example was clicked"); 
 }); 
```

当单击#example时，该代码将使页面警报“单击示例”。

### 更多信息

更多信息可以在[这里](https://www.w3schools.com/jquery/event_mousedown.asp)找到。