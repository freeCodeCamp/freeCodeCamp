---
title: Working With JSON APIs
---
## Working With JSON APIs

A common use of JSON is to read data from a web server, and display the data in a web page.

This chapter will teach you how to exchange JSON data between the client and a PHP server.

### The PHP File

PHP has some built-in functions to handle JSON.

Objects in PHP can be converted into JSON by using the PHP function `json_encode()`:
```php
<?php
$myObj->name = "John";
$myObj->age = 30;
$myObj->city = "New York";

$myJSON = json_encode($myObj);

echo $myJSON;
?>
```
[Try it](https://www.w3schools.com/js/showphp.asp?filename=demo_file)

### The Client JavaScript

Here is a JavaScript on the client, using an AJAX call to request the PHP file from the example above:

#### Example

Use JSON.parse() to convert the result into a JavaScript object:

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

[Try it](https://www.w3schools.com/js/tryit.asp?filename=tryjson_php_simple)

### More Information:

- For more [check this link](https://www.w3schools.com/js/js_json_php.asp)
