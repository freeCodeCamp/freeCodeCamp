---
title: Ternary operator
---

# Ternary operator (`?:`)
A ternary operator returns one of the two expression based on a condition. It can be used as a substitute for if...else statements.

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

## Equivalent if...else Statement
```
// initialize - set true or false here to view different result
bool hasFreeSweet = false;

string str;

if(hasFreeSweet){
    str = "Free sweet!";
} else {
    str = "No free sweet.";
}

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
