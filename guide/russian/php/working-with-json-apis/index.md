---
title: Working With JSON APIs
localeTitle: Работа с API-интерфейсами JSON
---
## Работа с API-интерфейсами JSON

Общее использование JSON - это чтение данных с веб-сервера и отображение данных на веб-странице.

В этой главе рассказывается, как обмениваться данными JSON между клиентом и сервером PHP.

### Файл PHP

PHP имеет некоторые встроенные функции для обработки JSON.

Объекты в PHP могут быть преобразованы в JSON с помощью функции PHP `json_encode()` :

```php
<?php 
 $myObj->name = "John"; 
 $myObj->age = 30; 
 $myObj->city = "New York"; 
 
 $myJSON = json_encode($myObj); 
 
 echo $myJSON; 
 ?> 
```

[Попытайся](https://www.w3schools.com/js/showphp.asp?filename=demo_file)

### Клиентский JavaScript

Вот JavaScript на клиенте, используя вызов AJAX для запроса файла PHP из приведенного выше примера:

#### пример

Используйте JSON.parse () для преобразования результата в объект JavaScript:

```js
var xmlhttp = new XMLHttpRequest(); 
 xmlhttp.onreadystatechange = function() { 
    if (this.readyState == 4 && this.status == 200) { 
        var myObj = JSON.parse(this.responseText); 
        document.getElementById("demo").innerHTML = myObj.name; 
    } 
 }; 
 xmlhttp.open("GET", "demo_file.php", true); 
 xmlhttp.send(); 
```

[Попытайся](https://www.w3schools.com/js/tryit.asp?filename=tryjson_php_simple)

### Дополнительная информация:

*   Для дополнительной [проверки этой ссылки](https://www.w3schools.com/js/js_json_php.asp)