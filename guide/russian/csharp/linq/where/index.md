---
title: Where
localeTitle: куда
---# где

Фильтрует элементы из набора данных.

### Подпись

```csharp
Enumerable.Where<TSource> Method (IEnumerable<TSource>, Func<TSource, Boolean>) 
```

## пример

```csharp
var fruits = new List<Fruit>() { 
    new Fruit() { Id = 1, Name = "Orange",     Color = "Orange", Quantity: 3   }, 
    new Fruit() { Id = 2, Name = "Strawberry", Color = "Red",    Quantity: 12  }, 
    new Fruit() { Id = 3, Name = "Grape",      Color = "Purple", Quantity: 25  }, 
    new Fruit() { Id = 4, Name = "Pineapple",  Color = "Yellow", Quantity: 1   }, 
    new Fruit() { Id = 5, Name = "Apple",      Color = "Red",    Quantity: 5   }, 
    new Fruit() { Id = 6, Name = "Mango",      Color = "Yellow", Quantity: 2   } 
 }; 
 
 // Fruits with more than 3 items 
 var moreThanThree = fruits.Where(f => f.Quantity > 3).ToList(); // { Strawberry, Grape, Apple } 
 
 // Fruits that are not red 
 var notRed = fruits.Where(f => f.Color != "Red").ToList(); // { Orange, Grape, Pineapple, Mango } 

```