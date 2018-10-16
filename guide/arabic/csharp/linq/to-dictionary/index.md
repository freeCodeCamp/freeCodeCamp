---
title: To Dictionary
localeTitle: إلى قاموس
---# ToDictionary

Greates قاموس من DataSet؛

### التوقيع

 `Enumerable.ToDictionary<TSource, TKey> Method (IEnumerable<TSource>, Func<TSource, TKey>) 
` 

## مثال

 `var fruits = new List<Fruit>() { 
    new Fruit() { Id = 1, Name = "Orange",     Color = "Orange", Quantity: 3   }, 
    new Fruit() { Id = 2, Name = "Strawberry", Color = "Red",    Quantity: 12  }, 
    new Fruit() { Id = 3, Name = "Grape",      Color = "Purple", Quantity: 25  }, 
    new Fruit() { Id = 4, Name = "Pineapple",  Color = "Yellow", Quantity: 1   }, 
    new Fruit() { Id = 5, Name = "Apple",      Color = "Red",    Quantity: 5   }, 
    new Fruit() { Id = 6, Name = "Mango",      Color = "Yellow", Quantity: 2   } 
 }; 
 
 // Generates a Dictionary of Fruits by Id 
 var fruitsById = fruits.ToDictionary(k => k.Id, v => v); // Dictionary<int, Fruit> 
 
 // Generates a dictionary fruits by color 
 var fruitsByColor = fruits.GroupBy(g => g.Color).ToDictionary(k => k.Key, v => v.ToList()); // Dictionary of list of fruits by color 
 
 // Generates a dictionary of quantity of fruits by color 
 var fruitsByColor = fruits.GroupBy(g => g.Color).ToDictionary(k => k.Key, v => v.Sum(s => s.Quantity)); // Dictionary of sum of fruits by color 
`