---
title: PHP Switch
localeTitle: Переключатель PHP
---
## Переключатель PHP

Оператор `switch` в PHP похож на ряд операторов `if` на одном выражении. Оператор `switch` используется для выполнения различных действий в разных условиях. Синтаксис оператора `switch` следует
```
switch (expression) { 
 
    case label1: 
        // code block to be executed if there is a match with result of expression 
        break; 
    case label2: 
        // code block to be executed if there is a match with result of expression 
        break; 
    case label3: 
        // code block to be executed if there is a match with result of expression 
        break; 
    default: 
        // code block to be executed if there is no match with result of expression 
 
 } 
```

Когда мы запускаем программу, вычисляется выражение внутри оператора `switch` . Результат этого выражения проверяется соответствующими метками, если есть совпадение, тогда выполняется соответствующий блок `case` . Если совпадение не найдено ни с одним из операторов case, выполняется только блок кода, следующий за `default` по `default` .

Иллюстрация оператора `switch` с примером
```
<?php 
 
 $i = 1 
 switch ($i) { 
    case 0: 
        echo "i equals 0"; 
        break; 
    case 1: 
        echo "i equals 1"; 
        break; 
    case 2: 
        echo "i equals 2"; 
        break; 
 } 
 
 ?> 
```

Оператор `switch` также может использоваться без инструкции `break` . В этом случае будут выполняться операторы после согласованных случаев. Ниже приведена инструкция оператора `switch` без инструкции `break` .
```
<?php 
 switch ($i) { 
    case 0: 
        echo "i equals 0"; 
    case 1: 
        echo "i equals 1"; 
    case 2: 
        echo "i equals 2"; 
 } 
 ?> 
 
 /*output --> i equals 0i equals 1i equals 2 */ 
```

#### Дополнительная информация:

[Заявление о переключении - PHP-документация](http://php.net/manual/en/control-structures.switch.php)

[PHP5 Switch - W3Schools](https://www.w3schools.com/php/php_switch.asp)