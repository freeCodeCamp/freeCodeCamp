---
title: Array.prototype.splice
---
## Array.prototype.splice

The splice method is similar to <a href='https://guide.freecodecamp.org/javascript/standard-objects/array/array-prototype-slice' target='_blank' rel='nofollow'>Array.prototype.slice</a>, but unlike `slice()` it mutates the array it is called on. It also differs in that it can be used to add values to an array as well as remove them.

### Parameters
`splice()` can take one or more
#### splice(start)
If only one parameter is included, then `splice(start)` will remove all array elements from `start` to the end of the array.
```js
let exampleArray = ['first', 'second', 'third', 'fourth'];
exampleArray.splice(2);
// exampleArray is now ['first', 'second'];
```

If `start` is negative, it will count backwards from the end of the array.
```js
let exampleArray = ['first', 'second', 'third', 'fourth'];
exampleArray.splice(-1);
// exampleArray is now ['first', 'second', 'third'];
```

#### splice(start, deleteCount)
If a second parameter is included, then `splice(start, deleteCount)` will remove `deleteCount` elements from the array, beginning with `start`.
```js
let exampleArray = ['first', 'second', 'third', 'fourth'];
exampleArray.splice(1, 2);
// exampleArray is now ['first', 'fourth'];
```

#### splice(start, deleteCount, newElement1, newElement2, ....)
If more than two parameters are included, the additional parameters will be new elements that are added to the array. The location of these added elements will be begin at `start`.

Elements can be added without removing any elements by passing `0` as the second parameter.
```js
let exampleArray = ['first', 'second', 'third', 'fourth'];
exampleArray.splice(1, 0, 'new 1', 'new 2');
// exampleArray is now ['first', 'new 1', 'new 2', 'second', 'third', 'fourth']
```

Elements can also be replaced.
```js
let exampleArray = ['first', 'second', 'third', 'fourth'];
exampleArray.splice(1, 2, 'new second', 'new third');
// exampleArray is now ['first', 'new second', 'new third', 'fourth']
```

### Return value
In addition to changing the array that it is called on, `splice()` also returns an array containing the removed values. This is a way of cutting an array into two different arrays.

```js
let exampleArray = ['first', 'second', 'third', 'fourth'];
let newArray = exampleArray.splice(1, 2);
// exampleArray is now ['first', 'fourth']
// newArray is ['second', 'third']
```

#### More Information:
<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice' target='_blank' rel='nofollow'>MDN - Array.prototype.slice()</a>
