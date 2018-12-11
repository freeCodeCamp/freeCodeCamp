---
title: Catch Unclosed Parentheses, Brackets, Braces and Quotes
---
## Catch Unclosed Parentheses, Brackets, Braces and Quotes

The reduce() method reduces an array to a single value.  If you're not familiar with it, the following code shows an example of using the the method:

```
const array1 = [1, 2, 3, 4];
console.log(array1.reduce((accumulator, currentValue) => accumulator + currentValue));  // expected output: 10
```
You can also define the argument to the reduce method as a variable or constant and hand that in to the function, e.g.,

```
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));      // expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));   // expected output: 15
```

You can see and run this code at [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).

## Solution:

```javascript
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
```
