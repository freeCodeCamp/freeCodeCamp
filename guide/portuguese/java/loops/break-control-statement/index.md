---
title: Break Control Statement
localeTitle: Declaração de controle de quebra
---
# Declaração de controle de quebra

Encerra o loop e inicia a execução do código que segue imediatamente o loop. Se você tiver loops aninhados, a instrução de `break` só terminará o loop no qual ela é colocada.

```java
// Loop 1 
 for (int i = 0; i < 10; i++) 
 { 
    // Loop 2 
    for (int j = 0; j < 10; j++) 
    { 
        if (i == 5 && j == 5) 
        { 
            break; // Will terminate Loop 2, but Loop 1 will keep going 
        } 
    } 
 } 
```

Mas se você quiser sair do loop externo também, use um rótulo para sair:

```java
loop1: // This is a label 
 for (int i = 0; i < 10; i++) 
 { 
    // Loop 2 
    for (int j = 0; j < 10; j++) 
    { 
        if (i == 5 && j == 5) 
        { 
            break loop1; // Will break out of Loop 1, instead of Loop 2 
        } 
    } 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CJZA/0)

instruções de `break` podem ser particularmente úteis durante a pesquisa de um elemento em uma matriz. Usar a `break` no código a seguir melhora a eficiência quando o loop é interrompido assim que o elemento que procuramos ( `searchFor` ) é encontrado, em vez de continuar até que o fim de `arrayInts` seja atingido.

```java
int j = 0; 
 int[] arrayOfInts = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}; 
 int searchFor = 5; 
 
 for (int i : arrayOfInts) 
 { 
    if (arrayOfInts[j] == searchFor) 
    { 
        break; 
    } 
    j++; 
 } 
 
 System.out.println("j = " + j); 
```

A instrução break também pode ser usada na instrução while.

```java
int i = 0; 
 int[] arrayOfInts = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}; 
 int searchFor = 5; 
 
 while(i < 10){ 
 System.out.println("i = " + j); 
 if(arrayOfInts[i] > 7){ 
  break; 
  } 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CJZC/0)