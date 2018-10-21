---
title: PHP Variable Basics
---
Variables allow programmers to use data throuhgout a PHP script.

In PHP, variables always start with a `$` symbol followed by the name of the variable. Only letters, numbers (may not be the first character), and underscores can make up the name of a variable.

For example, `$my_variable`, `$anotherVariable`, and `$the2ndVariable` are allow valid variable names.

Variable names are case-sensitive. `$my_variable` is different from `$My_Variable` which is different from `$mY_vARiAblE`.

Before a variable can be used, it must have a value assigned to it.

````PHP
    <?php
    $my_number = 1;
    echo($my_number);
    
    >>> 1
````

In the example above, the variable is `$my_number`. The value assigned to it was the number `1`. The variable was then passed as a parameter to the `echo` function, which output the value to the command line.
