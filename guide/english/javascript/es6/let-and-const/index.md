---
title: Let and Const
---

## Let

let is similar to var but let has scope. let is only accessible in the block level it is defined.
```
if (true) {
 let a = 40;
 console.log(a); //40
}
console.log(a); // undefined
```

In the above example variable ‘a’ is defined inside an If statement and so it’s not accessible outside of the function.

Another example:
```
let a = 50;
let b = 100;
if (true) {
 let a = 60;
 var c = 10;
 console.log(a/c); // 6
 console.log(b/c); // 10
}
console.log(c); // 10
console.log(a); // 50
```

### Differences with `var`

Hoisting - `let` variables are not initialized until their definition is evaluated:

```js
function action() {
  console.log(a); // undefined
  console.log(b); // ReferenceError
  var a = 1;
  let b = 2;
}
```

## Const

Const is used to assign a constant value to the variable, and the value cannot be changed. It is fixed. 
```
const a = 50;
a = 60; // shows error. You cannot change the value of const.
const b = "Constant variable";
b = "Assigning new value"; // shows error.
```
Like `let`, `const` is also block scoped, i.e, only accessible in the block it is defined in.

Consider this second example.

```
const a = 15;
const b = 20;
if (true) {
	const a = 20;
	const c = 4;
	console.log(a/c); // 5 Here, a is the block variable which has the value 20
	console.log(b/c); // 5 Here, b is the outer variable with value 20
}

console.log(a); // 15
console.log(c); // ReferenceError: c is not defined
```


Consider another example.
```
const LANGUAGES = ['Js', 'Ruby', 'Python', 'Go'];
LANGUAGES = "Javascript"; // shows error.
LANGUAGES.push('Java'); // Works fine.
console.log(LANGUAGES); // ['Js', 'Ruby', 'Python', 'Go', 'Java']
```

This may be little confusing.

Consider in this way. Whenever you define a const variable, Javascript references the address of the value to the variable. In our example the variable ‘LANGUAGES’ actually references to the memory allocated to the array. So you cannot change the variable to reference some other memory location later. Throughout the program it only references to the array.
