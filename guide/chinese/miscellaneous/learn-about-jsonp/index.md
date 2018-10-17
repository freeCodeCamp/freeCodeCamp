---
title: Learn About Jsonp
localeTitle: 了解Jsonp
---
## JSONP

JSONP代表“带填充的JSON”。假设您想要将AJAX请求发送到其他域。好吧，你不能像往常那样使用XMLHttpRequest做到这一点，但你可以用脚本标签来做到这一点，如[StackOverflow所示](https://stackoverflow.com/questions/2067472/what-is-jsonp-all-about) ：

```javascript
script = document.createElement('script'); 
 script.type = 'text/javascript'; 
 script.src = 'http://www.someWebApiServer.com/some-data'; 
```

但这很难看，现在我们必须从脚本标签中获取JSON的元素，粗略。幸运的是，JSONP的创建者正在考虑未来，所以我们不是像上面那样设置脚本，而是这样做：

```javascript
script.src = 'http://www.someWebApiServer.com/some-data?callback=my_callback'; 
```

这会在数据加载后触发自动回调，从而创建一个包含所需数据的函数。

### 更多信息：

*   [Wikipidea / JSONP](https://en.wikipedia.org/wiki/JSONP)
*   [JSONP和JQuery](https://learn.jquery.com/ajax/working-with-jsonp)
*   [更多JSONP与JQuery](http://api.jquery.com/jquery.getjson/#jsonp)
*   [Ajax和JSONP](http://stackoverflow.com/questions/5943630/basic-example-of-using-ajax-with-jsonp)