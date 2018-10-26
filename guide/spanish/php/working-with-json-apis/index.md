---
title: Working With JSON APIs
localeTitle: Trabajar con API de JSON
---
## Trabajar con API de JSON

Un uso común de JSON es leer datos de un servidor web y mostrar los datos en una página web.

Este capítulo le enseñará cómo intercambiar datos JSON entre el cliente y un servidor PHP.

### El archivo PHP

PHP tiene algunas funciones integradas para manejar JSON.

Los objetos en PHP se pueden convertir en JSON usando la función `json_encode()` PHP:

```php
<?php 
 $myObj->name = "John"; 
 $myObj->age = 30; 
 $myObj->city = "New York"; 
 
 $myJSON = json_encode($myObj); 
 
 echo $myJSON; 
 ?> 
```

[Intentalo](https://www.w3schools.com/js/showphp.asp?filename=demo_file)

### El Cliente JavaScript

Aquí hay un JavaScript en el cliente, utilizando una llamada AJAX para solicitar el archivo PHP del ejemplo anterior:

#### Ejemplo

Use JSON.parse () para convertir el resultado en un objeto JavaScript:

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

[Intentalo](https://www.w3schools.com/js/tryit.asp?filename=tryjson_php_simple)

### Más información:

*   Para más información [consulte este enlace.](https://www.w3schools.com/js/js_json_php.asp)