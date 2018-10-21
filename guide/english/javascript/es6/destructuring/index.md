---
title: Destructuring Assignment
---

## Destructuring Assignment

Destructuring Assignment syntax is a Javascript expression that makes it possible to unpack values or properties from arrays or objects.

Lets say that you have an array that contains a first name and last name as its two values, but you want to reassign those values to something more descriptive. You can use Destructuring to accomplish this.

**ES5 Destructuring**

```js
var fullName = ["John", "Smith"];
var firstName = fullName[0];
var lastName = fullName[1];

console.log(firstName, lastName); // John Smith

```

**ES6 Destructuring**


```js
const fullName = ["John", "Smith"];
const [firstName, lastName] = fullName;

console.log(firstName, lastName); // John Smith

```

The examples above show the benefit of using the ES6 Destructuring Assignment.

You can also use Destructuring on objects using a similar syntax

```js
const fullName = { first: "John", last: "Smith"};
const {first, last} = fullName;

console.log(first, last); // John Smith
```

Object Destructuring Assignment is a little bit different because the object must have properties with the names you are assigning. Therefore the code below would not work as intended.

```js
const fullName = { first: "John", last: "Smith"};
const {firstName, lastName} = fullName;

console.log(firstName, lastName); // undefined undefined
```

You can still achieve the desired result using the following syntax.
```js
const obj = {propertyName: value}
const {propertyName: desiredVariableName} = obj
```

Our previous example would be rewritten as follows:
```js
const fullName = { first: "John", last: "Smith"};
const {first: firstName, last: lastName} = fullName;

console.log(firstName, lastName); // John Smith
```
**Array Destructuring with rest**
When destructuring an array, you can unpack and assign the remaining part of it to a variable using the rest pattern:
```js
const [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]
```
