---
title: Indeterminate parameters
localeTitle: Неопределенные параметры
---
# Неопределенные параметры

Представим себе, что нам нужно написать метод, в котором число параметров является переменным. Как мы можем сделать это? Ну, C # (и другие языки) имеет простой способ сделать это; используя ключевое слово `params` по параметру метода, мы можем вызвать этот метод с переменным числом параметров.

## пример
```
public static void Main (string[] args) { 
    // Call PrintParams with 3 parameters 
    PrintParams(1, 2, 3); 
 
    // Call PrintParams with 1 parameter 
    PrintParams(4); 
 } 
 
 public static void PrintParams(params int[] values) 
 { 
    // Iterate through parameters 
    for (int i = 0; i < values.Length; i++) 
    { 
        Console.WriteLine("Parameter {0} is {1}", i, values[i]); 
    } 
 } 
```

## Вывод:
```
> Parameter 0 is 1 
 > Parameter 1 is 2 
 > Parameter 2 is 3 
 > Parameter 0 is 4 

```