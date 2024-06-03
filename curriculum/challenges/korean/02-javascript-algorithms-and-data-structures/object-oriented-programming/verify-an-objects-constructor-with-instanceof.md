---
id: 587d7dae367417b2b2512b7a
title: Verify an Object's Constructor with instanceof
challengeType: 1
forumTopicId: 301337
dashedName: verify-an-objects-constructor-with-instanceof
---

# --description--

Anytime a constructor function creates a new object, that object is said to be an <dfn>instance</dfn> of its constructor. JavaScript gives a convenient way to verify this with the `instanceof` operator. `instanceof` allows you to compare an object to a constructor, returning `true` or `false` based on whether or not that object was created with the constructor. Here's an example:

```js
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;
```

This `instanceof` method would return `true`.

If an object is created without using a constructor, `instanceof` will verify that it is not an instance of that constructor:

```js
let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird;
```

This `instanceof` method would return `false`.

# --instructions--

Create a new instance of the `House` constructor, calling it `myHouse` and passing a number of bedrooms. Then, use `instanceof` to verify that it is an instance of `House`.

# --hints--

`myHouse` should have a `numBedrooms` attribute set to a number.

```js
assert(typeof myHouse.numBedrooms === 'number');
```

You should verify that `myHouse` is an instance of `House` using the `instanceof` operator.

```js
assert(/myHouse\s*instanceof\s*House/.test(__helpers.removeJSComments(code)));
```

# --seed--

## --seed-contents--

```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
```

# --solutions--

```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
const myHouse = new House(4);
console.log(myHouse instanceof House);
```
