---
title: Working With JSON APIs
localeTitle: Trabalhando com APIs JSON
---
## Trabalhando com APIs JSON

Um uso comum do JSON é ler dados de um servidor da web e exibir os dados em uma página da web.

Este capítulo ensinará como trocar dados JSON entre o cliente e um servidor PHP.

### O arquivo PHP

O PHP tem algumas funções internas para lidar com JSON.

Objetos em PHP podem ser convertidos em JSON usando a função PHP `json_encode()` :

```php
<?php 
 $myObj->name = "John"; 
 $myObj->age = 30; 
 $myObj->city = "New York"; 
 
 $myJSON = json_encode($myObj); 
 
 echo $myJSON; 
 ?> 
```

[Tente](https://www.w3schools.com/js/showphp.asp?filename=demo_file)

### O JavaScript do cliente

Aqui está um JavaScript no cliente, usando uma chamada AJAX para solicitar o arquivo PHP do exemplo acima:

#### Exemplo

Use JSON.parse () para converter o resultado em um objeto JavaScript:

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

[Tente](https://www.w3schools.com/js/tryit.asp?filename=tryjson_php_simple)

### Mais Informações:

*   Para mais, [confira este link](https://www.w3schools.com/js/js_json_php.asp)