---
title: PHP functions
localeTitle: PHP函数
---
PHP函数与其他编程语言类似。函数是一段代码，它以参数的形式接受另一个输入，并进行一些处理并返回一个值。

您已经看过许多函数，如fopen（）和fread（）等。它们是内置函数，但PHP也为您提供了创建自己的函数的选项。

有两个部分应该清楚 -

### 创建PHP函数

调用PHP函数 实际上你几乎不需要创建自己的PHP函数，因为已经有超过1000个为不同区域创建的内置库函数，你只需要根据你的要求调用它们。

有关一组完整的有用功能，请参阅PHP函数参考。

创建PHP函数 它很容易创建自己的PHP函数。假设您要创建一个PHP函数，只需在您调用它时在浏览器上写一条简单的消息。下面的示例创建一个名为writeMessage（）的函数，然后在创建它之后立即调用它。

请注意，在创建函数时，其名称应以关键字函数开头，并且所有PHP代码都应放在{和}大括号内，如下面的示例所示 -
```
<html> 
 
   <head> 
      <title>Writing PHP Function</title> 
   </head> 
 
   <body> 
 
      <?php 
         /* Defining a PHP Function */ 
         function writeMessage() { 
            echo "You are really a nice person, Have a nice time!"; 
         } 
 
         /* Calling a PHP Function */ 
         writeMessage(); 
      ?> 
 
   </body> 
 </html> 
```

这将显示以下结果 -
```
You are really a nice person, Have a nice time! 
```

### 带参数的PHP函数

PHP为您提供了在函数内传递参数的选项。你可以传递尽可能多的参数。这些参数与函数内的变量类似。以下示例采用两个整数参数并将它们一起添加然后打印它们。
```
<html> 
 
   <head> 
      <title>Writing PHP Function with Parameters</title> 
   </head> 
 
   <body> 
 
      <?php 
         function addFunction($num1, $num2) { 
            $sum = $num1 + $num2; 
            echo "Sum of the two numbers is : $sum"; 
         } 
 
         addFunction(10, 20); 
      ?> 
 
   </body> 
 </html> 
```

这将显示以下结果 -
```
Sum of the two numbers is : 30 
```

### 通过引用传递参数

可以通过引用将参数传递给函数。这意味着函数操作对变量的引用而不是变量值的副本。

在这些情况下对参数所做的任何更改都将更改原始变量的值。您可以通过在函数调用或函数定义中向变量名称添加＆符来通过引用传递参数。

以下示例描述了两种情况。
```
<html> 
 
   <head> 
      <title>Passing Argument by Reference</title> 
   </head> 
 
   <body> 
 
      <?php 
         function addFive($num) { 
            $num += 5; 
         } 
 
         function addSix(&$num) { 
            $num += 6; 
         } 
 
         $orignum = 10; 
         addFive( $orignum ); 
 
         echo "Original Value is $orignum<br />"; 
 
         addSix( $orignum ); 
         echo "Original Value is $orignum<br />"; 
      ?> 
 
   </body> 
 </html> 
```

这将显示以下结果 -
```
Original Value is 10 
 Original Value is 16 
```

### PHP函数返回值

函数可以使用return语句结合值或对象返回值。 return停止执行函数并将值发送回调用代码。

您可以使用返回数组（1,2,3,4）从函数返回多个值。

下面的示例采用两个整数参数并将它们一起添加，然后将它们的总和返回给调用程序。请注意，return关键字用于从函数返回值。
```
<html> 
 
   <head> 
      <title>Writing PHP Function which returns value</title> 
   </head> 
 
   <body> 
 
      <?php 
         function addFunction($num1, $num2) { 
            $sum = $num1 + $num2; 
            return $sum; 
         } 
         $return_value = addFunction(10, 20); 
 
         echo "Returned value from the function : $return_value"; 
      ?> 
 
   </body> 
 </html> 
```

这将显示以下结果 -
```
Returned value from the function : 30 
```

### 设置功能参数的默认值

如果函数的调用者未传递参数，则可以将参数设置为具有默认值。

如果use没有将任何值传递给此函数，则以下函数将打印NULL。
```
<html> 
 
   <head> 
      <title>Writing PHP Function which returns value</title> 
   </head> 
 
   <body> 
 
      <?php 
         function printMe($param = NULL) { 
            print $param; 
         } 
 
         printMe("This is test"); 
         printMe(); 
      ?> 
 
   </body> 
 </html> 
```

这将产生以下结果 -
```
This is test 
```

### 动态函数调用

可以将函数名称作为字符串分配给变量，然后像处理函数名称一样处理这些变量。以下示例描述了此行为。
```
<html> 
 
   <head> 
      <title>Dynamic Function Calls</title> 
   </head> 
 
   <body> 
 
      <?php 
         function sayHello() { 
            echo "Hello<br />"; 
         } 
 
         $function_holder = "sayHello"; 
         $function_holder(); 
      ?> 
 
   </body> 
 </html> 
```

这将显示以下结果 -
```
Hello 

```