---
title: Null-coalescing Operator
localeTitle: Оператор Null-coalescing
---
# Оператор Null-coalescing

Оператор null-coalescing в C # используется, чтобы помочь назначить одну переменную другому и указать альтернативное значение, если исходное значение равно `null` . Оператор нулевой коалесценции в C # равен `??` ,

## Пример 1

Поскольку `name` равно `null` , `clientName` будет присвоено значение «John Doe».

```cs
string name = null; 
 
 string clientName = name ?? "John Doe"; 
 
 Console.WriteLine(clientName); 
```

```cs
> John Doe 
```

## Пример 2.

Поскольку `name` не равно `null` , `clientName` будет присвоено значение `name` , которое является «Jane Smith».

```cs
string name = "Jane Smith"; 
 
 string clientName = name ?? "John Doe"; 
 
 Console.WriteLine(clientName); 
```

```cs
> Jane Smith 
```

## Альтернатива if ... else Statement

Вы можете использовать оператор `if...else` для проверки наличия `null` и назначения другого значения.

```cs
string clientName; 
 
 if (name != null) 
    clientName = name; 
 else 
    clientName = "John Doe"; 
```

Однако это может быть значительно упрощено с помощью оператора нулевой коалесценции.

```cs
string clientName = name ?? "John Doe"; 
```

## Альтернатива условному (тройному) оператору

Также можно использовать условный оператор для проверки наличия `null` и присвоения другого значения.

```cs
string clientName = name != null ? name : "John Doe"; 
```

Опять же, это можно упростить с помощью оператора нуль-коалесценции.

```cs
string clientName = name ?? "John Doe"; 
```

## Рекомендации

*   [?? Оператор (ссылка C #)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/null-conditional-operator)