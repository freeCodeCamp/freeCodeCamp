---
id: 587d7db0367417b2b2512b81
title: Understand Where an Object’s Prototype Comes From
challengeType: 1
forumTopicId: 301330
---

## Description
<section id='description'>
Just like people inherit genes from their parents, an object inherits its <code>prototype</code> directly from the constructor function that created it. For example, here the <code>Bird</code> constructor creates the <code>duck</code> object:

```js
function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
```

<code>duck</code> inherits its <code>prototype</code> from the <code>Bird</code> constructor function. You can show this relationship with the <code>isPrototypeOf</code> method:

```js
Bird.prototype.isPrototypeOf(duck);
// returns true
```

</section>

## Instructions
<section id='instructions'>
Use <code>isPrototypeOf</code> to check the <code>prototype</code> of <code>beagle</code>.
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
