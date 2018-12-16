---
title: Conditionals
localeTitle: Conditionals
---
## Conditionals

Условные в PHP написаны с использованием синтаксиса `if` , `elseif` , `else` . Использование условных выражений позволяет выполнять различные действия в зависимости от разных входов и значений, предоставляемых на странице во время выполнения. В PHP условные обозначения часто называются структурами управления.

### Если

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

### еще

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

В случаях, когда у вас есть много возможных условий, вы можете использовать [инструкцию Switch](/php/switch) .

#### Дополнительная информация:

*   [Руководство по управлению структурой php.net](https://secure.php.net/manual/en/control-structures.elseif.php)
