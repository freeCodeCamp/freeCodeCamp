---	
title: Use Multiple Conditional (Ternary) Operators	
---

## Use Multiple Conditional (Ternary) Operators

We need to use multiple ```conditional operators``` in the ```checkSign``` function to check if a number is positive, negative or zero.

Here’s a solution:

In the function body we need to add multiple ```conditional operators``` - as in our lesson:

```javascript
{return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";}
```
In this way, function can check if a number is positive, negative or zero.

Here’s a full solution:

```javascript
function checkSign(num) {
  return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
}
checkSign(10);
```
