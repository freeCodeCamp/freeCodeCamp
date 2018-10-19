---
title: Array.prototype.concat
---
## Array.prototype.concat
The 'concat' method returns a new array consisting of the elements of the array on which you call it, followed by the elements of the arguments in the order they are passed.

You can pass multiple arguments to the 'concat' method. The arguments can be arrays, or data types like booleans, strings, and numbers.

### Syntax

```javascript
const newArray = array.concat(value1, value2, value3...);
```

### Examples

#### Concatenating two arrays
```javascript
var cold = ['Blue', 'Green', 'Purple'];
var warm = ['Red', 'Orange', 'Yellow'];

var result = cold.concat(warm);

console.log(result);
// results in ['Blue', 'Green', 'Purple', 'Red', 'Orange', 'Yellow'];
```

#### Concatenating value to an array

```javascript
const odd = [1, 3, 5, 7, 9];
const even = [0, 2, 4, 6, 8];

const oddAndEvenAndTen = odd.concat(even, 10);

console.log(oddAndEvenAndTen);
// results in [1, 3, 5, 7, 9, 0, 2, 4, 6, 8, 10];
```

#### More Information:
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

