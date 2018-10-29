---
title: Location Object
localeTitle: 位置对象
---
## 位置对象

“位置”对象提供API（应用程序编程接口），其允许检索URL，设置URL或访问URL的部分。默认情况下，它已在Window和Document对象上实现。 注意：没有适用于location对象的公共标准，但所有主流浏览器都支持它。

### 位置对象属性

|财产|说明| | ---------- | -------------------------------------- ------------------- | |哈希|设置或返回URL |的锚点部分（＃） |主持人|设置或返回URL的主机名和端口号 |主机名|设置或返回URL的主机名 | href |设置或返回整个URL | |来源|返回URL的协议，主机名和端口号 |路径名|设置或返回URL的路径名 |港口|设置或返回URL的端口号 |协议|设置或返回URL的协议 |搜索|设置或返回URL |的查询字符串部分

### 位置对象方法

|方法|说明| | ----------- | ------------------------------------- --------- | | assign（）|加载新文档| | reload（）|重新加载当前文档| | replace（）|用新的文档替换当前文档

### 例子

可通过以下方式访问位置对象：

```javascript
    console.log(window.location); 
    // > https://guide.freecodecamp.org/javascript/location-object 
    console.log(document.location); 
    // > https://guide.freecodecamp.org/javascript/location-object 
```

您还可以使用JavaScript以编程方式设置HTML `<a>`元素的Location对象或HTML `<area>`元素。

```javascript
    var anchor = document.createElement('a'); 
    anchor.url = "https://guide.freecodecamp.org/javascript/location-object"; 
```

一旦你有一个带有URL集的对象（包括窗口），Location API允许你访问URL的部分内容。

```javascript
    console.log(anchor.protocol); 
    // > https: 
    console.log(anchor.host); 
    // > guide.freecodecamp.org (includes port number if applicable. Example: guide.freecodecamp.org:8080) 
```

您可以访问的“位置”的其他属性包括：

*   `anchor.hostname` - _guide.freecodecamp.org_
*   `anchor.port` - _8080_
*   `anchor.pathname` - _/ javascript / location-object_
*   `anchor.origin` - _https://developer.mozilla.org_

如果您的URL包含参数或哈希值，您可以像这样访问它们：

```javascript
    // If your URL is https://guide.freecodecamp.org/javascript?param=location#other-properties 
    console.log(window.location.search); 
    // > "?param=location" 
    console.log(document.location.hash); 
    // > "#other-properties" 
```

#### 更多信息：

[W3C - 位置对象](https://www.w3schools.com/jsref/obj_location.asp) [地点](https://developer.mozilla.org/en-US/docs/Web/API/Location)