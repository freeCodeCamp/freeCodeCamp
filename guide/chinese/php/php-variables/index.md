---
title: PHP Variables
localeTitle: PHP变量
---
## 变量

变量是用于存储信息的“容器”。使用美元（$）符号声明变量，紧接着是变量名称。例如，下面的代码块将创建一个名为`myVariable`的变量，并为其分配字符串`Hello World` 。

```php
<?php 
 $myVariable = "Hello World"; 
 $x = 5; 
 $y = 10.5; 
 $z = '42'; 
 ?> 
```

执行上面的语句后，变量`$myVariable`将保存一个值为Hello world！的字符串，变量`$x`将保存一个值为5的整数，变量`$y`将保存一个带有值的float为10.5，变量`$z`将保存一个值为42的字符串。

# 命名变量

与任何编程语言一样，PHP具有适用于命名变量的某些规则。有效变量名称将遵循以下规则

*   变量必须以$符号开头，后跟变量名称
*   变量名必须以字母或下划线字符开头
*   变量名称不能以数字开头
*   变量名只能包含字母数字字符和下划线（Az，0-9和\_）
*   变量名称区分大小写（$ age和$ AGE是两个不同的变量）

# 预定义变量

PHP有几个特殊的关键字，虽然是“有效”的变量名，但不能用于你的变量。这样做的原因是语言本身已经定义了这些变量，它们用于特殊目的。下面列出了几个示例，有关完整列表，请参阅[PHP文档站点](https://secure.php.net/manual/en/language.variables.predefined.php) 。

*   `$this`
*   `$_GET`
*   `$_POST`
*   `$_SERVER`
*   `$_FILES`

# 将值分配给变量

要为变量赋值，只需键入变量，然后键入等于运算符（=），后跟值。例如

`PHP $myVariable = "Hello World"; $number1 = 5; $number2 = 10; $total = $number1 + $number2;`

您可能已经注意到上述示例的几个重要事项。我声明它的第一个变量等于**Hello World** ，用引号括起来。这是因为**Hello World**是一串文本，字符串必须用引号括起来。 我声明`$number1`的第二行等于5的值。我可以声明`$number1`等于`"5"` ，这会告诉PHP我希望将5存储为字符串，而不是实际值。不同之处在于您无法对字符串执行计算（就像我在第4行中所做的那样）。 第四行我声明`$total`等于`$number1`加上`$number2`的值。这称为通过引用声明值。

# PHP是一种松散类型的语言

在上面的例子中，请注意我们不必告诉PHP该变量是哪种数据类型。 PHP会自动将变量转换为正确的数据类型，具体取决于其值。 在其他语言（如C，C ++和Java）中，程序员必须在使用之前声明变量的名称和类型。

# 结论

PHP可以很容易地处理变量，您应该将变量视为存储信息的容器。有关更多信息，请查看以下资源：

*   [PHP变量文档](http://php.net/manual/en/language.variables.php)
*   [W3Schools PHP变量](https://www.w3schools.com/php/php_variables.asp)
*   [PHP数据类型](https://guide.freecodecamp.org/php/data-types)