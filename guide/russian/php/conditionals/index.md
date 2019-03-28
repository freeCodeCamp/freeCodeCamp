---
title: Conditionals
localeTitle: Условные операторы
---
## Условные операторы

Условные операторы в PHP используют синтаксис `if` , `elseif` , `else`. Использование условных операторов позволяет выполнять различные действия в зависимости от разных входных значений, предоставляемых на странице во время выполнения. В PHP условные операторы часто называются управляющими конструкциями.

### If

```PHP
<?php 
 if ($_GET['name'] == "freecodecamp"){ 
  echo "You viewed the freeCodeCamp Page!"; 
 } 
```

### Elseif

```PHP
<?php 
 if ($_GET['name'] == "freecodecamp"){ 
  echo "You viewed the freeCodeCamp Page!"; 
 } elseif ($_GET['name'] == "freecodecampguide"){ 
  echo "You viewed the freeCodeCamp Guide Page!"; 
 } 
```

### Else

```PHP
<?php 
 if ($_GET['name'] == "freecodecamp"){ 
  echo "You viewed the freeCodeCamp Page!"; 
 } elseif ($_GET['name'] == "freecodecampguide"){ 
  echo "You viewed the freeCodeCamp Guide Page!"; 
 } else { 
  echo "You viewed a page that does not exist yet!"; 
 } 
```

### Заметка

В случаях, когда у вас есть много возможных условий, вы можете использовать [инструкцию Switch](/php/switch).

#### Дополнительная информация:


*   [Руководство по управлению структурой php.net](https://secure.php.net/manual/en/control-structures.elseif.php)

