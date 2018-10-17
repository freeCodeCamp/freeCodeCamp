---
title: Single Or Default
localeTitle: Único ou padrão
---
# SingleOrDefault

Retorna o único elemento em uma sequência que satisfaz a condição especificada ou o valor padrão, se nenhum elemento for encontrado. O método lançará uma exceção se mais de um elemento for encontrado que satisfaça a condição especificada.

### Assinatura

```csharp
Enumerable.SingleOrDefault<TSource>(IEnumerable<TSource>, Func<TSource, Boolean>) 
```

## Exemplo

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