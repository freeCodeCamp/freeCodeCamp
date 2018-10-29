---
title: LINQ
localeTitle: LINQ
---# LINQ (языковой интегральный запрос)

LINQ (Language Integrated Query) - это модель и методология программирования Microsoft, которая существенно добавляет формальные возможности запросов в языки программирования на базе Microsoft .NET. LINQ предлагает компактный, выразительный и понятный синтаксис для управления данными. Реальное значение LINQ связано с его способностью применять один и тот же запрос к базе данных SQL, DataSet, списку, словарю и т. Д.

## пример

LINQ может использоваться для фильтрации, преобразования, поиска данных и выполнения множества сложных задач. Допустим, у нас есть следующий список объектов:

```csharp
var fruits = new List<Fruit>() { 
    new Fruit() { Id = 1, Name = "Orange",     Color = "Orange", Quantity: 3   }, 
    new Fruit() { Id = 2, Name = "Strawberry", Color = "Red",    Quantity: 12  }, 
    new Fruit() { Id = 3, Name = "Grape",      Color = "Purple", Quantity: 25  }, 
    new Fruit() { Id = 4, Name = "Pineapple",  Color = "Yellow", Quantity: 1   }, 
    new Fruit() { Id = 5, Name = "Apple",      Color = "Red",    Quantity: 5   }, 
    new Fruit() { Id = 6, Name = "Mango",      Color = "Yellow", Quantity: 2   } 
 } 
```

Тогда мы можем делать такие вещи, как:

```csharp
// Get the name of the first fruit 
 var firstName = fruits.Select(f => f.Name).First(); // Orange 
 
 // Count how many fruits are red 
 var qntRed = fruits.Where(Color == "Red").Count(); // 2 
 
 // Create a list of yellow fruits 
 var yellowFruits = fruits.Where(f => f.Color == "Yellow").ToList(); // { Pineapple, Mango } 
 
 // Orders list by quantity from most to less 
 var orderedFruits = fruits.OrderByDescending(f => f.Quantity).ToList(); // {Grape, Strawberry, Orange, Apple, Mango, Pineapple} 
 
 // Sum the quantity of fruits 
 var quantity = fruits.Sum(f => f.Quantity); // 53 
 
 // Check if there are any green fruits 
 var hasGreen = fruits.Any(f => f.Color == "Green"); // false 
 
 // Group fruits by color into a dictionary 
 var fruitsByColor = fruits.GroupBy(g => g.Color).ToDictionary(k => k.Key, v => v.ToList()); // Dictionary of list of fruits by color 
 
 // linq operations can be concatenated and are not performed as long as data is needed 
 var logs = new List<Log>; 
 
 if (filterBySeverity) 
    logs = logs.Where(p => p.Severity == severity); 
    //IQueryable 
 
 if (filterByUser) 
    logs = logs.Where(p => p.User == user); 
    //IQueryable 
 
    result = logs.ToList(); 
    //List<log> 

```