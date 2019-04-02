---
title: Short-Circuit Evaluation
localeTitle: Оценка короткого замыкания
---
# Оценка короткого замыкания

Оценка короткого замыкания заключается в проверке или выполнении второго аргумента, только если первый аргумент недостаточен для определения значения выражения.

Вы можете выполнить оценку короткого замыкания с помощью && и || операторы.

## Пример с оператором &&:

```c
  canOpenFile(filename) && openFile(filename); // If you can open the file then open it. 
```

Приведенный выше пример эквивалентен:

```c
  if ( canOpenFile(filename) ) { 
    openFile(filename); 
  } 
```

## Пример с || оператор:

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