---
title: jQuery Ajax Post Method
localeTitle: Метод jQuery Ajax Post
---
## Метод jQuery Ajax Post

Отправляет асинхронный запрос HTTP POST для загрузки данных с сервера. Его общая форма:

```javascript
jQuery.post( url [, data ] [, success ] [, dataType ] ) 
```

*   url: единственный обязательный параметр. Эта строка содержит адрес для отправки запроса. Возвращенные данные будут проигнорированы, если не указан другой параметр
*   data: простой объект или строка, которая отправляется на сервер с запросом.
*   success: функция обратного вызова, которая выполняется, если запрос successs.it принимает в качестве аргумента возвращаемые данные. Он также передает текстовый статус ответа.
*   dataType: тип данных, ожидаемых от сервера. По умолчанию используется Intelligent Guess (xml, json, script, text, html). если этот параметр предоставлен, то также должен быть предоставлен обратный вызов успеха.

#### Примеры

```javascript
$.post('http://example.com/form.php', {category:'client', type:'premium'}); 
```

запрашивает `form.php` с сервера, отправляет дополнительные данные и игнорирует возвращенный результат

```javascript
$.post('http://example.com/form.php', {category:'client', type:'premium'}, function(response){ 
      alert("success"); 
      $("#mypar").html(response.amount); 
 }); 
```

запрашивает `form.php` с сервера, отправляет дополнительные данные и обрабатывает возвращенный ответ (формат json). Этот пример можно записать в таком формате:

```javascript
$.post('http://example.com/form.php', {category:'client', type:'premium'}).done(function(response){ 
      alert("success"); 
      $("#mypar").html(response.amount); 
 }); 
```

Следующий пример отправляет форму с использованием Ajax и помещает результаты в div \`\` \`html  jQuery.post demo 

 

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

Javascript $ .ajax ({ тип: «POST», url: url, данные: данные, успех: успех, dataType: dataType }); \`\` \`

`$.ajax()` предоставляет дополнительные опции, которые можно найти [здесь.](http://api.jquery.com/jquery.ajax/)

#### Дополнительная информация:

Для получения дополнительной информации посетите [официальный сайт](https://api.jquery.com/jquery.post/)