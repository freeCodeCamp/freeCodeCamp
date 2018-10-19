---
title: Array.prototype.shift
---
The JavaScript array method `.shift()` will remove the first element from an array and return that value. This will also change the length of the array

**Syntax**

```javascript
  var array = [1, 2, 3, 4];
  array.shift();
```

## Description

`.shift()` will remove the element at index 0 of the array upon which it is called. It then returns the removed value and shifts all remaining elements down by 1 index value.

`.shift()` will return `undefined` if the array it is called on contains no elements.

## Examples

**Shifting the first value from an array**

```javascript
  var array = [1, 2, 3, 4, 5];
  console.log(array);
  // Console will output 1, 2, 3, 4, 5

  array.shift();
  // If we console.log(array.shift()); the console would output 1.

  console.log(array);
  /* Console will output 2, 3, 4, 5 and 
  the variable array now contains the set [2, 3, 4, 5] where 
  each element has been moved down 1 index value. */
```

Source : <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift' target='_blank' rel='nofollow'>MDN</a>
