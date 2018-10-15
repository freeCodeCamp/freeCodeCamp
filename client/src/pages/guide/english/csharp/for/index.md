---
title: For Loop
---

# For Loop

The `for` loop executes a block of code until a specified condition is false. Althought `for` loop looks like a <a href='https://guide.freecodecamp.org/csharp/while-loop' target='_blank' rel='nofollow'>`while` loop</a>, developers should use them __properly__. Use `while` loops when the number of iterations are variable, otherwise use `for` loops. A common use of `for` loops are array iterations.<sup>1</sup>

## Syntax
```C#
for ((Initial variable); (condition); (step)) 
	{
	(code)
	}
```

The C# for loop consists of three expressions and some code.

## Description

- *Initial Variable*: your starting state, eg int i = 0;
- *Condition*: While this condition is true the code will continue to run, eg i<=5;
- *Step*: The increment, or decrement, of the initial variable, eg i++ or i-=2.

## Example 1
```C#
int[] array = { 1, 2, 3, 4, 5 };
for (int i = 0; i < array.Length; i++)
{
	Console.WriteLine("Item on index {0} is {1}", i, array[i]);
}
```

## Output:
```
> Item on index 0 is 1
> Item on index 1 is 2
> Item on index 2 is 3
> Item on index 3 is 4
> Item on index 4 is 5
```
### Example 2
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

### Example 3
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

### Example 4 - Simplification of Example 2
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

### Example 5
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

### Example 6
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

### Example 7
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
### Sources
1 https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/for
