---
title: is
---

## is
The `is` keyword checks if an object is compatible with a given type, or (starting with C# 7) tests an expression against a pattern.

## Example
```csharp
  int number = 6;
  Console.WriteLine(number is long);    // False
  Console.WriteLine(number is double);  // False
  Console.WriteLine(number is int);     // True
```

#### More information:
- [C# Reference: is](https://docs.microsoft.com/dotnet/csharp/language-reference/keywords/is)
