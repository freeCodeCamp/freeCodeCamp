---
title: Learn About Php Variables
localeTitle: 了解Php变量
---
变量是用于存储数据的容器，例如`strings` ， `integers` ， `boolean`值， `array`和对象。

PHP遵循某些变量声明规则，例如：

*   变量必须以美元符号（$）开头

例：

`php <?php $var = 5; ?>`

*   变量名称可以包含字符，如AZ，az，0-9，\_和[ASCII](http://www.asciitable.com/ "ASCII Table")字符127-255。

例：

`php <?php $var = 5; //Valid $var_1 = "Foo"; //Valid $_var2 = 'Bar'; //Valid $var.3 = 'Baz'; //Invalid ?>`

*   变量名称可以以下划线（\_）开头。

例：

`php <?php $_var2 = 'Bar'; //Valid ?>`

*   变量名称不能以数字0-9开头。

例：

`php <?php $9var3 = 'Baz'; //Invalid ?>`

*   变量名称区分大小写。

例：
```
<?php 
    $var = 5; //Valid 
    $VAR = "Foo"; //Valid 
    echo $var; //Output 5 
    echo "<br>"; 
    echo $VAR; //Output Foo 
 ?> 
```

PHP是一种松散类型的语言，因此在声明变量时我们不需要声明变量的数据类型。与Java或C.不同
```
<?php 
    $var = 5; 
    $var2 = 4; 
    $sum = $var+$var2; 
    echo $sum; //Output 9 
    echo "<br>"; 
    echo $var+$var2; //Output 9 
 ?> 
```

也可以通过引用来分配变量。这允许两个变量引用相同的内容。 `&`运算符放在要引用的变量之前。

示例：
```
<?php 
    $var1 = "foo"; 
    $var2 = "bar"; 
 
 myTest($var1, $var2); 
 
 echo $var1; //Output foo 
 echo $var2; //Output BAR 
 
 function myTest($var1, &$var2){ 
    $var1 = "FOO"; 
    $var2 = "BAR"; 
 } 
 ?> 
```

要动态设置变量名，我们使用变量变量。当需要创建多个变量时，这可能特别有用。

示例：
```
<?php 
 
    $var = 'Tom'; 
    echo $var;      //Output Tom 
    $$var = 'Cat'; //The value of $$var is the value of $var. So $$var and $Tom give the same output. 
    echo $$var;   //Output Cat 
    echo $Tom;   //Output Cat 
 ?> 
```

# 可变范围

变量的范围是指变量可访问的位置。

*   全局范围用于在函数外声明的变量。这些变量可以从任何地方访问，但不能在函数内访问。
*   本地范围是在函数内声明的变量，无法从函数外部的任何位置访问。

例：
```
<?php 
   $global = "Hello"; 
 
  function Test(){ 
   $local = "World"; 
   echo $global; //Error 
   echo $local; //Output World 
  } 
 
   Test(); 
   echo $global; //Output Hello 
   echo $local; //Error 
 ?> 
```

要访问函数内的全局变量：
```
<?php 
   $global = "Hello"; 
 
 function Test(){ 
   global $global; 
   $local = "World"; 
   echo $global; //Output Hello 
   echo $local; //Output World 
  } 
 
   Test(); 
   echo $global; //Output Hello 
   echo $local; //Error 
 ?> 
```

# 静态变量

每次创建函数时，都会删除其所有局部变量。为了保留变量的最后一个值，我们将其声明为`static` 。

示例：
```
<?php 
 
 function WithStatic(){ 
   static $var = 0; 
   echo $var; 
   $var++; 
  } 
 
   WithStatic(); //Output 0 
   WithStatic(); //Output 1 
   WithStatic(); //Output 2 
 
 function WithoutStatic(){ 
   $var = 0; 
   echo $var; 
   $var++; 
  } 
 
   WithoutStatic(); //Output 0 
   WithoutStatic(); //Output 0 
   WithoutStatic(); //Output 0 
 ?> 

```