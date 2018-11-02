---
title: Array.prototype.forEach
---
## Array.prototype.forEach

The 'forEach' array method is used to iterate through each item in an array.  The method is called on the array Object and is passed a function that is called on each item in the array.

```javascript
var arr = [1, 2, 3, 4, 5];

arr.forEach(number => console.log(number * 2));

// 2
// 4
// 6
// 8
// 10
```

The callback function can also take a second parameter of an index in case you need to reference the index of the current item in the array.

```javascript
var arr = [1, 2, 3, 4, 5];

arr.forEach((number, i) => console.log(`${number} is at index ${i}`));

// '1 is at index 0'
// '2 is at index 1'
// '3 is at index 2'
// '4 is at index 3'
// '5 is at index 4'
```

#### More Information:
<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach' target='_blank' rel='nofollow'>MDN Article on Array.prototype.forEach()</a>
