---
id: 587d7dae367417b2b2512b7c
title: Use Prototype Properties to Reduce Duplicate Code
challengeType: 1
forumTopicId: 301336
---

## Description

<section id='description'>

Since `numLegs` will probably have the same value for all instances of `Bird`, you essentially have a duplicated variable `numLegs` inside each `Bird` instance.

This may not be an issue when there are only two instances, but imagine if there are millions of instances. That would be a lot of duplicated variables.

A better way is to use `Bird’s` `prototype`. Properties in the `prototype` are shared among ALL instances of `Bird`. Here's how to add `numLegs` to the `Bird prototype`:

```js
Bird.prototype.numLegs = 2;
```

Now all instances of `Bird` have the `numLegs` property.

```js
console.log(duck.numLegs);  // prints 2
console.log(canary.numLegs);  // prints 2
```

Since all instances automatically have the properties on the `prototype`, think of a `prototype` as a "recipe" for creating objects. Note that the `prototype` for `duck` and `canary` is part of the `Bird` constructor as `Bird.prototype`. Nearly every object in JavaScript has a `prototype` property which is part of the constructor function that created it.

</section>

## Instructions

<section id='instructions'>

Add a `numLegs` property to the `prototype` of `Dog`

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>beagle</code> should have a <code>numLegs</code> property.
    testString: assert(beagle.numLegs !== undefined);
  - text: <code>beagle.numLegs</code> should be a number.
    testString: assert(typeof(beagle.numLegs) === 'number' );
  - text: <code>numLegs</code> should be a <code>prototype</code> property not an <code>own</code> property.
    testString: assert(beagle.hasOwnProperty('numLegs') === false);

```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}



// Only change code above this line
let beagle = new Dog("Snoopy");
```

</div>

</section>

## Solution

<section id='solution'>

```js
function Dog (name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
```

</section>
