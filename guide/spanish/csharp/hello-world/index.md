---
title: Hello World
localeTitle: Hola Mundo
---# Hola Mundo

Para escribir un texto en la consola usamos `Console.WriteLine()` . Este método toma una cadena como entrada.

## Ejemplo

```csharp
using System; 
 
 namespace HelloWorld 
 { 
    class Hello 
    { 
        static void Main() 
        { 
            // Write "Hello World!" on console 
            Console.WriteLine("Hello World!"); 
 
            // Keep the console window open in debug mode. 
            Console.WriteLine("Press any key to exit."); 
            Console.ReadKey(); 
        } 
    } 
 } 
```

## Salida:

```sh
> Hello World! 
 > Press any key to exit. 

```