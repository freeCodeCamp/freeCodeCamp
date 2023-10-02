---
id: 587d7dac367417b2b2512b74
title: Use Dot Notation to Access the Properties of an Object
challengeType: 1
forumTopicId: 301333
dashedName: use-dot-notation-to-access-the-properties-of-an-object
---

# --description--

The last challenge created an object with various properties. Now you'll see how to access the values of those properties. Here's an example:

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);
```

Dot notation is used on the object name, `duck`, followed by the name of the property, `name`, to access the value of `Aflac`.

# --instructions--

Print both properties of the `dog` object to your console.

# --hints--

Your code should use `console.log` to print the value for the `name` property of the `dog` object.

```js
assert(/console.log\(.*dog\.name.*\)/g.test(code));
```

Your code should use `console.log` to print the value for the `numLegs` property of the `dog` object.

```js
assert(/console.log\(.*dog\.numLegs.*\)/g.test(code));
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4
};
// Only change code below this line
```

# --solutions--

```js
let dog = {
  name: "Spot",
  numLegs: 4
};
console.log(dog.name);
console.log(dog.numLegs);
```
