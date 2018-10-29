---
title: Learn About Php Variables
localeTitle: Saiba mais sobre variáveis ​​PHP
---
Variáveis ​​são contêineres para armazenamento de dados, como `strings` , `integers` , valores `boolean` , `array` e objetos.

O PHP segue certas regras para declarações de variáveis ​​como:

*   A variável deve começar com um sinal de dólar ($)

Exemplo:

`php <?php $var = 5; ?>`

*   O nome da variável pode conter caracteres como AZ, az, 0-9, \_ e caracteres [ASCII](http://www.asciitable.com/ "ASCII Table") de 127-255.

Exemplo:

`php <?php $var = 5; //Valid $var_1 = "Foo"; //Valid $_var2 = 'Bar'; //Valid $var.3 = 'Baz'; //Invalid ?>`

*   O nome da variável pode começar com sublinhado (\_).

Exemplo:

`php <?php $_var2 = 'Bar'; //Valid ?>`

*   O nome da variável não deve começar com um número 0-9.

Exemplo:

`php <?php $9var3 = 'Baz'; //Invalid ?>`

*   O nome da variável faz distinção entre maiúsculas e minúsculas.

Exemplo:
```
<?php 
    $var = 5; //Valid 
    $VAR = "Foo"; //Valid 
    echo $var; //Output 5 
    echo "<br>"; 
    echo $VAR; //Output Foo 
 ?> 
```

PHP é uma linguagem fracamente tipada, portanto, não precisamos declarar o tipo de dados de uma variável ao declarar a variável. Ao contrário de Java ou C.
```
<?php 
    $var = 5; 
    $var2 = 4; 
    $sum = $var+$var2; 
    echo $sum; //Output 9 
    echo "<br>"; 
    echo $var+$var2; //Output 9 
 ?> 
```

As variáveis ​​também podem ser atribuídas por referência. Isso permite que duas variáveis ​​se refiram ao mesmo conteúdo. O operador `&` é colocado antes da variável a ser referenciada.

Exemplo:
```
<?php 
    $var1 = "foo"; 
    $var2 = "bar"; 
 
 myTest($var1, $var2); 
 
 echo $var1; //Output foo 
 echo $var2; //Output BAR 
 
 function myTest($var1, &$var2){ 
    $var1 = "FOO"; 
    $var2 = "BAR"; 
 } 
 ?> 
```

Para ter nomes de variáveis ​​definidos dinamicamente, usamos as variáveis ​​variáveis. Isso pode ser particularmente útil quando há necessidade de criar várias variáveis.

Exemplo:
```
<?php 
 
    $var = 'Tom'; 
    echo $var;      //Output Tom 
    $$var = 'Cat'; //The value of $$var is the value of $var. So $$var and $Tom give the same output. 
    echo $$var;   //Output Cat 
    echo $Tom;   //Output Cat 
 ?> 
```

# Escopo Variável

O escopo da variável refere-se aos locais de onde uma variável é acessível.

*   O escopo global é para as variáveis ​​declaradas fora de uma função. Essas variáveis ​​podem ser acessadas de qualquer lugar, mas não dentro de uma função.
*   O escopo local é para as variáveis ​​declaradas dentro de uma função que não pode ser acessada de qualquer lugar fora da função.

Exemplo:
```
<?php 
   $global = "Hello"; 
 
  function Test(){ 
   $local = "World"; 
   echo $global; //Error 
   echo $local; //Output World 
  } 
 
   Test(); 
   echo $global; //Output Hello 
   echo $local; //Error 
 ?> 
```

Para acessar variáveis ​​globais dentro de uma função:
```
<?php 
   $global = "Hello"; 
 
 function Test(){ 
   global $global; 
   $local = "World"; 
   echo $global; //Output Hello 
   echo $local; //Output World 
  } 
 
   Test(); 
   echo $global; //Output Hello 
   echo $local; //Error 
 ?> 
```

# Variáveis ​​Estáticas

Toda vez que uma função é criada, todas as variáveis ​​locais são excluídas. Para reter o último valor da variável, declaramos que é `static` .

Exemplo:
```
<?php 
 
 function WithStatic(){ 
   static $var = 0; 
   echo $var; 
   $var++; 
  } 
 
   WithStatic(); //Output 0 
   WithStatic(); //Output 1 
   WithStatic(); //Output 2 
 
 function WithoutStatic(){ 
   $var = 0; 
   echo $var; 
   $var++; 
  } 
 
   WithoutStatic(); //Output 0 
   WithoutStatic(); //Output 0 
   WithoutStatic(); //Output 0 
 ?> 

```