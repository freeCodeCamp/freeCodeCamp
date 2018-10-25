---
title: jQuery Ajax Get Method
localeTitle: Метод jQuery Ajax Get
---
## Метод jQuery Ajax Get

Отправляет асинхронный запрос HTTP GET для загрузки данных с сервера. Его общая форма:

```javascript
jQuery.get( url [, data ] [, success ] [, dataType ] ) 
```

*   `url` : единственный обязательный параметр. Эта строка содержит адрес для отправки запроса. Возвращенные данные будут игнорироваться, если не указан другой параметр.
*   `data` : простой объект или строка, отправленная на сервер с запросом.
*   `success` : функция обратного вызова выполняется, если запрос завершается успешно. В качестве аргумента требуется вернуть возвращаемые данные. Он также передает текстовый статус ответа.
*   `dataType` : тип данных, ожидаемых от сервера. По умолчанию используется Intelligent Guess (xml, json, script, text, html). Если этот параметр предоставлен, также необходимо предоставить обратный вызов успеха.

#### Примеры

Запросите `resource.json` с сервера, отправьте дополнительные данные и проигнорируйте возвращаемый результат: \`\` \`Javascript $ .get ('http://example.com/resource.json', {category: 'client', type: 'premium'});
```
Request `resource.json` from the server, send additional data, and handle the returned response (json format): 
 ```javascript 
 $.get('http://example.com/resource.json', {category:'client', type:'premium'}, function(response) { 
      alert("success"); 
      $("#mypar").html(response.amount); 
 }); 
```

Вышеприведенный пример также может быть записан как: \`\` \`Javascript $ .get ('http://example.com/resource.json', {category: 'client', type: 'premium'}) .done (function (response) { предупреждение ( "успех"); . $ ( "# Mypar") HTML (response.amount); });
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

`$.ajax()` предоставляет множество дополнительных опций, все из которых находятся [здесь](http://api.jquery.com/jquery.ajax/) .

#### Дополнительная информация:

Для получения дополнительной информации посетите [официальный сайт jQuery.get](https://api.jquery.com/jquery.get/) .