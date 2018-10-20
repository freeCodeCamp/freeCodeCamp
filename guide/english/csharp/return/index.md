---
title: Return Statement
---

# Return Statement

The `return` statement terminates execution of a method inside which it appears and returns control to the calling method. It may or may not return a value.

If the `return` statement is inside a `try` block and if there is a `finally` block, then the control is passed to the `finally` block, after which it is returned to the calling method.

# Yield Statement
The yield statement changes the behavior of the return statement. If yield is added infornt of return then you can return each item from with in a loop. It may have some use case where you want to return some value from with in a loop to the out side.

Used as: yield return(5);

## Example
```
class Calc
{
  static int Sum(int i, int j)
  {
    return i + j;
  }
  
  static void Main()
  {
    int a = 4;
    int b = 3;
    int sum = Sum(a, b);
    Console.WriteLine($"The sum of {a} and {b} is {result}");
    
    // To keep the console from closing
    Console.ReadLine();
  }
}


```

## Output:
```
> The sum of 4 and 3 is 7
``
Further study:
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/yield
