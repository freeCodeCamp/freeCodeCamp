---
title: First Or Default
localeTitle: Primero o predeterminado
---
# FirstOrDefault

Devuelve el primer elemento que satisface una condición dada opcional. Si no se encuentra ningún elemento, se devuelve el `default()` del objeto.

### Firma

```csharp
Enumerable.FirstOrDefault<TSource>(IEnumerable<TSource>, Func<TSource, Boolean>) 
```

## Ejemplo

```csharp
var fruits = new List<Fruit>() { 
    new Fruit() { Id = 1, Name = "Orange",     Color = "Orange", Quantity: 3   }, 
    new Fruit() { Id = 2, Name = "Strawberry", Color = "Red",    Quantity: 12  }, 
    new Fruit() { Id = 3, Name = "Grape",      Color = "Purple", Quantity: 25  }, 
    new Fruit() { Id = 4, Name = "Pineapple",  Color = "Yellow", Quantity: 1   }, 
    new Fruit() { Id = 5, Name = "Apple",      Color = "Red",    Quantity: 5   }, 
    new Fruit() { Id = 6, Name = "Mango",      Color = "Yellow", Quantity: 2   } 
 }; 
 
 // Obtiene la primer fruta, si el enumerable esta vacio, regresa null
 var firstFruit = fruits.FirstOrDefault(); // Orange 
 
 // Obtiene la primer fruta de color verde, si no encuentra ninguna fruta, regresa null
 var firstYellowFruit = fruits.FirstOrDefault(f => f.Color == "Green"); // null 

```
