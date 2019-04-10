---
title: Array.prototype.map
---
## Array.prototype.map

The `.map()` method loops through the given array and executes the provided function on each element. It returns a new array which contains the results of the function call on each element.

### Examples

**ES5**
```js
var arr = [1, 2, 3, 4];
var newArray = arr.map(function(element) { return element * 2});
console.log(newArray); // [2, 4, 6, 8]
```

**ES6**
```js
const arr = [1, 2, 3, 4];
const newArray = arr.map(element => element * 2);
console.log(newArray);
//[2, 4, 6, 8]
```

**More Information**

Here is an interactive Scrimba screencast which explains `Array.prototype.map()`:

<div style="position: relative; padding-bottom: 56.25%;"><iframe allowfullscreen="true" src="https://scrimba.com/cast/c2Lg3hB.embed" style="border: 0px; position: absolute; width: 100%; height: 100%;"></iframe></div>

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
