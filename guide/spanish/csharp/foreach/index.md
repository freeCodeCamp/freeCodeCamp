---
title: Foreach Loop
localeTitle: Foreach Loop
---
## Foreach Loop

El bucle `foreach` ejecuta un bloque de código para cada elemento de una colección. El beneficio del bucle `foreach` es que no necesita saber cuántos elementos hay dentro de la colección para iterar a través de él; simplemente le dice a su bucle `foreach` para que recorra la colección, siempre que haya elementos dentro de ella. Es útil para iterar a través de listas, matrices, datos, IEnumerables y otras estructuras de datos similares a listas. Puede ser menos eficiente que un muy bien diseñado `for` lazo, pero la diferencia es insignificante en la mayoría de los casos.

### Ejemplo

```csharp
foreach (element in iterable-item) 
 { 
    // body of foreach loop 
 } 
 
 List<string> Names = new List<string>{ "Jim", "Jane", "Jack" } 
 
 foreach(string name in Names) 
 { 
    Console.WriteLine("We have " + name); 
 } 
```

### Salida:

```sh
> We have Jim 
 > We have Jane 
 > We have Jack 

```