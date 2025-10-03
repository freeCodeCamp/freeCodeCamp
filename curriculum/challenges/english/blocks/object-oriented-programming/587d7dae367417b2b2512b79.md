---
id: 587d7dae367417b2b2512b79
title: Extend Constructors to Receive Arguments
challengeType: 1
forumTopicId: 18235
dashedName: extend-constructors-to-receive-arguments
---

# --description--

The `Bird` and `Dog` constructors from the last challenge worked well. However, notice that all `Birds` that are created with the `Bird` constructor are automatically named Albert, are blue in color, and have two legs. What if you want birds with different values for name and color? It's possible to change the properties of each bird manually but that would be a lot of work:

```js
let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
```

Suppose you were writing a program to keep track of hundreds or even thousands of different birds in an aviary. It would take a lot of time to create all the birds, then change the properties to different values for every one. To more easily create different `Bird` objects, you can design your Bird constructor to accept parameters:

```js
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
```

Then pass in the values as arguments to define each unique bird into the `Bird` constructor: `let cardinal = new Bird("Bruce", "red");` This gives a new instance of `Bird` with `name` and `color` properties set to `Bruce` and `red`, respectively. The `numLegs` property is still set to 2. The `cardinal` has these properties:

```js
cardinal.name
cardinal.color
cardinal.numLegs
```

The constructor is more flexible. It's now possible to define the properties for each `Bird` at the time it is created, which is one way that JavaScript constructors are so useful. They group objects together based on shared characteristics and behavior and define a blueprint that automates their creation.

# --instructions--

Create another `Dog` constructor. This time, set it up to take the parameters `name` and `color`, and have the property `numLegs` fixed at 4. Then create a new `Dog` saved in a variable `terrier`. Pass it two strings as arguments for the `name` and `color` properties.

# --hints--

`Dog` should receive an argument for `name`.

```js
assert(new Dog('Clifford').name === 'Clifford');
```

`Dog` should receive an argument for `color`.

```js
assert(new Dog('Clifford', 'yellow').color === 'yellow');
```

`Dog` should have property `numLegs` set to 4.

```js
assert(new Dog('Clifford').numLegs === 4);
```

`terrier` should be created using the `Dog` constructor.

```js
assert(terrier instanceof Dog);
```

# --seed--

## --seed-contents--

```js
function Dog() {

}
```

# --solutions--

```js
function Dog (name, color) {
  this.numLegs = 4;
  this.name = name;
  this.color = color;
}

const terrier = new Dog();
```
