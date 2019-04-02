---
title: Spread Operator
---
## Spread Operator

The spread operator (`...`), allows to get the elements of a collection.

One of the most common uses is for `Node` Objects, when using query selectors in the browser, in order to make them iterable Array Objects:
```javascript
const paragraphs = document.querySelectorAll('p.paragraph');
const arr = [...paragraphs];
```

Another use of the spread operator is for Array concatenation:
```javascript
const arr_1 = [1, 2, 3, 4]
const arr_2 = [5, 6, 7, 8]
const arr_final = [...arr_1, ...arr_2]
// arr_final = [1, 2, 3, 4, 5, 6, 7, 8]
```

Spread operator can be used to copy an Array. 
```javascript
const arr_3 = [1, 2, 3, 4]
const reference = arr_3
const copy = [...arr_3]
copy.push(5)
// arr_3 = [1, 2, 3, 4]
// copy = [1, 2, 3, 4, 5]

The spread operator can also copy enumerable properties from one or more objects onto a new object:
```javascript
const obj1 = {
  a: 1,
  b: 2,
  c: 3
};

const obj2 = {
  d: 4,  
  e: 5,
  f: 6
};

const newObj = {...obj1, ...obj2);

// newObj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

```
### More Information:

- [MDN - Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
