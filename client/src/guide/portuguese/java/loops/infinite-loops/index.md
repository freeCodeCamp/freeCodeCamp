---
title: Infinite Loops
localeTitle: Loops Infinitos
---
# Loops Infinitos

Um loop infinito é uma instrução loop ( `for` , `while` , `do-while` ) que não termina sozinha.

A condição de teste de uma instrução em loop decide se o corpo do loop será executado ou não. Assim, uma condição de teste que é sempre verdadeira continuará a executar o corpo do loop, para sempre. Esse é o caso em um loop infinito.

Exemplos:

```java
// Infinite For Loop 
 for ( ; ; ) 
 { 
    // some code here 
 } 
 
 // Infinite While Loop 
 while (true) 
 { 
    // some code here 
 } 
 
 // Infinite Do While Loop 
 do 
 { 
    // some code here 
 } while (true); 
```

Normalmente, se o seu loop está rodando infinitamente, é um erro que não deve ocorrer, já que um loop infinito não para e impede que o resto do programa seja executado.

```java
for(int i=0;i<100;i++){ 
 
    if(i==49){ 
    i=0; 
    } 
 
 } 
```

O loop acima é executado infinitamente, porque toda vez que me aproximo de 49, ele é definido como 0. Isso significa que nunca alcanço 100 para finalizar o loop, portanto, o loop é um loop infinito.

Mas um programa preso em tal loop continuará usando os recursos do computador indefinidamente. Isso é indesejável e é um tipo de 'erro em tempo de execução'.

Para evitar o erro, os programadores usam uma instrução break para sair do loop. A quebra é executada apenas sob uma condição específica. O uso de uma instrução de seleção como if-else garante o mesmo.

```java
while (true) 
 { 
    // do something 
 
    if(conditionToEndLoop == true) 
        break; 
 
    // do more 
 } 
```

A principal vantagem de usar um loop infinito sobre um loop regular é a legibilidade.

Às vezes, o corpo de um loop é mais fácil de entender se o loop terminar no meio e não no final / início. Em tal situação, um loop infinito será uma escolha melhor.