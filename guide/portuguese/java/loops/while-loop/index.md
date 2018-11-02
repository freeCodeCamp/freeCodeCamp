---
title: While Loop
localeTitle: While Loop
---
# While Loop

A `while` loop é executado repetidamente o bloco de instruções até que a condição especificada dentro dos parênteses é avaliada como `false` . Por exemplo:

```java
while (some_condition_is_true) 
 { 
    // do something 
 } 
```

Cada 'iteração' (de executar o bloco de instruções) é precedida pela avaliação da condição especificada dentro dos parênteses - As instruções são executadas somente se a condição for avaliada como `true` . Se for avaliado como `false` , a execução do programa é retomada da instrução logo após o bloco `while` .

**Nota:** Para o `while` loop para iniciar a execução, você iria requerer a condição de ser `true` inicialmente. No entanto, para sair do loop, você deve fazer algo dentro do bloco de instruções para, eventualmente, alcançar uma iteração quando a condição for avaliada como `false` (conforme feito abaixo). Caso contrário, o loop será executado para sempre. (Na prática, ele será executado até que a [JVM](https://guide.freecodecamp.org/java/the-java-virtual-machine-jvm) fique sem memória.)

## Exemplo

No exemplo a seguir, a `expression` é dada por `iter_While < 10` . Nós incrementamos `iter_While` por `1` cada vez que o loop é executado. Os `while` ansa quebras quando `iter_While` valor atinge `10` .

```java
int iter_While = 0; 
 while (iter_While < 10) 
 { 
    System.out.print(iter_While + " "); 
    // Increment the counter 
    // Iterated 10 times, iter_While 0,1,2...9 
    iter_While++; 
 } 
 System.out.println("iter_While Value: " + iter_While); 
```

Saída:
```
0 1 2 3 4 5 6 7 8 9 
 iter_While Value: 10 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CJYj/0)