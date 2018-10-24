---
title: GroupBy
---

# GroupBy

Group elements from the dataset using a given condition.
The `GroupBy` returns an [`IGrouping`](https://docs.microsoft.com/pt-BR/dotnet/api/system.linq.igrouping-2?view=netframework-4.7.2) containing each group defined by the given condition. 

### Signature
```csharp
Function GroupBy(Of TSource, TKey) ( _ source As IQueryable(Of TSource), _ keySelector As Expression(Of Func(Of TSource, TKey)) _ ) As IQueryable(Of IGrouping(Of TKey, TSource))
```

## Example
```csharp
var fruits = new List<Fruit>() {
  new Fruit() { Id = 1, Name = "Orange",     Color = "Orange", Quantity = 3   },
  new Fruit() { Id = 2, Name = "Strawberry", Color = "Red",    Quantity = 12  },
  new Fruit() { Id = 3, Name = "Grape",      Color = "Purple", Quantity = 25  },
  new Fruit() { Id = 4, Name = "Pineapple",  Color = "Yellow", Quantity = 1   },
  new Fruit() { Id = 5, Name = "Apple",      Color = "Red",    Quantity = 5   },
  new Fruit() { Id = 6, Name = "Mango",      Color = "Yellow", Quantity = 2   }
};

// Sum quantity by color
var byColor = fruits.GroupBy(g => g.Color).ToDictionary(k => k.Key, v => v.Sum(x => x.Quantity)); // { Orange = 3, Red = 17, Purple = 25, Yellow = 3 }

```
