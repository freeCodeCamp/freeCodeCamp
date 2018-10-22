---
title: If Else Statement
---

# If Else Statement

The If-Else statement executes a block of code depending on whether your precondition is fullfilled or not.

## Example
```

if(boolean expression)
{
// execute this code block if expression evalutes to true
}
else
{
// always execute this code block when above if expression is false
}


int Price = 30;

If (Price = 30)
{
  Console.WriteLine("Price is equal to 30.");
}

Else 
{
  Console.WriteLine("Price is not equal to 30.");
}
```

Since we already declared our int Price to be 30, this will be the expected output.

## Output
```
Price is equal to 30.
```

Another important option to consider when using short If/Else statements is the ternary operator.
 ~~~~
  string output=(price == 30 ? "price is equal to 30" : "price is not equal to 30")
~~~~
