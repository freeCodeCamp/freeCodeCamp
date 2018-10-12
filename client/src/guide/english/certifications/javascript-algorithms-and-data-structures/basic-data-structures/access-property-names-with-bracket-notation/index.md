---
title: Access Property Names with Bracket Notation
---
## Access Property Names with Bracket Notation

Method:
- Using bracket notation simply write the return statement in the `checkInventory()` function.
- The following code block demonstrates the required syntax.

## Example:
```javascript

let juice = {
  apple: 1.15,
  orange: 1.45
};
function checkInventory(scannedItem) {
  return juice[scannedItem];
}

```
## Solution:
```javascript

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
// do not change code above this line

function checkInventory(scannedItem) {
  // change code below this line
  return foods[scannedItem];
}

// change code below this line to test different cases:
console.log(checkInventory("apples"));

```
