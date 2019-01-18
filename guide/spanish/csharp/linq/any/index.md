---
title: Any
localeTitle: Alguna
---
# Alguna

Devuelve verdadero si hay al menos un elemento que coincide con el predicado. Cuando se usa un predicado vacío (solo .Any () sin nada entre paréntesis), devolverá verdadero si la colección no está vacía.

### Firma

```csharp
public static bool Any<TSource>(this IEnumerable<TSource> source); 
 public static bool Any<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate); 
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
 
 // Consulta si alguna fruta tiene cantidad mayor a 20
 var anyFruitGreaterThanTwenty = fruits.Any(f => f.Quantity > 20); // true 
 
 // Consulta si alguna fruta es de color verde
 var anyGreen = fruits.Any(f => f.Color == "Green"); // false 
 
 var hasFruits = fruits.Any(); // true 
 
 var hasYellowFruit = fruits.Any(f => f.Color == "Yellow"); // true 

```
