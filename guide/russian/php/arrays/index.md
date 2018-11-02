---
title: Arrays
localeTitle: Массивы
---
## Массивы

### Типы массивов

В PHP существует три типа массивов: индексированные массивы, ассоциативные массивы и многомерные массивы.

### Пример с индексированным массивом

Индексированный массив обращается к объектам по номеру индекса.

```PHP
<?php 
 $freecodecamp = array("free", "code", "camp"); 
```

`$freecodecamp[0]` вернет `"free"` , `$freecodecamp[1]` вернет `"code"` , а `$freecodecamp[2]` вернет `"camp"` .

### Пример ассоциативной матрицы

Ассоциативный массив обращается к объектам по имени ключа.

```PHP
<?php 
 $freecodecamp = array("free"=>"0","code"=>"1","camp"=>"2"); 
```

`$freecodecamp['free']` вернет «0», `$freecodecamp['code']` вернет «1», `$freecodecamp['camp']` вернет «2»,

### Пример многомерной матрицы

Многомерный массив - это массив, содержащий другие массивы.

```PHP
<?php 
 $freecodecamp = array(array("free"=>"0","code"=>"1","camp"=>"2"),array("free"=>"0","code"=>"1","camp"=>"2"),array("free"=>"0","code"=>"1","camp"=>"2")); 
```

#### Дополнительная информация:

*   [Руководство по массивам php.net](https://secure.php.net/manual/en/language.types.array.php)