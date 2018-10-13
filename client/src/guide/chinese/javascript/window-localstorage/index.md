---
title: Window.localStorage
localeTitle: Window.localStorage
---
## window.localStorage

`localStorage`为您的Web应用程序提供了一种在用户浏览器中本地存储数据的方法。

在HTML5之前，应用程序数据必须存储在cookie中。每个HTTP请求都包含Cookie，从而通过传输相同的数据来减慢Web应用程序的速度。 Cookie也限制在大约4 KB的数据中，这些数据可能不足以存储所需的数据。

`localStorage`限制大于cookie，每个域最多10MB数据，并且信息永远不会传输到服务器。

### localStorage的类型

有两种主要的Web存储类型：

*   本地存储：存储没有过期日期的数据。即使用户的浏览器已关闭并重新打开， `localStorage`的数据也会保留。
*   会话存储：这与`localStorage`类似，不同之处在于它仅存储一个会话的数据。一旦用户的浏览器关闭，该会话将丢失，并且将从浏览器中删除持久数据。

### HTML5 localStorage方法

`localStorage`附带了一些不同的JavaScript方法，可以很容易地使用它们，让我们来看看：

_注意：这些方法适用于两种Web存储类型（本地存储和会话存储）_

要设置数据，我们需要执行以下操作：

```javascript
localStorage.setItem('Name', 'somevalue'); 
```

要从存储中检索一些数据：

```javascript
localStorage.getItem('Name'); 
```

要删除或删除某些数据，我们可以这样做：

```javascript
localStorage.removeItem('Name'); 
```

要清除整个存储（不仅仅是单个项目），我们可以使用：

```javascript
localStorage.clear(); 
```

要获取存储中的属性数：

```javascript
localStorage.length; 
```

#### 更多信息：

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)