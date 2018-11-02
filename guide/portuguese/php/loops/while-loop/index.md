---
title: While Loop
localeTitle: While Loop
---
## While Loop

O `while loop` é um dos tipos mais fáceis de loop no PHP. Ele executa o bloco de instruções até que a expressão seja avaliada como **TRUE** . Se o valor da expressão mudar no momento da execução, o loop será executado até que a expressão seja avaliada como **FALSE** . A forma básica do While Loop é fornecida abaixo:

```shell
while (expr) 
    statement 
```

As instruções dentro do loop while podem ser colocadas dentro das chaves ou podem ser usadas com base na seguinte sintaxe:

```shell
while (expr): 
    statement 
    ... 
 endwhile; 
```

Ilustrando a sintaxe simples e alternativa do loop while usando o exemplo:

```php
<?php 
 
 /* using the simple form of while loop */ 
 
 $i = 1;  /* initialisation part */ 
 
 while ($i <= 100 && $i!=5 ) 
 { 
    echo $i++; 
 } 
 
 /*using the alternate synatx of while loop*/ 
 
 $i = 0; 
 
 while ($i <= 10): 
    echo $i++; 
 endwhile; 
 
 ?> 
```

#### Mais Informações

[While loop - Documentação PHP](http://php.net/manual/en/control-structures.while.php)