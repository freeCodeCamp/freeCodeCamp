---
title: Array.prototype.reverse
---
The JavaScript array method `.reverse()` will reverse the order of the elements within the array.

**Syntax**
```javascript
  var array = [1, 2, 3, 4, 5];
  array.reverse();
```

## Description

`.reverse()` reverses the index of the elements of an array.

## Examples

**Use `.reverse()` to reverse the elements of an array**
```javascript
  var array = [1, 2, 3, 4, 5];
  console.log(array);
  // Console will output 1, 2, 3, 4, 5

  array.reverse();

  console.log(array);
  /* Console will output 5, 4, 3, 2, 1 and
  the variable array now contains the set [5, 4, 3, 2, 1] */
```
Source : <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse' target='_blank' rel='nofollow'>MDN</a>
