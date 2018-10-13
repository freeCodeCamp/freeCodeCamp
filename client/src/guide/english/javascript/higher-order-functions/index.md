---
title: Higher Order Functions
---
## Higher Order Functions

A Higher Order Function is any function that returns a function when executed, takes a function as one or more of its arguments, or both. If you have used any of the `Array` methods like `map` or `filter`, or passed a callback function to jQuery's `$.get`, you have already worked with Higher Order Functions.

When you use `Array.map`, you provide a function as its only argument, which it applies to every element contained in the array.

```javascript
var arr = [ 1, 2, 3 ];

var arrDoubled = arr.map(function(num) {
  return num * 2;
});

console.log(arrDoubled); // [ 2, 4, 6 ]
```

Higher order functions can also return a function. For example, you can make a function called `multiplyBy` that takes a number and returns a function that multiplies another number you provide by the first number provided. You can use this approach to create a `multiplyByTwo` function to pass to `Array.map`. This will give you the same result you saw above.

```javascript
function multiplyBy(num1) {
  return function(num2) {
    return num1 * num2;
  }
}

var multiplyByTwo = multiplyBy(2);

var arr = [ 1, 2, 3 ];

var arrDoubled = arr.map(multiplyByTwo);

console.log(arrDoubled); // [ 2, 4, 6 ]
```

See the guide on <a href='https://guide.freecodecamp.org/javascript/closures' target='_blank' rel='nofollow'>Closures</a> for more information on how `multiplyByTwo` keeps a reference to `num1` in the example above.

<a href='https://eloquentjavascript.net/05_higher_order.html' target='_blank' rel='nofollow'>More info about Closures</a>
