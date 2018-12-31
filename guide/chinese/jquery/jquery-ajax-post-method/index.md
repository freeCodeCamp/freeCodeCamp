---
title: jQuery Ajax Post Method
localeTitle: jQuery Ajax Post方法
---
## jQuery Ajax Post方法

发送异步http POST请求以从服务器加载数据。其一般形式是：

```javascript
jQuery.post( url [, data ] [, success ] [, dataType ] ) 
```

*   url：是唯一的必需参数。此字符串包含要将请求发送到的地址。如果未指定其他参数，则将忽略返回的数据
*   data：与请求一起发送到服务器的普通对象或字符串。
*   success：如果请求成功则执行的回调函数。它将返回的数据作为参数。它还传递了响应的文本状态。
*   dataType：服务器所需的数据类型。默认为Intelligent Guess（xml，json，script，text，html）。如果提供了此参数，则还必须提供成功回调。

#### 例子

```javascript
$.post('http://example.com/form.php', {category:'client', type:'premium'}); 
```

从服务器请求`form.php` ，发送附加数据并忽略返回的结果

```javascript
$.post('http://example.com/form.php', {category:'client', type:'premium'}, function(response){ 
      alert("success"); 
      $("#mypar").html(response.amount); 
 }); 
```

从服务器请求`form.php` ，发送附加数据并处理返回的响应（json格式）。此示例可以使用以下格式编写：

```javascript
$.post('http://example.com/form.php', {category:'client', type:'premium'}).done(function(response){ 
      alert("success"); 
      $("#mypar").html(response.amount); 
 }); 
```

以下示例使用Ajax发布表单并将结果放入div \`\`\`html   jQuery.post演示

 

// Attach a submit handler to the form $( "#searchForm" ).submit(function( event ) { // Stop form from submitting normally event.preventDefault(); // Get some values from elements on the page: var $form = $( this ), term = $form.find( "input\[name='s'\]" ).val(), url = $form.attr( "action" ); // Send the data using post var posting = $.post( url, { s: term } ); // Put the results in a div posting.done(function( data ) { var content = $( data ).find( "#content" ); $( "#result" ).empty().append( content ); }); });
```
The following example use the github api to fetch the list of repositories  of a user  using jQuery.ajax() and put results in a div 
```

HTML 

 

// Attach a submit handler to the form $( "#userForm" ).submit(function( event ) { // Stop form from submitting normally event.preventDefault(); // Get some values from elements on the page: var $form = $( this ), username = $form.find( "input\[name='username'\]" ).val(), url = "https://api.github.com/users/"+username+"/repos"; // Send the data using post var posting = $.post( url, { s: term } ); //Ajax Function to send a get request $.ajax({ type: "GET", url: url, dataType:"jsonp" success: function(response){ //if request if made successfully then the response represent the data $( "#result" ).empty().append( response ); } }); });
```
### jQuery.ajax() 
 `$.post( url [, data ] [, success ] [, dataType ] )` is a shorthand Ajax function, equivalent to: 
```

JavaScript的 $就（{ 类型：“POST”， 网址：网址 数据：数据， 成功：成功， dataType：dataType }）; \`\`\`

`$.ajax()`提供了更多可在[此处](http://api.jquery.com/jquery.ajax/)找到的选项

#### 更多信息：

有关更多信息，请访问[官方网站](https://api.jquery.com/jquery.post/)