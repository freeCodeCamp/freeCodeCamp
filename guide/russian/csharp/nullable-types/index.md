---
title: Nullable Types
localeTitle: Неверные типы
---
## Неверные типы

Необязательными типами являются экземпляры [System.Nullable \\](https://docs.microsoft.com/en-us/dotnet/api/system.nullable-1) структура. Тип с `null` значением может представлять правильный диапазон значений для его базового типа значений плюс дополнительное значение `null` . Эта возможность очень полезна, когда вы работаете с базами данных или другими типами данных, которые могут содержать элементы без присвоенного значения.

#### Как использовать тип NULL

```csharp
// Declare a variable of Nullable type (Nullable<int>) 
 int? i = null; 
 
 int  j = 0; 
 int defaultValue = 0; 
 
 // test for null and assign value to another variable 
 if (i.HasValue) 
 { 
    j = i.Value; 
 } 
 
 // get assigned value or default when current value is null 
 j = i.GetValueOrDefault(); // i.GetValueOrDefault(defaultValue) 
 
 //use coalescing operator to assign default value when current value is null 
 j = i ?? defaultValue; 
```

Для получения дополнительной информации перейдите по следующей ссылке:

*   [Руководство по программированию на C #: Nullable Types](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/nullable-types/)