---
title: Window Open Method
localeTitle: 窗口打开方法
---
## 窗口打开方法

Window `open()`方法可用于将指定的资源加载到具有指定名称的浏览上下文（窗口或选项卡）中。如果此名称不存在，则会创建一个新窗口，并将资源加载到其上下文中。

## Prameters

`url` 一个DOMString，指示要加载的资源。这可以是浏览器支持的任何资源的路径或URL。

`windowName` DOMString，指定将加载内容的浏览上下文（窗口或选项卡）的名称;如果名称未指示现有上下文，则会创建一个新窗口，并为其指定windowName指定的名称。然后，通过将其指定为目标属性，可以将此名称用作链接和表单的目标。

`windowFeatures` `optional` 一个DOMString，包含以逗号分隔的窗口特征列表，以及“name = value”形式的相应值给出。这些功能包括窗口的默认大小和位置等选项。

## 句法

```javascript
  var window =  window.open(url, windowName, [windowFeatures]); 
```

## 例

```javascript
var windowObjectReference; 
 var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes"; 
 
 function openRequestedPopup() { 
  windowObjectReference = window.open("http://www.cnn.com/", "CNN_WindowName", strWindowFeatures); 
 } 
```

如果已存在名称的窗口，则将strURL加载到现有窗口中。在这种情况下，方法的返回值是现有窗口，并忽略strWindowFeatures。

#### 更多信息：

[MDN文档](https://developer.mozilla.org/en-US/docs/Web/API/Window/open)