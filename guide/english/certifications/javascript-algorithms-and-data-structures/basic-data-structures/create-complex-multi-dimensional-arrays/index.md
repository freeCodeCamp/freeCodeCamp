---
title: Create complex multi-dimensional arrays
---
## Create complex multi-dimensional arrays

- The first string - `deep` - must be inserted three levels deep. This means within exactly threes sets of `[square-brackets]`.

```javascript
let threeLevelArray = ["first level", ["Two levels deep", ["Three levels deep"]]];
```
- Using this logic insert strings `deep` , `deeper` and `deepest` in the matrix three levels deep, four levels deep and five levels deep respectively.

## Solution:
```javascript
let myNestedArray = [
  // change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array',["deep"]],
  ['mutate', 1327.98, 'splice', 'slice', 'push', [["deeper"]]],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[["deepest"]]] ]
  // change code above this line
];
```
