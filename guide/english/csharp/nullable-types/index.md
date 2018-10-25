---
title: Nullable Types
---

## Nullable Types
Nullable types are instances of the [System.Nullable\<T\>](https://docs.microsoft.com/en-us/dotnet/api/system.nullable-1) struct. 
A nullable type can represent the correct range of values for its underlying value type, plus an additional `null` value.
This ability is very useful when you are dealing with databases or other data types that may contain elements without assigned value.

#### How to use nullable type
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

For more information, visit the following link:
- [C# Programming Guide: Nullable Types](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/nullable-types/)
