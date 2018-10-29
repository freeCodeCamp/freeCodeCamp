---
title: Echo and Print
localeTitle: 回声和打印
---
## 回声和打印

echo和print函数提供了一种将变量或参数的值写出到屏幕的方法。

### 回声

`echo()`函数将变量或参数的值写出到屏幕。

```PHP
<?php 
 echo "freeCodeCamp"; 
```

注意：打开PHP标记和回显的简便方法是<？=
```
<?= "freeCodeCamp"; ?> 
```

### 打印

`print()`函数输出屏幕变量或参数的值。

```PHP
<?php 
 print "freeCodeCamp"; 
```

### 的print\_r

`print_r()`函数将任何变量（例如数组）或参数的值写出到屏幕上，这与回声或打印功能相比更为有限。

```PHP
<?php 
 $freecodecamp = "freeCodeCamp"; 
 print_r($freecodecamp); 
```

#### 更多信息：

*   [php.net echo（）手册](https://secure.php.net/manual/en/function.echo.php)
*   [php.net print（）手册](https://secure.php.net/manual/en/function.print.php)
*   [php.net print\_r（）手册](https://secure.php.net/manual/en/function.print-r.php)