---
title: Single Or Default
---

# SingleOrDefault

Returns the single element in a sequence that satisfies the specified condition or the default value if no element is found. The method will throw an exception if more than one element is found that satisfies the specified condition.

### Signature
```csharp
Enumerable.SingleOrDefault<TSource>(IEnumerable<TSource>, Func<TSource, Boolean>)
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

var purpleFruit = fruits.SingleOrDefault(f => f.Color == "Purple"); // Grape

var greenFruit = fruits.SingleOrDefault(f => f.Color == "Green"); // null
```
