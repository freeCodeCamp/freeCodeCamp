---
title: Array.prototype.push
---

The `push()` method is used to add one or more new elements to the end of an array.
It also returns the new length of the array.

### Syntax
```javascript
arr.push([element1[, ...[, elementN]]])
```

### Parameters

* **elementN** The elements to add to the end of the array.

### Return value

The new length of the array on which the method was called.

## Description

The `push()` method will _push_ elements to the end of an array. It can take zero or more arguments. If no arguments are provided,
it will simply return the current length of the array. If provided one or more arguments, it will add these arguments to the array
in the order in which they are written.

This method also returns the new length of the array after the element(s) are pushed to it.

## Example:

```javascript
var myStarkFamily = ['John', 'Robb', 'Sansa', 'Bran'];
```

Suppose you have an array of the children of House Stark from Game of Thrones. However, one of the members, **Arya**, is missing.
Knowing the code above, you could add her by assigning `'Arya'` to the array at the index after the last index like so:

```javascript
myStarkFamily[4] = 'Arya';
```

The problem with this solution is that it can't handle general cases. If you didn't know beforehand what the length of the array is,
you can't add new elements this way. This is what `push()` is for. We don't need to know how long the array is. We just add
our element to the end of the array.

```javascript
myStarkFamily.push('Arya');
console.log(myStarkFamily);  // ['John', 'Robb', 'Sansa', 'Bran', 'Arya']

var newLength = myStarkFamily.push('Rickon');  // oops! forgot Rickon
console.log(newLength);  // 6
console.log(myStarkFamily);  // ['John', 'Robb', 'Sansa', 'Bran', 'Arya', 'Rickon']
```

#### More Information:
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
