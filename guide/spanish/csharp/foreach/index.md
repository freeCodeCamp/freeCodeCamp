---
title: Foreach Loop
localeTitle: Foreach Loop
---
## Bucle Foreach

El bucle `foreach` ejecuta un bloque de código por cada elemento de una colección. La ventaja del bucle `foreach` es que no necesita saber cuántos elementos hay dentro de la colección para iterar a través de él; simplemente le dices a tu bucle `foreach` que recorra la colección, siempre y cuando hayan elementos dentro de ella. Es útil para iterar a través de listas, matrices, datos, IEnumerables y otras estructuras de datos similares a listas. Puede ser menos eficiente que un bucle `for` bien diseñado, pero la diferencia es insignificante en la mayoría de los casos.

### Ejemplo

```csharp
foreach (element in iterable-item) 
 { 
    // Cuerpo del bucle foreach
 } 
 
 List<string> Names = new List<string>{ "Jim", "Jane", "Jack" } 
 
 foreach(string name in Names) 
 { 
    Console.WriteLine("Tenemos " + name); 
 } 
```

### Salida:

```sh
> Tenemos Jim 
 > Tenemos Jane 
 > Tenemos Jack 

```
