---
title: Nullable Types
localeTitle: 可空类型
---
## 可空类型

可以为Nullable的类型是[System.Nullable的](https://docs.microsoft.com/en-us/dotnet/api/system.nullable-1)实例结构。 可空类型可以表示其基础值类型的正确值范围，以及额外的`null`值。 当您处理可能包含没有赋值的元素的数据库或其他数据类型时，此功能非常有用。

#### 如何使用可空类型

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

有关更多信息，请访问以下链接：

*   [C＃编程指南：可空类型](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/nullable-types/)