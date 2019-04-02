---
title: All
localeTitle: Todas
---
# Todas

Devuelve verdadero si todos los elementos de la colección coinciden con el predicado.

### Firma

```csharp
public static bool All<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate); 
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
 
 // Todas las frutas con cantidad mayor a cero 
 var allFruitsHaveAQuantity = fruits.All(f => f.Quantity > 0); // true 
 // Todas las frutas tienen color amarillo
 var allYellow = fruits.All(f => f.Color == "Yellow"); // false 

```
