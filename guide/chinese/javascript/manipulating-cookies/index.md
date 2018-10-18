---
title: Manipulating Cookies
localeTitle: 操纵Cookies
---
## 操纵Cookies

获取或设置cookie是一项简单的操作，可以通过访问浏览器文档对象上的cookie属性来实现。

您可以找到一个令人惊叹且信息丰富的食谱网站，为您的客人烹制外国餐，但它是外语，幸运的是，您可以使用选择下拉列表更改网站上的语言。几天后，您再次访问同一站点为您的母亲制作菜肴，但现在您默认使用您的母语查看该网站。

_该网站会记住您上次访问时选择的语言，并以**cookie的**形式存储。现在，它通过读取该cookie自动选择您的首选语言。_

`userLanguage:french`

Cookie用于在客户端部分以`name:value`对的形式存储数据。它允许网站在浏览器上存储用户特定信息以供以后使用。存储的信息可以是`sessionID` ， `userCountry` ， `visitorLanguage`等。

另一种在客户端存储数据的方法是`localstorage` 。

### 设置Cookie

可以使用下面的语法设置cookie，但强烈建议使用类似于最后提到的库，以便让每个人都能更轻松地进行开发。在设置cookie时，您也可以设置它的到期时间。如果跳过，则在浏览器关闭时会删除cookie。

**请记住，特定域设置的cookie只能由该域及其子域读取。**

```javascript
// Using vanilla javascript 
 document.cookie = 'userLanguage=french; expires=Sun, 2 Dec 2017 23:56:11 UTC; path=/'; 
 
 //Using JS cookie library 
 Cookies.set('userLanguage', 'french', { expires: 7, path: '/' }); 
```

_Cookie将在7天后到期_

### 获取Cookie

```javascript
// Using vanilla javascript 
 console.log(document.cookie) 
 
 // => "_ga=GA1.2.1266762736.1473341790; userLanguage=french" 
 
 // Using JS cookie library 
 Cookies.get('userLanguage'); 
 
 // => "french" 
```

### 删除Cookie

为了删除cookie，将过期日期设置为过去的某些内容。

```javascript
// Using vanilla javascript 
 document.cookie = 'userLanguage; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/'; 
 
 //Using JS cookie library 
 Cookies.remove('userLanguage'); 
```

_如果您发现自己在项目中玩了很多cookie，请使用像这样的[JS Cookie](https://github.com/js-cookie/js-cookie)这样的库，节省大量时间。_

#### 更多信息：

*   [Cookie解释道](https://www.quirksmode.org/js/cookies.html)
*   [MDN Cookie指南](https://developer.mozilla.org/en-US/docs/Web/API/document/cookie)
*   [Udacity Cookie视频](https://www.youtube.com/watch?v=xdH9zsW1CK0)
*   [HTTP cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)