---
id: 587d7db0367417b2b2512b81
title: Understand Where an Object’s Prototype Comes From
challengeType: 1
forumTopicId: 301330
dashedName: understand-where-an-objects-prototype-comes-from
---

# --description--

Just like people inherit genes from their parents, an object inherits its `prototype` directly from the constructor function that created it. For example, here the `Bird` constructor creates the `duck` object:

```js
function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
```

`duck` inherits its `prototype` from the `Bird` constructor function. You can show this relationship with the `isPrototypeOf` method:

```js
Bird.prototype.isPrototypeOf(duck);
```

This would return `true`.

# --instructions--

Use `isPrototypeOf` to check the `prototype` of `beagle`.

# --hints--

You should show that `Dog.prototype` is the `prototype` of `beagle`

```js
assert(/Dog\.prototype\.isPrototypeOf\(beagle\)/.test(__helpers.removeJSComments(code)));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
```
