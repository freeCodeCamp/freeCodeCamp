---
id: 587d7db0367417b2b2512b81
title: Understand Where an Object’s Prototype Comes From
challengeType: 1
forumTopicId: 301330
---

## Description

<section id='description'>

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
// returns true
```

</section>

## Instructions

<section id='instructions'>

Use `isPrototypeOf` to check the `prototype` of `beagle`.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: You should show that <code>Dog.prototype</code> is the <code>prototype</code> of <code>beagle</code>
    testString: assert(/Dog\.prototype\.isPrototypeOf\(beagle\)/.test(code));

```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line


```

</div>

</section>

## Solution

<section id='solution'>

```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
```

</section>
