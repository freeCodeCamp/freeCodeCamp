---
title: Return Statement
---

# Return Statement

The `return` statement terminates execution of a method inside which it appears and returns control to the calling method. It may or may not return a value.

If the `return` statement is inside a `try` block and if there is a `finally` block, then the control is passed to the `finally` block, after which it is returned to the calling method.

## Example
```csharp
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
    int result = Sum(a, b);
    Console.WriteLine($"The sum of {a} and {b} is {result}");
    
    // To keep the console from closing
    Console.ReadLine();
  }
}


```

## Output:
```csharp
> The sum of 4 and 3 is 7
```

## What Can Be Returned?
It's important to realize what can be returned in a method.  The type you return must match the type you initialize with the method you're calling.  

Let's take a look at an example which **does not work**:

```csharp
public static void Main (string[] args) {
	var answer = Sum(1, 3);
	Console.WriteLine(answer);
}

public int Sum(int a, int b) {
    return "Your sum is: " + (a + b);
}
```

If you copy and paste the above code into a C# compiler and attempt to run it, you will get an error about not being able to convert `string` to `int`. The reason why is that we are saying with `public int Sum` and that we are guaranteeing to `return` an `int` and in our `return` statement, we are returning a `string` because all primitive types (`int`, `double`, `float`, `boolean`, etc.) are converted to a `string` when concatenated (the `+` sign)  with a `string` type.

In this case, to correct this mistake, we either need to change this `Sum` function to `return` a `string` or keep it as an `int` type and handle the flavor text of the answer outside of the method.  I'm going to go with the latter, and handle this as an `int` return type and add in that text "Your sum is: " to the calling method.


```csharp
public static void Main (string[] args) {
	var answer = Sum(1, 3);
	Console.WriteLine("Your sum is: " + answer);
}

public int Sum(int a, int b) {
    return a + b;
}
```

After running the above program, the code executes and outputs:

```text
Your sum is: 4
```
