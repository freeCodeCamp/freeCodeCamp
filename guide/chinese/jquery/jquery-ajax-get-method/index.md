---
title: jQuery Ajax Get Method
localeTitle: jQuery Ajax获取方法
---
## jQuery Ajax获取方法

发送异步http GET请求以从服务器加载数据。其一般形式是：

```javascript
jQuery.get( url [, data ] [, success ] [, dataType ] ) 
```

*   `url` ：唯一的必需参数。该字符串包含发送请求的地址。如果未指定其他参数，则将忽略返回的数据。
*   `data` ：带有请求发送到服务器的普通对象或字符串。
*   `success` ：如果请求成功，则执行回调函数。它将返回的数据作为参数。它还传递了响应的文本状态。
*   `dataType` ：服务器所需的数据类型。默认为Intelligent Guess（xml，json，script，text，html）。如果提供此参数，则还必须提供成功回调。

#### 例子

从服务器请求`resource.json` ，发送其他数据，并忽略返回的结果： \`\`\`的JavaScript $ .get（'http://example.com/resource.json'，{category：'client'，type：'premium'}）;
```
Request `resource.json` from the server, send additional data, and handle the returned response (json format): 
 ```javascript 
 $.get('http://example.com/resource.json', {category:'client', type:'premium'}, function(response) { 
      alert("success"); 
      $("#mypar").html(response.amount); 
 }); 
```

上面的例子也可以写成： \`\`\`的JavaScript $ .get（'http://example.com/resource.json'，{category：'client'，type：'premium'}） .done（function（response）{ 警报（ “成功”）; $（ “＃mypar”）HTML（response.amount）; }）;
```
### jQuery.ajax() 
 `$.get( url [, data ] [, success ] [, dataType ] )` is a shorthand Ajax function, equivalent to: 
 ```javascript 
 $.ajax({ 
      url: url, 
      data: data, 
      success: success, 
      dataType: dataType 
 }); 
```

`$.ajax()`提供了许多其他选项，所有这些选项都位于[此处](http://api.jquery.com/jquery.ajax/) 。

#### 更多信息：

有关更多信息，请访问[官方jQuery.get网站](https://api.jquery.com/jquery.get/) 。