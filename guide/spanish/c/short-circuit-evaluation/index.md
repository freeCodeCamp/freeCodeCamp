---
title: Short-Circuit Evaluation
localeTitle: Evaluación de corto circuito
---
# Evaluación de corto circuito

La evaluación de cortocircuito consiste en verificar o ejecutar el segundo argumento solo si el primer argumento no es suficiente para determinar el valor de la expresión.

Puede hacer una evaluación de cortocircuito con && y || operadores

## Ejemplo con el operador &&:

```c
  canOpenFile(filename) && openFile(filename); // If you can open the file then open it. 
```

El ejemplo anterior es equivalente a:

```c
  if ( canOpenFile(filename) ) { 
    openFile(filename); 
  } 
```

## Ejemplo con || operador:

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