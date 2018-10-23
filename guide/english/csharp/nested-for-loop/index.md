---
title: Nested For Loop
---

# Nested For Loop

An inner for loop may be nested in the body of an outer for loop.

The outer loop will iterate after the inner loop evaluates to false.

The inner loop resets with each iteration of the outer loop.
```

### Example 
```
for (int i = 0; i < 3; ++i)
{
  for (int j = 0; j <= i; ++j)
  Console.Write(‘#’);
  
Console.WriteLine();
}
```

### Output:
```
> #
> ##
> ###
```

### Other Resources
- [Microsoft Documentation](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/for)

## End
