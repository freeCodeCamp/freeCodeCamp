---
title: Do while loop
localeTitle: Hacer mientras bucle
---
# Hacer mientras bucle

El bucle `do while` while ejecuta un bloque de código una vez y hasta que una condición es falsa. Ellos son un caso particular de [`while` bucles](https://guide.freecodecamp.org/csharp/while-loop) : ejecutan un bloque de código una vez y luego hasta que la condición es falsa. Un uso común de `do while` bucles son controles de entrada.

## Ejemplo
```
do 
 { 
    //execute code block 
 
 
 } while(boolean expression); 
 
 
 string input = ""; 
 do 
 { 
    Console.WriteLine("Type A to continue: "); 
    input = Console.ReadLine(); 
 } while(input != "A"); 
 
 Console.WriteLine("Bye!"); 
```

## Salida:
```
> Type A to continue: b 
 > Type A to continue: g 
 > Type A to continue: A 
 > Bye! 
```

#### Más información:

*   [Microsoft C # - hacer](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/do)
*   [Dot Net Perls - hacer](https://www.dotnetperls.com/do)