---
title: Single Or Default
localeTitle: 单一或默认
---
# 的SingleOrDefault

返回满足指定条件的序列中的单个元素，如果未找到任何元素，则返回默认值。如果找到满足指定条件的多个元素，则该方法将抛出异常。

### 签名

```csharp
Enumerable.SingleOrDefault<TSource>(IEnumerable<TSource>, Func<TSource, Boolean>) 
```

## 例

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