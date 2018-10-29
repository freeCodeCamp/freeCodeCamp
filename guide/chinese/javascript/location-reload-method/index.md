---
title: Location Reload Method
localeTitle: 位置重新加载方法
---
## 位置重新加载方法

JavaScript `Location.reload()`方法提供了在当前URL重新加载页面的方法。

语法如下：

`object.reload(forcedReload);` ，其中`forceReload`是可选参数。

要简单地重新加载页面，您可以输入`window.location`作为对象。

可选参数`force reload`是一个布尔值，如果设置为：

*   `True`从服务器重新加载页面（例如，不存储浏览器缓存的数据）：
```
window.location.reload(true); 
```

*   `False`使用浏览器缓存的页面版本重新加载页面。
```
window.location.reload(false); 
```

`False`是默认参数，因此如果留空，则`object.reload()`使用`object.reload()`的缓存数据重新加载页面，即与使用`object.reload(false)`方法相同。

要创建浏览器提供的“刷新”选项的效果，您可能需要创建HTML按钮并执行以下任一操作：

*   将`Location.reload()`附加到HTML按钮标记，如下所示：
```
<input type="button" value="Refresh Button" onClick="window.location.reload()"> 
```

*   使用使用该方法的函数将按钮上的事件分配给按钮，其中按钮看起来类似于
```
<button type="button" onClick="reloadThePage()">Refresh!</button> 
```

```
<script> 
 function reloadThePage(){ 
    window.location.reload(); 
 } 
 </script> 
```

### 例：

```javascript
// Reload the current resources from the server 
 window.location.reload(true); 
 
 // Reload the current resources from the browser's cache 
 window.location.reload(); 
```

这将从服务器重新加载当前URL的页面。

#### 更多信息：

*   [MDN](https://developer.mozilla.org/docs/Web/API/Location/reload)
*   [W3学校](https://www.w3schools.com/jsref/met_loc_reload.asp)