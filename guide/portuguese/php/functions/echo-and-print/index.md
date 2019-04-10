---
title: Echo and Print
localeTitle: Eco e Imprimir
---
## Eco e Imprimir

As funções de eco e impressão fornecem uma maneira de escrever o valor de uma variável ou argumento na tela.

### eco

A função `echo()` grava o valor de uma variável ou argumento na tela.

```PHP
<?php 
 echo "freeCodeCamp"; 
```

NOTA: Um caminho curto para abrir a tag e o eco do PHP é <? =
```
<?= "freeCodeCamp"; ?> 
```

### impressão

O `print()` calcula o valor de uma variável ou argumento para a tela.

```PHP
<?php 
 print "freeCodeCamp"; 
```

### print\_r

A função `print_r()` grava o valor de qualquer variável (como uma matriz) ou argumento na tela, ao contrário das funções de eco ou impressão que são mais limitadas.

```PHP
<?php 
 $freecodecamp = "freeCodeCamp"; 
 print_r($freecodecamp); 
```

#### Mais Informações:

*   [php.net echo () manual](https://secure.php.net/manual/en/function.echo.php)
*   [manual do php.net print ()](https://secure.php.net/manual/en/function.print.php)
*   [Manual do php.net print\_r ()](https://secure.php.net/manual/en/function.print-r.php)