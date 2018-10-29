---
title: Ternary operator
---

# Ternary operator (`?:`)
Ternary operator return one of the two expression based on the condition. It can be used as a shortcut for if...else statement.

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
bool hasFreeSweet = false;

string str = hasFreeSweet ? "Free sweet!" : "No free sweet.";

//output in console
Console.WriteLine(str);
```

## Output
```
if hasFreeSweet == true
> Free sweet!

if hasFreeSweet == false
> No free sweet.
```
