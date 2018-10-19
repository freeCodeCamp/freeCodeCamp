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

## Const

Const is used to assign a constant value to the variable. And the value cannot be changed. It's fixed. "It is also like let has a scope(i.e, only accessible in the block level it is defined.)"
```
const a = 50;
a = 60; // shows error. You cannot change the value of const.
const b = "Constant variable";
b = "Assigning new value"; // shows error.
```
"Consider this second example
```
const a = 15;
const b = 20;
if (true) {
	const a = 20;
	const c = 4;
	console.log(a/c); //5
	console.log(b/c); //5
}

console.log(a); // 15
console.log(c); // shows c is not defined
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
