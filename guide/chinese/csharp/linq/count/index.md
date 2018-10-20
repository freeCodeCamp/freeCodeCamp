---
title: Count
localeTitle: 计数
---
＃ 任何 返回序列中满足条件的元素计数。 ###签名

```csharp
Enumerable.Count<TSource> Method (IEnumerable<TSource>, Func<TSource, Boolean>) 
```

##例子

```csharp
var fruits = new List<Fruit>() { 
    new Fruit() { Id = 1, Name = "Orange",     Color = "Orange", Quantity: 3   }, 
    new Fruit() { Id = 2, Name = "Strawberry", Color = "Red",    Quantity: 12  }, 
    new Fruit() { Id = 3, Name = "Grape",      Color = "Purple", Quantity: 25  }, 
    new Fruit() { Id = 4, Name = "Pineapple",  Color = "Yellow", Quantity: 1   }, 
    new Fruit() { Id = 5, Name = "Apple",      Color = "Red",    Quantity: 5   }, 
    new Fruit() { Id = 6, Name = "Mango",      Color = "Yellow", Quantity: 2   } 
 }; 
 // Count of Fruit with Color Red. 
 var yellowCount = fruits.Count(f => f.Color == "Red"); // 2 
 // Count of Fruit with Quantity > 2 
 var quantityOverTwo = fruits.Count(f => f.Quantity > 2); // 4 

```