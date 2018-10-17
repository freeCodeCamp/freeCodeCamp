---
title: Functions
localeTitle: 功能
---
## PHP函数简介

函数是可以在程序中重复使用的语句块。

### 简单的功能+通话

```php
function say_hello() { 
  return "Hello!"; 
 } 
 
 echo say_hello(); 
```

### 简单功能+参数+调用

```php
function say_hello($friend) { 
  return "Hello " . $friend . "!"; 
 } 
 
 echo say_hello('Tommy'); 
```

### strtoupper - 让所有的Chars变得更大和更大！

```php
function makeItBIG($a_lot_of_names) { 
  foreach($a_lot_of_names as $the_simpsons) { 
    $BIG[] = strtoupper($the_simpsons); 
  } 
  return $BIG; 
 } 
 
 $a_lot_of_names = ['Homer', 'Marge', 'Bart', 'Maggy', 'Lisa']; 
 var_dump(makeItBIG($a_lot_of_names)); 
```

#### 更多信息：

*   [php.net用户定义的函数手册](https://secure.php.net/manual/en/functions.user-defined.php)