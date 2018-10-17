---
title: PHP Variables
localeTitle: Variáveis ​​PHP
---### Tipos PHP-Vaiables

Variáveis ​​são a principal maneira de armazenar informações no meio de um programa PHP. Todas as variáveis ​​no PHP são doadas com um sinal de dólar como `$variable_name` . As variáveis ​​são atribuídas com o `= operator` , com a variável do lado esquerdo e a expressão a ser avaliada à direita.

### Nomenclatura Variável

As regras para nomear uma variável estão listadas abaixo:

1.  Os nomes das variáveis ​​devem começar com uma letra ou caractere sublinhado. 2.Um nome de variável pode consistir em números, letras, sublinhados, mas você não pode usar caracteres como `+ , - , % , ( , ) . &` em seu nome. Os nomes 3.Variable são sensíveis a maiúsculas e minúsculas ie `($age and $AGE are two different variables)` .

### Criando (declarando) variáveis ​​PHP

No PHP, uma variável começa com o sinal $, seguido pelo nome da variável. O trecho de código abaixo mostra isso.

`shell <?php $txt = "Hello world!"; $x = 6; $y = 10.5; ?>`