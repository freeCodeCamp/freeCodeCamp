---
title: PHP Variable Basics
localeTitle: PHP变量基础知识
---
变量允许程序员通过PHP脚本使用数据。

在PHP中，变量始终以`$`符号开头，后跟变量名称。只有字母，数字（可能不是第一个字符）和下划线才能构成变量的名称。

例如， `$my_variable` ， `$anotherVariable`和`$the2ndVariable`都允许有效的变量名。

变量名称区分大小写。 `$my_variable`与`$My_Variable`不同，后者与`$mY_vARiAblE`不同。

在可以使用变量之前，必须为其分配值。

```PHP
    <?php 
    $my_number = 1; 
    echo($my_number); 
 
    >>> 1 
```

在上面的示例中，变量是`$my_number` 。分配给它的值是数字`1` 。然后将变量作为参数传递给`echo`函数，该函数将值输出到命令行。