---
title: Switch Case
---

# Switch Case

The switch statement is like a set of `if statements`.
It's a list of possibilities, with an action for each possibility, and an optional default action, in case nothing else evaluates to true.  As of C# 7, it is now possible to switch on a range (e.g. have a range of cases).  See the case n > 1 below.
We exit from the switch by `break`.

## Example
```
int number = 1;

switch(number)
{
    // Here the switch check if a case, match the number variable
    case 0:
        Console.WriteLine("The number is zero!");
        break;
    case 1:
        // Here I match the condition
        Console.WriteLine("The number is one!");
        break;
    case int n when (n > 1):
        // Handles all cases when n is greater than one.
        Console.WriteLine("The number is greater than one!");
        break;
    default:
        Console.WriteLine("The number is negative!");
        break;
}
```

## Output:
```
> The number is one!
```

## Example in if statements
The previous switch case example, in `if statements` corresponds to:
```
int number = 1;

if(number == 0)
{
    Console.WriteLine("The number is zero!");
}
else if(number == 1)
{
    Console.WriteLine("The number is one!");
}
else if(number > 1)
{
    Console.WriteLine("The number is greater than one!");
}
else
{
    Console.WriteLine("The number is negative!");    
}

```

## Output:
```
> The number is one!
```
The switch statement is often used as an alternative to an if-else construct if a single expression is tested against three or more conditions
