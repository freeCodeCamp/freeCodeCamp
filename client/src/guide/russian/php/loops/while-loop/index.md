---
title: While Loop
localeTitle: Пока цикл
---
## Пока цикл

Цикл `while loop` является одним из самых простых типов циклов в PHP. Он выполняет блок операторов до тех пор, пока выражение не примет значение **TRUE** . Если значение выражения изменяется во время выполнения, то цикл выполняется до тех пор, пока выражение не примет значение **FALSE** . Ниже приведена базовая форма while Loop:

```shell
while (expr) 
    statement 
```

Заявления внутри цикла while могут быть заключены в фигурные скобки или могут использоваться на основе следующего синтаксиса:

```shell
while (expr): 
    statement 
    ... 
 endwhile; 
```

Иллюстрируя простой и альтернативный синтаксис цикла while, используя пример:

```php
<?php 
 
 /* using the simple form of while loop */ 
 
 $i = 1;  /* initialisation part */ 
 
 while ($i <= 100 && $i!=5 ) 
 { 
    echo $i++; 
 } 
 
 /*using the alternate synatx of while loop*/ 
 
 $i = 0; 
 
 while ($i <= 10): 
    echo $i++; 
 endwhile; 
 
 ?> 
```

#### Больше информации

[Пока цикл - PHP-документация](http://php.net/manual/en/control-structures.while.php)