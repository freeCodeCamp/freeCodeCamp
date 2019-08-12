---
title: For Loop
localeTitle: En bucle
---
# En bucle

El bucle `for` ejecuta un bloque de código hasta que una condición especificada es falsa. Aunque una `for` bucle se parece a un [`while` de bucle](https://guide.freecodecamp.org/csharp/while-loop) , los desarrolladores deben utilizar de manera **adecuada.** Use `while` bucles cuando el número de iteraciones es variable, de lo contrario use `for` bucles. Un uso común de `for` bucles son iteraciones de matriz. 1

## Sintaxis

```csharp
for ((Initial variable); (condition); (step)) 
    { 
    (code) 
    } 
```

El C # para el bucle consta de tres expresiones y algunos códigos.

## Descripción

*   _Variable inicial_ : su estado de inicio, por ejemplo, int i = 0;
*   _Condición_ : Mientras esta condición sea verdadera, el código continuará ejecutándose, por ejemplo, i <= 5;
*   _Paso_ : El incremento o decremento de la variable inicial, por ejemplo, i ++ o i- = 2.

## Ejemplo

```csharp
int[] array = { 1, 2, 3, 4, 5 }; 
 for (int i = 0; i < array.Length; i++) 
 { 
    Console.WriteLine("Item on index {0} is {1}", i, array[i]); 
 } 
```

## Salida:
```
> Item on index 0 is 1 
 > Item on index 1 is 2 
 > Item on index 2 is 3 
 > Item on index 3 is 4 
 > Item on index 4 is 5 
```

### Fuentes

1 https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/for