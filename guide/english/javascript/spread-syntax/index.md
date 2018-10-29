---
title: Spread syntax
---

## Spread syntax
Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero are expected.

### Syntax
For function calls:
```
myFunction(...iterableObj);
```
For array literals or strings:
```
[...iterableObj, '4', 'five', 6];
```
### Examples

#### Spread in function calls
#### Replace apply

It is common to use `Function.prototype.apply` in cases where you want to use the elements of an array as arguments to a function.

```
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction.apply(null, args);
```

With spread syntax the above can be written as:

```
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction(...args);
```

Any argument in the argument list can use spread syntax and it can be used multiple times.

```
function myFunction(v, w, x, y, z) { }
var args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
```

### Apply for new

When calling a constructor with `new`, it's not possible to **directly** use an array and `apply` (`apply` does a `[[Call]]` and not a `[[Construct]]`). However, an array can be easily used with new thanks to spread syntax:

```
var dateFields = [1970, 0, 1];  // 1 Jan 1970
var d = new Date(...dateFields);
```

To use new with an array of parameters without spread syntax, you would have to do it **indirectly** through partial application:

```
function applyAndNew(constructor, args) {
   function partial () {
      return constructor.apply(this, args);
   };
   if (typeof constructor.prototype === "object") {
      partial.prototype = Object.create(constructor.prototype);
   }
   return partial;
}


function myConstructor () {
   console.log("arguments.length: " + arguments.length);
   console.log(arguments);
   this.prop1="val1";
   this.prop2="val2";
};

var myArguments = ["hi", "how", "are", "you", "mr", null];
var myConstructorWithArguments = applyAndNew(myConstructor, myArguments);

console.log(new myConstructorWithArguments);
// (internal log of myConstructor):           arguments.length: 6
// (internal log of myConstructor):           ["hi", "how", "are", "you", "mr", null]
// (log of "new myConstructorWithArguments"): {prop1: "val1", prop2: "val2"}
```

### Spread in array literals
#### A more powerful array literal
Without spread syntax, to create a new array using an existing array as one part of it, the array literal syntax is no longer sufficient and imperative code must be used instead using a combination of push, splice, concat, etc. With spread syntax this becomes much more succinct:

```
var parts = ['shoulders', 'knees']; 
var lyrics = ['head', ...parts, 'and', 'toes']; 
// ["head", "shoulders", "knees", "and", "toes"]
```

Just like spread for argument lists, `...` can be used anywhere in the array literal and it can be used multiple times.

### Copy an array
```
var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4); 

// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected
```

> **Note**: Spread syntax effectively goes one level deep while copying an array. Therefore, it may be unsuitable for copying multidimensional arrays as the following example shows (it's the same with Object.assign() and spread syntax).

```
var a = [[1], [2], [3]];
var b = [...a];
b.shift().shift(); // 1
// Now array a is affected as well: [[], [2], [3]]
```

### A better way to concatenate arrays

`Array.concat` is often used to concatenate an array to the end of an existing array. Without spread syntax this is done as:

```
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);
```

With spread syntax this becomes:

```
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];
```

`Array.unshift` is often used to insert an array of values at the start of an existing array.  Without spread syntax this is done as:

```
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// Prepend all items from arr2 onto arr1
Array.prototype.unshift.apply(arr1, arr2) // arr1 is now [3, 4, 5, 0, 1, 2]
```

With spread syntax this becomes:

```
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr2, ...arr1]; // arr1 is now [3, 4, 5, 0, 1, 2]
```
