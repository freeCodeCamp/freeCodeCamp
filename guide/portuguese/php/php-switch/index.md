---
title: PHP Switch
localeTitle: Comutador PHP
---
## Comutador PHP

A instrução `switch` no PHP é semelhante a uma série de instruções `if` na mesma expressão. A instrução `switch` é usada para executar diferentes ações em diferentes condições. A sintaxe da instrução `switch` é a seguinte
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

Quando executamos o programa, a expressão dentro da instrução `switch` é avaliada. O resultado dessa expressão é verificado com rótulos correspondentes, se houver uma correspondência, então o bloco de `case` correspondente é executado. Se nenhuma correspondência for encontrada com qualquer uma das instruções case, apenas o bloco de código após o `default` será executado.

Ilustração do `switch` com um exemplo
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

A instrução `switch` também pode ser usada sem instrução `break` . Nesse caso, as instruções após os casos correspondentes serão executadas. Abaixo está um uso da instrução `switch` sem instrução `break` .
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

#### Mais Informações:

[Switch Statement - Documentação PHP](http://php.net/manual/en/control-structures.switch.php)

[Interruptor PHP5 - W3Schools](https://www.w3schools.com/php/php_switch.asp)