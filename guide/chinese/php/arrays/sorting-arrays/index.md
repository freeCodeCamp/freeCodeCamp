---
title: Sorting Arrays
localeTitle: 排序数组
---
## 排序数组

PHP提供了几种排序数组的函数。本页介绍了不同的功能并包含了示例。

### sort（）

`sort()`函数按升序字母/数字顺序对数组的值进行排序（例如A，B，C，D，E ... 5,4,3,2,1 ......）

```PHP
<?php 
 $freecodecamp = array("free", "code", "camp"); 
 sort($freecodecamp); 
 print_r($freecodecamp); 
```

**输出：**

```text
Array 
 ( 
    [0] => camp 
    [1] => code 
    [2] => free 
 ) 
```

### rsort（）

`rsort()`函数按降序字母/数字顺序对数组的值进行排序（例如Z，Y，X，W，V ... `rsort()` ......）

```PHP
<?php 
 $freecodecamp = array("free", "code", "camp"); 
 rsort($freecodecamp); 
 print_r($freecodecamp); 
```

**输出：**

```text
Array 
 ( 
    [0] => free 
    [1] => code 
    [2] => camp 
 ) 
```

### asort（）

`asort()`函数按字母顺序/数字顺序（例如A，B，C，D，E ... 5,4,3,2,1 ......）对其关联数组进行排序。

```PHP
<?php 
 $freecodecamp = array("zero"=>"free", "one"=>"code", "two"=>"camp"); 
 asort($freecodecamp); 
 print_r($freecodecamp); 
```

**输出：**

```text
Array 
 ( 
    [two] => camp 
    [one] => code 
    [zero] => free 
 ) 
```

### ksort（）

`ksort()`函数按字母/数字顺序按字母顺序排列关联数组（例如A，B，C，D，E ... 5,4,3,2,1 ......）

```PHP
<?php 
 $freecodecamp = array("zero"=>"free", "one"=>"code", "two"=>"camp"); 
 ksort($freecodecamp); 
 print_r($freecodecamp); 
```

**输出：**

```text
Array 
 ( 
    [one] => code 
    [two] => camp 
    [zero] => free 
 ) 
```

### arsort（）

`arsort()`函数按字母/数字顺序按字母顺序排列一个关联数组（例如Z，Y，X，W，V ... 5,4,3,2,1 ......）

```PHP
<?php 
 $freecodecamp = array("zero"=>"free", "one"=>"code", "two"=>"camp"); 
 arsort($freecodecamp); 
 print_r($freecodecamp); 
```

**输出：**

```text
Array 
 ( 
    [zero] => free 
    [one] => code 
    [two] => camp 
 ) 
```

### krsort（）

`krsort()`函数按字母/数字顺序降序排序关联数组（例如Z，Y，X，W，V ... `krsort()` ......）

```PHP
<?php 
 $freecodecamp = array("zero"=>"free", "one"=>"code", "two"=>"camp"); 
 krsort($freecodecamp); 
 print_r($freecodecamp); 
```

**输出：**

```text
Array 
 ( 
    [zero] => free 
    [two] => camp 
    [one] => code 
 ) 
```

#### 更多信息：

*   [php.net sort（）手册](https://secure.php.net/manual/en/function.sort.php)
*   [php.net rsort（）手册](https://secure.php.net/manual/en/function.rsort.php)
*   [php.net asort（）手册](https://secure.php.net/manual/en/function.asort.php)
*   [php.net ksort（）手册](https://secure.php.net/manual/en/function.ksort.php)
*   [php.net arsort（）手册](https://secure.php.net/manual/en/function.arsort.php)
*   [php.net krsort（）手册](https://secure.php.net/manual/en/function.krsort.php)
*   [php.net print\_r（）手册](https://secure.php.net/manual/en/function.print-r.php)
