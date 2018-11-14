---
title: Echo and Print
localeTitle: Эхо и печать
---
## Эхо и печать

Функции эха и печати обеспечивают способ записи значения переменной или аргумента на экран.

### эхо

Функция `echo()` выписывает значение переменной или аргумента на экран.

```PHP
<?php 
 echo "freeCodeCamp"; 
```

ПРИМЕЧАНИЕ. Короткий способ открыть тег PHP и echo: <? =
```
<?= "freeCodeCamp"; ?> 
```

### Распечатать

Функция `print()` выводит значение переменной или аргумента на экран.

```PHP
<?php 
 print "freeCodeCamp"; 
```

### print\_r

Функция `print_r()` записывает значение любой переменной (например, массива) или аргумента на экран, в отличие от функций эха или печати, которые являются более ограниченными.

```PHP
<?php 
 $freecodecamp = "freeCodeCamp"; 
 print_r($freecodecamp); 
```

#### Дополнительная информация:

*   [Руководство пользователя php.net echo ()](https://secure.php.net/manual/en/function.echo.php)
*   [Руководство пользователя php.net print ()](https://secure.php.net/manual/en/function.print.php)
*   [Руководство пользователя php.net print\_r ()](https://secure.php.net/manual/en/function.print-r.php)