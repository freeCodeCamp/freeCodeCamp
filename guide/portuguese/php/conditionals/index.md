---
title: Conditionals
localeTitle: Condicionais
---
## Condicionais

Condicionais em PHP são escritos usando o `if` , `elseif` , `else` sintaxe. O uso de condicionais permite que você execute ações diferentes dependendo das diferentes entradas e valores fornecidos a uma página em tempo de execução. Em PHP, os condicionais são geralmente chamados de estruturas de controle.

### E se

```PHP
<?php 
 if ($_GET['name'] = "freecodecamp"){ 
  echo "You viewed the freeCodeCamp Page!"; 
 } 
```

### Elseif

```PHP
<?php 
 if ($_GET['name'] = "freecodecamp"){ 
  echo "You viewed the freeCodeCamp Page!"; 
 } elseif ($_GET['name'] = "freecodecampguide"){ 
  echo "You viewed the freeCodeCamp Guide Page!"; 
 } 
```

### Outro

```PHP
<?php 
 if ($_GET['name'] = "freecodecamp"){ 
  echo "You viewed the freeCodeCamp Page!"; 
 } elseif ($_GET['name'] = "freecodecampguide"){ 
  echo "You viewed the freeCodeCamp Guide Page!"; 
 } else { 
  echo "You viewed a page that does not exist yet!"; 
 } 
```

### Nota

Nos casos em que você tem muitas condições possíveis, você pode querer usar uma [instrução de troca](/php/switch) .

#### Mais Informações:

*   [manual de estruturas de controle php.net](https://secure.php.net/manual/en/control-structures.elseif.php)