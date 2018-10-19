---
title: Hello World
localeTitle: Hola Mundo
---
# Hola Mundo

Para escribir un texto en la consola usamos `Console.WriteLine()` . Este método toma una cadena como entrada.

## Ejemplo

```csharp
using System; 
 
 namespace HolaMundo 
 { 
    class Hola 
    { 
        static void Main() 
        { 
            // Escribir "Hola Mundo!" en la consola 
            Console.WriteLine("Hola Mundo!"); 
 
            // Manten la ventana de la consola abierta en modo depuración. 
            Console.WriteLine("Pulsa cualquier tecla para salir."); 
            Console.ReadKey(); 
        } 
    } 
 } 
```

## Salida:

```
> Hola Mundo! 
 > Pulsa cualquier tecla para salir. 

```
