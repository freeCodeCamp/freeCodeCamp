---
title: If
localeTitle: Se
---
# Se

A instrução if executa diferentes blocos de código com base em condições.
```
if (condition) { 
    // Do something when `condition` is true 
 } 
 else { 
    // Do something when `condition` is false 
 } 
```

Quando a `condition` é verdadeira, o código dentro da seção `if` é executado, caso contrário `else` executa. Às vezes você precisaria adicionar uma segunda condição. Para facilitar a leitura, você deve usar uma instrução `else if` ao invés de aninhar um `if` .
```
if (condition) { 
    // Do something if `condition` is true 
 } 
 else if (anotherCondition) { 
    // Do something if `anotherCondition` is ture 
 } 
 else { 
    // Do something if `condition` AND `anotherCondition` is false 
 } 
```

Observe que as seções `else` e `else if` não são necessárias, enquanto `if` é obrigatório.

## Exemplo
```
#include <stdio.h> 
 
 int main () { 
 
   // Local variable definition 
   int a = 10; 
 
   // Check the boolean condition 
   if(a < 5) { 
      // If condition is true then print the following 
      printf("a is less than 5!\n" ); 
   } 
   else { 
      // If condition is false then print the following 
      printf("a is not less than 5!\n" ); 
   } 
 
   printf("Value of a is : %d\n", a); 
 
   return 0; 
 } 
```

## Saída
```
-> a is not less than 5! 
 -> Value of a is : 100 

```