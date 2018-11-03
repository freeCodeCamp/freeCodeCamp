---
title: Arrays
localeTitle: Matrizes
---
## Matrizes

### Tipos de matrizes

No PHP, existem três tipos de matrizes: Matrizes Indexadas, Matrizes Associativas e Matrizes Multidimensionais.

### Exemplo de Matriz Indexada

Uma matriz indexada acessa objetos por número de índice.

```PHP
<?php 
 $freecodecamp = array("free", "code", "camp"); 
```

`$freecodecamp[0]` retornaria `"free"` , `$freecodecamp[1]` retornaria `"code"` e `$freecodecamp[2]` retornaria `"camp"` .

### Exemplo de Matriz Associativa

Um array associativo acessa objetos pelo nome da chave.

```PHP
<?php 
 $freecodecamp = array("free"=>"0","code"=>"1","camp"=>"2"); 
```

`$freecodecamp['free']` retornaria "0", `$freecodecamp['code']` retornaria "1", `$freecodecamp['camp']` retornaria "2",

### Exemplo de matriz multidimensional

Um array multidimensional é um array que contém outros arrays.

```PHP
<?php 
 $freecodecamp = array(array("free"=>"0","code"=>"1","camp"=>"2"),array("free"=>"0","code"=>"1","camp"=>"2"),array("free"=>"0","code"=>"1","camp"=>"2")); 
```

#### Mais Informações:

*   [manual de arrays do php.net](https://secure.php.net/manual/en/language.types.array.php)