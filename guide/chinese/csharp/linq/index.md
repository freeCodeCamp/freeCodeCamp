---
title: LINQ
localeTitle: LINQ
---# LINQ（语言集成查询）

LINQ（语言集成查询）是一种Microsoft编程模型和方法，它基本上将正式查询功能添加到基于Microsoft .NET的编程语言中。 LINQ为操作数据提供了紧凑，富有表现力和可理解的语法。 LINQ的真正价值在于它能够将相同的查询应用于SQL数据库，数据集，列表，字典等。

## 例

LINQ可用于过滤，转换，搜索数据以及更多复杂任务。假设我们有以下对象列表：

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

然后我们可以做以下事情：

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