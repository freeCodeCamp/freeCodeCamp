---
title: For Loop
---

# For Loop

The for loop executes a block of code repeatedly until a specified conditional expression evaluates to false.

Anatomy of for loop:
```
for (initialization; condition; iterator)
{
    body
}
```

- initialization - The initialization statement(s) sets the initial condition and run only once before you enter the body of the loop.
- condition      - Boolean expression which determines whether the body of the loop should execute again or the loop should exit.
- iterator       - Executes after each iteration of the body of the loop.

### Example 1
```
for (int i = 0; i < 5; i++)
{
    Console.WriteLine("Number " + i);
}
```

### Output:
```
> Number 0
> Number 1
> Number 2
> Number 3
> Number 4
```
- Only counts to 4 due to the fact that the initial number is 0 meaning that 5 numbers including 0 would reach 4.

### Example 2
```
int j = 0;
for (int i = 0; j < 5; i++)
{
    Console.WriteLine("Numbers {0} {1}", i, j);
    j++;
}
```

### Output:
```
> Numbers 0 0
> Numbers 1 1
> Numbers 2 2
> Numbers 3 3
> Numbers 4 4
```

### Example 3 - Simplification of Example 2
```
for (int i = 0, j = 0; i < 5 && j < 5; i++, j++)
{
    Console.WriteLine("Numbers {0} {1}", i, j);
}
```

### Output:
```
> Numbers 0 0
> Numbers 1 1
> Numbers 2 2
> Numbers 3 3
> Numbers 4 4
```

### Example 4
```
for (int i = 5; i > 0; i--)
{
    Console.WriteLine("Number " + i);
}
```

### Output:
```
> Number 5
> Number 4
> Number 3
> Number 2
> Number 1
```

### Example 5
```
// Infinite loop - The loop body is executed infinitely
for (; ;)
{
    Console.WriteLine("The universe is infinite");
}

// Anything after infinite loop is reported as "Unreachable code detected" in Visual Studio
Console.WriteLine("Never considered for execution");
```
### Output:
```
> The universe is infinite
> The universe is infinite
> The universe is infinite
> ....
> ....
```

### Example 6
```
int i = 0;
for (; i < 5;)
{
    Console.WriteLine("Number " + i);
    i++;
}
```
### Output:
```
> Number 0
> Number 1
> Number 2
> Number 3
> Number 4
```

### Other Resources
- [Microsoft Documentation](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/for)

## End
