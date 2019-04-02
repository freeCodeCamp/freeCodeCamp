---
title: While Loop
---

# While Loop

The while loop executes a block of code until a specified condition is false. Because the test of the while expression takes place before each execution of the loop, a while loop executes zero or more times. This differs from the do loop, which executes one or more times because the test of the expression takes place after the execution of the loop.<sup>1</sup>

## Example
```csharp
int i = 0;
while (i < 5)
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

## Other Uses

The while loops is often used for infinite iterrations by using (for example) `while (true)`, only to be ended through a condition unrelated to the initial condition of the loop. Be careful to not get stuck in an infinite loop when using while loops in this manner.


```csharp
int i = 0;
while (true)
{
    if(i<50){
        Console.WriteLine("Number " + i);
        i++;
    }
    else{
        Console.WriteLine("End of loop");
        break;
    }
}
```

## Differences to the `for` loop

The biggest differences between the  `for` and `while` loops is that `while` is typically used when  a developer is not sure of an exact number of iterations of the loop, and `for` is used when it's clear how many times to iterate through code.


### Sources
* [Microsoft C# - while](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/while)

