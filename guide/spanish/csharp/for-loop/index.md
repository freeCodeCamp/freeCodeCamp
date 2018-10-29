---
title: For Loop
localeTitle: En bucle
---# En bucle

El bucle for ejecuta un bloque de código repetidamente hasta que una expresión condicional especificada se evalúa como falsa.

Anatomía del bucle for:
```
for (initialization; condition; iterator) 
 { 
    body 
 } 
```

*   Inicialización: la (s) declaración (es) de inicialización establece la condición inicial y se ejecuta solo una vez antes de ingresar al cuerpo del bucle.
*   condición: expresión booleana que determina si el cuerpo del bucle debe ejecutarse de nuevo o si el bucle debe salir.
*   iterador: se ejecuta después de cada iteración del cuerpo del bucle.

### Ejemplo 1
```
for (int i = 0; i < 5; i++) 
 { 
    Console.WriteLine("Number " + i); 
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

### Ejemplo 2
```
int j = 0; 
 for (int i = 0; j < 5; i++) 
 { 
    Console.WriteLine("Numbers {0} {1}", i, j); 
    j++; 
 } 
```

### Salida:
```
> Numbers 0 0 
 > Numbers 1 1 
 > Numbers 2 2 
 > Numbers 3 3 
 > Numbers 4 4 
```

### Ejemplo 3 - Simplificación del Ejemplo 2
```
for (int i = 0, j = 0; i < 5 && j < 5; i++, j++) 
 { 
    Console.WriteLine("Numbers {0} {1}", i, j); 
 } 
```

### Salida:
```
> Numbers 0 0 
 > Numbers 1 1 
 > Numbers 2 2 
 > Numbers 3 3 
 > Numbers 4 4 
```

### Ejemplo 4
```
for (int i = 5; i > 0; i--) 
 { 
    Console.WriteLine("Number " + i); 
 } 
```

### Salida:
```
> Number 5 
 > Number 4 
 > Number 3 
 > Number 2 
 > Number 1 
```

### Ejemplo 5
```
// Infinite loop - The loop body is executed infinitely 
 for (; ;) 
 { 
    Console.WriteLine("The universe is infinite"); 
 } 
 
 // Anything after infinite loop is reported as "Unreachable code detected" in Visual Studio 
 Console.WriteLine("Never considered for execution"); 
```

### Salida:
```
> The universe is infinite 
 > The universe is infinite 
 > The universe is infinite 
 > .... 
 > .... 
```

### Ejemplo 6
```
int i = 0; 
 for (; i < 5;) 
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

### Otros recursos

*   [Documentación de Microsoft](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/for)

## Fin