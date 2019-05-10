---
title: Hello World
localeTitle: Olá Mundo
---# Olá Mundo

Para escrever algum texto no console, usamos o `Console.WriteLine()` . Este método usa uma string como entrada.

## Exemplo

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

## Saída:

```sh
> Hello World! 
 > Press any key to exit. 

```