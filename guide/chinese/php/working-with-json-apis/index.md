---
title: Working With JSON APIs
localeTitle: 使用JSON API
---
## 使用JSON API

JSON的一个常见用途是从Web服务器读取数据，并在网页中显示数据。

本章将教您如何在客户端和PHP服务器之间交换JSON数据。

### PHP文件

PHP有一些内置函数来处理JSON。

可以使用PHP函数`json_encode()`将PHP中的对象转换为JSON：

```php
<?php 
 $myObj->name = "John"; 
 $myObj->age = 30; 
 $myObj->city = "New York"; 
 
 $myJSON = json_encode($myObj); 
 
 echo $myJSON; 
 ?> 
```

[试试吧](https://www.w3schools.com/js/showphp.asp?filename=demo_file)

### 客户端JavaScript

这是客户端上的JavaScript，使用AJAX调用从上面的示例请求PHP文件：

#### 例

使用JSON.parse（）将结果转换为JavaScript对象：

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

[试试吧](https://www.w3schools.com/js/tryit.asp?filename=tryjson_php_simple)

### 更多信息：

*   有关更多信息， [请查看此链](https://www.w3schools.com/js/js_json_php.asp)