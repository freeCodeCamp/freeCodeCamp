---
title: Single Or Default
localeTitle: Одноместный или по умолчанию
---
# SingleOrDefault

Возвращает одиночный элемент в последовательности, которая удовлетворяет заданному условию или по умолчанию, если элемент не найден. Метод генерирует исключение, если найдено более одного элемента, удовлетворяющего указанному условию.

### Подпись

```csharp
Enumerable.SingleOrDefault<TSource>(IEnumerable<TSource>, Func<TSource, Boolean>) 
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
 
 var purpleFruit = fruits.SingleOrDefault(f => f.Color == "Purple"); // Grape 
 
 var greenFruit = fruits.SingleOrDefault(f => f.Color == "Green"); // null 

```