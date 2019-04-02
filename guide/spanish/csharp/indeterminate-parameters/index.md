---
title: Indeterminate parameters
localeTitle: Parámetros indeterminados
---
# Parámetros indeterminados

Imaginemos que necesitamos escribir un método en el que el número de parámetros sea variable. ¿Cómo podemos hacer eso? Bueno, C # (y otros idiomas) tiene una manera fácil de hacerlo; Al usar la palabra clave `params` en el parámetro de un método, podemos llamar a ese método con un número variable de parámetros.

## Ejemplo
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

## Salida:
```
> Parameter 0 is 1 
 > Parameter 1 is 2 
 > Parameter 2 is 3 
 > Parameter 0 is 4 

```