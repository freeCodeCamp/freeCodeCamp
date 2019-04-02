---
title: PHP Variable Basics
localeTitle: Princípios Básicos de Variáveis ​​PHP
---
Variáveis ​​permitem que programadores usem dados através de um script PHP.

No PHP, as variáveis ​​sempre começam com um símbolo `$` seguido pelo nome da variável. Somente letras, números (pode não ser o primeiro caractere) e sublinhados podem compor o nome de uma variável.

Por exemplo, `$my_variable` , `$anotherVariable` e `$the2ndVariable` permitem nomes de variáveis ​​válidos.

Os nomes de variáveis ​​são sensíveis a maiúsculas e minúsculas. `$my_variable` é diferente de `$My_Variable` que é diferente de `$mY_vARiAblE` .

Antes que uma variável possa ser usada, ela deve ter um valor atribuído a ela.

```PHP
    <?php 
    $my_number = 1; 
    echo($my_number); 
 
    >>> 1 
```

No exemplo acima, a variável é `$my_number` . O valor atribuído a ele foi o número `1` . A variável foi então passada como um parâmetro para a função `echo` , que envia o valor para a linha de comando.