---
title: Ternary operator
---

# Ternary operator (`?:`)
Ternary operator returns one of the two expressions based on a condition. It can be used as a shortcut for if...else statement.

## Syntax
```
condition_expression ? expression_1 : expression_2
```
### Parameter
`condition_expression`
Boolean expression.

`expression_1`
Returned if `condition_expression` is true.

`expression_2`
Returned if `condition_expression` is false.

## Example
```
// initialize - set true or false here to view different result
bool hasFreeSweets = false;

string str = hasFreeSweets ? "Free sweets!" : "No free sweets.";

//output in console
Console.WriteLine(str);
```

## Output
```
if hasFreeSweets == true
> Free sweets!

if hasFreeSweets == false
> No free sweets.
```
