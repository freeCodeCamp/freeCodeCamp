---
title: Short-Circuit Evaluation
localeTitle: Avaliação de curto-circuito
---
# Avaliação de curto-circuito

A avaliação de curto-circuito consiste em verificar ou executar o segundo argumento apenas se o primeiro argumento não for suficiente para determinar o valor da expressão.

Você pode fazer uma avaliação de curto-circuito com && e || operadores.

## Exemplo com o operador &&:

```c
  canOpenFile(filename) && openFile(filename); // If you can open the file then open it. 
```

O exemplo acima é equivalente a:

```c
  if ( canOpenFile(filename) ) { 
    openFile(filename); 
  } 
```

## Exemplo com || operador:

```c
  isServerOn || startServer(); // If the server is not on then start it. 
 ``` 
 The example above is equivalent to: 
 
 ```c 
  if ( !isServerOn ) { 
    startServer(); 
  } 
 ``` 
 
 ## Keep it all together in real example 
 
 ```c 
 #include <stdio.h> 
 #include <stdlib.h> 
 
 char *getName(); 
 
 int main(int argc, char *argv[]) { 
    // Get first argument passed via terminal 
    char *name = argv[1]; 
 
    // If name is not passed via terminal then print message and then get the name 
    name || printf("Please give me your name:") && (name = getName()); 
 
    printf("Hello %s\n", name); 
 } 
 
 char *getName() { 
    // Allocate memory 
    char *name = malloc(30); 
 
    scanf("%s", name); 
    return name; 
 } 

```