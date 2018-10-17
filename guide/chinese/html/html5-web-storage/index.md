---
title: HTML5 Web Storage
localeTitle: HTML5网络存储
---
## HTML5网络存储

Web存储允许Web应用程序在每个源（每个域和协议）的浏览器存储中存储多达5MB的信息。

### Web存储的类型

有两个对象用于在客户端上存储数据：

`window.localStorage` ：存储没有过期日期的数据，直到删除为止。

```javascript
// Store Item 
 localStorage.setItem("foo", "bar"); 
 
 // Get Item 
 localStorage.getItem("foo"); //returns "bar" 
```

`window.sessionStorage` ：存储一个会话的数据，当浏览器/浏览器选项卡关闭时，数据会丢失。

```javascript
// Store Item 
 sessionStorage.setItem("foo", "bar"); 
 
 // Get Item 
 sessionStorage.getItem("foo"); //returns "bar" 
```

由于当前实现仅支持字符串到字符串映射，因此需要序列化和反序列化其他数据结构。

您可以使用JSON.stringify（）和JSON.parse（）来完成此操作。

例如，对于给定的JSON
```
var jsonObject = { 'one': 1, 'two': 2, 'three': 3 }; 
```

我们首先将JSON对象转换为字符串并保存在本地存储中：
```
localStorage.setItem('jsonObjectString', JSON.stringify(jsonObject)); 
```

要从存储在本地存储中的字符串中获取JSON对象：
```
var jsonObject = JSON.parse(localStorage.getItem('jsonObjectString')); 
```

#### 更多信息：

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) [HTML5 Rocks](https://www.html5rocks.com/en/features/storage) [W3学校](https://www.w3schools.com/html/html5_webstorage.asp)