---
title: Array Destructuring
---

# Array Destructuring

Destructuring is a convenient way of extracting multiple values from data stored in Arrays. It can be used in locations that receive data (such as the left-hand side of an assignment). This feature is introduced in `ECMAScript 6`.

How to extract the values is specified via patterns (read on for examples).

### Basic variable assignment

```
var names = ['neel', 'meet', 'darshan'];
var [nameOne, nameTwo, nameThree] = names;
console.log(nameOne); // "neel"
console.log(nameTwo); // "meet"
console.log(nameThree); // "darshan"
```

### Assignment separate from declaration
A variable can be assigned its value via destructuring separate from the variable's declaration.

```
var a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```

### Default values
A variable can be assigned a default, in the case that the value unpacked from the array is `undefined`.

```
var a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7
```

### Parsing an array returned from a function
It's always been possible to return an array from a function. Destructuring can make working with an array return value more concise.

In this example, `getNames()` returns the values `['neel', 'meet']` as its output, which can be parsed in a single line with destructuring.


```
function getNames() {
  return ['neel', 'meet'];
}

var neel, meet; 
[nameOne, nameTwo] = getNames(); 
console.log(nameOne); // neel
console.log(nameTwo); // meet
```

### Ignoring some returned values
You can ignore return values that you're not interested in:

```
function getNames() {
  return ['neel', 'meet', 'darshan'];
}

var [nameOne, , nameThree] = getNames();
console.log(nameOne); // neel
console.log(nameThree); // darshan
```

You can also ignore all returned values:
```
[,,] = getNames();
```

### Assigning the rest of an array to a variable
When destructuring an array, you can unpack and assign the remaining part of it to a variable using the rest pattern:

```
var [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]
```

Note that a `SyntaxError` will be thrown if a trailing comma is used on the left-hand side with a rest element:

```
var [a, ...b,] = [1, 2, 3];
// SyntaxError: rest element may not have a trailing comma
```

See also: <a>**Array Destructuring**</a> | <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring' target='_blank' rel='nofollow'>MDN</a>
