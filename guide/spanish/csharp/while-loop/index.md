---
title: While Loop
localeTitle: Mientras bucle
---# Mientras bucle

El bucle while ejecuta un bloque de código hasta que una condición especificada es falsa. Debido a que la prueba de la expresión while tiene lugar antes de cada ejecución del bucle, un bucle while se ejecuta cero o más veces. Esto difiere del bucle do, que se ejecuta una o más veces porque la prueba de la expresión tiene lugar después de la ejecución del bucle. 1

## Ejemplo

```csharp
int i = 0; 
 while (i < 5) 
 { 
    Console.WriteLine("Number " + i); 
    i++; 
 } 
```

### Salida:
```
> Number 0 
 > Number 1 
 > Number 2 
 > Number 3 
 > Number 4 
```

## Otros usos

Los bucles while se usan a menudo para infinitas iterraciones usando (por ejemplo) `while (true)` , solo para terminar a través de una condición no relacionada con la condición inicial del bucle.

```csharp
int i = 0; 
 while (true) 
 { 
    if(i<50){ 
        Console.WriteLine("Number " + i); 
        i++; 
    } 
    else{ 
        Console.WriteLine("End of loop"); 
        break; 
    } 
 } 
```

## Las diferencias con el bucle `for`

Las mayores diferencias entre la `for` y `while` bucles es que `while` se utiliza normalmente cuando un desarrollador no está seguro de un número exacto de iteraciones del bucle, y `for` se utiliza cuando está claro cuántas veces de repetición de código.

### Fuentes

*   [Microsoft C # - mientras](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/while)