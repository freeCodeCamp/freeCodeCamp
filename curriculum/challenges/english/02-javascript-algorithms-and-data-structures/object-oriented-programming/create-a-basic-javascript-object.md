---
id: 587d7dac367417b2b2512b73
title: Create a Basic JavaScript Object
challengeType: 1
forumTopicId: 301317
dashedName: create-a-basic-javascript-object
---

# --description--

Think about things people see every day, like cars, shops, and birds. These are all <dfn>objects</dfn>: tangible things people can observe and interact with.

What are some qualities of these objects? A car has wheels. Shops sell items. Birds have wings.

These qualities, or <dfn>properties</dfn>, define what makes up an object. Note that similar objects share the same properties, but may have different values for those properties. For example, all cars have wheels, but not all cars have the same number of wheels.

Objects in JavaScript are used to model real-world objects, giving them properties and behavior just like their real-world counterparts. Here's an example using these concepts to create a `duck` object:

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
```

This `duck` object has two property/value pairs: a `name` of `Aflac` and a `numLegs` of 2.

# --instructions--

Create a `dog` object with `name` and `numLegs` properties, and set them to a string and a number, respectively.

# --hints--

`dog` should be an object.

```js
assert(typeof dog === 'object');
```

`dog` should have a `name` property set to a string.

```js
assert(typeof dog.name === 'string');
```

`dog` should have a `numLegs` property set to a number.

```js
assert(typeof dog.numLegs === 'number');
```

# --seed--

## --seed-contents--

```js
let dog = {

};
```

# --solutions--

```js
let dog = {
  name: '',
  numLegs: 4
};
```
