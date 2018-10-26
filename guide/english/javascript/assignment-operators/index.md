---
title: Assignment Operators
---

# Assignment Operators

Assignment operators, as the name suggests, assign (or re-assign) values to a variable. While there are quite a few variations of assignment operators, they all build off of the basic assignment operator.

## Syntax

`x = y;`| Description  | Necessity
:---------:|:---------------------:|:---------:  
`x` | Variable | Required  
`=` | Assignment operator | Required  
`y` | Value to assign to variable | Required

## Examples
```javascript
    let initialVar = 5;   // Variable initialization requires the use of an assignment operator

    let newVar = 5;
    newVar = 6;   // Variable values can be modified using an assignment operator
```
## Variations

The other assignment operators are usually shorthand methods for performing standard operations using the variable (indicated by x above) and value (indicated by y above) and then assigning the result to the variable itself.

For example, below is the syntax for the addition assignment operator:
```javascript
    x += y;
```
This is the same as applying the addition operator and reassigning the sum to the original variable (i.e., x), which can be expressed by the following code:
```javascript
    x = x + y;
```
To illustrate this using actual values, here is another example of using the addition assignment operator:
```javascript
    let myVar = 5;   // value of myVar: 5
    myVar += 7;   // value of myVar: 5 + 7 = 12
```
## A complete list of JavaScript's assignment operators
Operator | Syntax | Long version  
------------------------------- | --------- | -------------  
Assignment | x = y | x = y  
Addition assignment | x += y | x = x + y  
Subtraction assignment | x -= y | x = x - y  
Multiplication assignment | x *= y | x = x * y  
Division assignment | x /= y | x = x / y  
Remainder assignment | x %= y | x = x % y  
Exponentiation assignment | x **= y | x = x ** y  
Left shift assignment | x <<= y | x = x << y  
Right shift assignment | x >>= y | x = x >> y  
Unsigned right shift assignment | x >>>= y | x = x >>> y  
Bitwise AND assignment | x &= y | x = x & y  
Bitwise XOR assignment | x ^= y | x = x ^ y  
Bitwise OR assignment | x \|= y | x = x \| y

### More Information:

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Assignment' target='_blank' rel='nofollow'>MDN link</a>

<a href='https://docs.microsoft.com/en-us/scripting/javascript/reference/assignment-operator-decrement-equal-javascript' target='_blank' rel='nofollow'>MSDN link</a>
