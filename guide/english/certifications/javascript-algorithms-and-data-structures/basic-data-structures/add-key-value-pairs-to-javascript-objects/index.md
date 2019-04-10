---
title: Add Key-Value Pairs to JavaScript Objects
---
## Add Key-Value Pairs to JavaScript Objects

- The foods object has already been declared. All that is left to be done is to add three new `key-values`.

```javascript
OBJECT[{KEY}] = {VALUE}
```

- The above code will create a ney `key-value` within the object. 

## Solution
```javascript
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};
// change code below this line
foods['bananas'] = 13;
foods['grapes'] = 35;
foods['strawberries'] = 27;
// change code above this line
console.log(foods);
```
