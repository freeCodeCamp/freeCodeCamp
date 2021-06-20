---
id: 587d7dad367417b2b2512b77
title: Define a Constructor Function
challengeType: 1
forumTopicId: 16804
dashedName: define-a-constructor-function
---

# --description--

<dfn>Constructors</dfn> are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.

Here is an example of a constructor:

```js
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
```

This constructor defines a `Bird` object with properties `name`, `color`, and `numLegs` set to Albert, blue, and 2, respectively. Constructors follow a few conventions:

<ul><li>Constructors are defined with a capitalized name to distinguish them from other functions that are not <code>constructors</code>.</li><li>Constructors use the keyword <code>this</code> to set properties of the object they will create. Inside the constructor, <code>this</code> refers to the new object it will create.</li><li>Constructors define properties and behaviors instead of returning a value as other functions might.</li></ul>

# --instructions--

Create a constructor, `Dog`, with properties `name`, `color`, and `numLegs` that are set to a string, a string, and a number, respectively.

# --hints--

`Dog` should have a `name` property set to a string.

```js
assert(typeof new Dog().name === 'string');
```

`Dog` should have a `color` property set to a string.

```js
assert(typeof new Dog().color === 'string');
```

`Dog` should have a `numLegs` property set to a number.

```js
assert(typeof new Dog().numLegs === 'number');
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function Dog (name, color, numLegs) {
  this.name = 'name';
  this.color = 'color';
  this.numLegs = 4;
}
```
