---
title: If Else Statement
---

# If...Else Statement 

The If...Else statement executes different blocks of code depending on the truthfulness of the specified condition.


## Syntax
```C#
if (boolean expression)
{
   // execute this code block if expression evalutes to true
}
else
{
   // always execute this code block when above if expression is false
}
```

## Example
```C#
int Price = 30;

if (Price == 30)
{
    Console.WriteLine("Price is equal to 30.");
}
else 
{
    Console.WriteLine("Price is not equal to 30.");
}
```

Since we already declared our integer `Price` to be 30, this will be the expected output.

### Output
```
Price is equal to 30.
```

## Shortened If...Else Statement

We can use the ternary `:?` which is great for short if...else statements.

For example:
```C#
int Price = 30;
(Price == 30) ? Console.WriteLine("Price is Equal to 30.") : Console.WriteLine("Price is Not Equal to 30.")
```
