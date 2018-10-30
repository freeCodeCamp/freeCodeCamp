---
title: If Else Statement
---

# If Else Statement

The If-Else statement executes different blocks of code depending on the truthfulness of the specified condition.

## Syntax
```
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
```
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

Since we already declared our int Price to be 30, this will be the expected output.

## Output
```
Price is equal to 30.
```
