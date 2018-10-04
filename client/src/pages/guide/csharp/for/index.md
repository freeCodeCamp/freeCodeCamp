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

## Example
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

### Sources
1 https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/for
