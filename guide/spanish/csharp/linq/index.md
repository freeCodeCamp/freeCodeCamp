---
title: LINQ
localeTitle: LINQ
---
# LINQ (Language Integrated Query)

LINQ (Language Integrated Query) es un modelo y metodología de programación de Microsoft que esencialmente agrega capacidades de consulta formales a los lenguajes de programación basados ​​en Microsoft .NET. LINQ ofrece una sintaxis compacta, expresiva e inteligible para manipular datos. El valor real de LINQ proviene de su capacidad para aplicar la misma consulta a una base de datos SQL, un DataSet, una lista, un diccionario, etc.

## Ejemplo

LINQ se puede utilizar para filtrar, transformar, buscar datos y muchas más tareas complejas. Digamos que tenemos la siguiente lista de objetos:

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

Entonces podemos hacer cosas como:

```csharp
// Obtener el nombre de la primer fruta
 var firstName = fruits.Select(f => f.Name).First(); // Orange 
 
 // Conteo de las frutas rojas
 var qntRed = fruits.Where(Color == "Red").Count(); // 2 
 
 // Lista de las frutas amarillas 
 var yellowFruits = fruits.Where(f => f.Color == "Yellow").ToList(); // { Pineapple, Mango } 
 
 // Ordenar la lista de mayor a menor cantidad
 var orderedFruits = fruits.OrderByDescending(f => f.Quantity).ToList(); // {Grape, Strawberry, Orange, Apple, Mango, Pineapple} 
 
 // Suma de las cantidades de las frutas
 var quantity = fruits.Sum(f => f.Quantity); // 53 
 
 // Consultar si hay frutas verdes
 var hasGreen = fruits.Any(f => f.Color == "Green"); // false 
 
 // Agrupar frutas por color en un diccionario
 var fruitsByColor = fruits.GroupBy(g => g.Color).ToDictionary(k => k.Key, v => v.ToList()); // Dictionary of list of fruits by color 
 
 // Las operaciones linq pueden ser concatenadas y no se realizan hasta que la informacion es requerida
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
