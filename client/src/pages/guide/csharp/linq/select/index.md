---
title: Select
---

# Select

Projects data from the data set.

### Signature
```csharp
Enumerable.Select<TSource, TResult> Method (IEnumerable<TSource>, Func<TSource, TResult>)
```

## Example
```csharp
var fruits = new List<Fruit>() {
    new Fruit() { Id = 1, Name = "Orange",     Color = "Orange", Quantity: 3   },
    new Fruit() { Id = 2, Name = "Strawberry", Color = "Red",    Quantity: 12  },
    new Fruit() { Id = 3, Name = "Grape",      Color = "Purple", Quantity: 25  },
    new Fruit() { Id = 4, Name = "Pineapple",  Color = "Yellow", Quantity: 1   },
    new Fruit() { Id = 5, Name = "Apple",      Color = "Red",    Quantity: 5   },
    new Fruit() { Id = 6, Name = "Mango",      Color = "Yellow", Quantity: 2   }
};

var mangoQnt = fruits.Select(f => f.Quantity).FirstOrDefault(f => f.Name == "Mango"); // 2

var grapeColor = fruits.Select(f => f.Color).FirstOrDefault(f => f.Name == "Grape"); // Purple
```
