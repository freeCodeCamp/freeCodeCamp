---
title: If
localeTitle: E se
---
# E se

A instrução if executa diferentes blocos de código com base nas condições.
```
if (condition) { 
    // Do something when `condition` is true 
 } 
 else { 
    // Do something when `condition` is false 
 } 
```

Quando a `condition` é verdadeira, o código dentro da seção `if` executado, caso `else` executado. Às vezes você precisaria adicionar uma segunda condição. Para facilitar a leitura, você deve usar uma instrução `else if` vez de aninhar `if` .
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

Observe que o `else` e `else if` seções não forem necessárias, enquanto `if` for obrigatório.

Voçê pode omitir as chaves "{ }" caso o `if` conter apenas uma instrução, o mesmo vale para o `else if` e o `else`:

```

if ( condition )
    // Instruction
else if( condition )
    // Instruction
else
    // Instruction

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
