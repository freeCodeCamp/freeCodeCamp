---
title: Array
---

## Array

The JavaScript `Array` object is a global object that is used in the construction of arrays; which are high-level, list-like objects.

*Create an Array*

```javascript
var fruits = ['Apple', 'Banana'];

console.log(fruits.length);
// 2
```

*Access (index into) an Array item*

```javascript
var first = fruits[0];
// Apple

var last = fruits[fruits.length - 1];
// Banana
```

*Loop over an Array*

```javascript
fruits.forEach(function(item, index, array) {
  console.log(item, index);
});
// Apple 0
// Banana 1
```

*Add to the end of an Array*

```javascript
var newLength = fruits.push('Orange');
// ["Apple", "Banana", "Orange"]
```

*Remove from the end of an Array*

```javascript
var last = fruits.pop(); // remove Orange (from the end)
// ["Apple", "Banana"];
```

*Remove from the front of an Array*

```javascript
var first = fruits.shift(); // remove Apple from the front
// ["Banana"];
```

More information: 
[MDN Javascript Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
