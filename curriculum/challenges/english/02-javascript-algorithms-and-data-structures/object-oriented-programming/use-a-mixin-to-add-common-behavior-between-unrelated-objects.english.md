---
id: 587d7db2367417b2b2512b89
title: Use a Mixin to Add Common Behavior Between Unrelated Objects
challengeType: 1
forumTopicId: 301331
---

## Description
<section id='description'>
As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not the best solution. Inheritance does not work well for unrelated objects like <code>Bird</code> and <code>Airplane</code>. They can both fly, but a <code>Bird</code> is not a type of <code>Airplane</code> and vice versa.
For unrelated objects, it's better to use <dfn>mixins</dfn>. A mixin allows other objects to use a collection of functions.

```js
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
```

The <code>flyMixin</code> takes any object and gives it the <code>fly</code> method.

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);
```

Here <code>bird</code> and <code>plane</code> are passed into <code>flyMixin</code>, which then assigns the <code>fly</code> function to each object. Now <code>bird</code> and <code>plane</code> can both fly:

```js
bird.fly(); // prints "Flying, wooosh!"
plane.fly(); // prints "Flying, wooosh!"
```

Note how the mixin allows for the same <code>fly</code> method to be reused by unrelated objects <code>bird</code> and <code>plane</code>.
</section>

## Instructions
<section id='instructions'>
Create a mixin named <code>glideMixin</code> that defines a method named <code>glide</code>. Then use the <code>glideMixin</code> to give both <code>bird</code> and <code>boat</code> the ability to glide.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should declare a <code>glideMixin</code> variable that is a function.
    testString: assert(typeof glideMixin === "function");
  - text: Your code should use the <code>glideMixin</code> on the <code>bird</code> object to give it the <code>glide</code> method.
    testString: assert(typeof bird.glide === "function");
  - text: Your code should use the <code>glideMixin</code> on the <code>boat</code> object to give it the <code>glide</code> method.
    testString: assert(typeof boat.glide === "function");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line






```

</div>



</section>

## Solution
<section id='solution'>


```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};
function glideMixin (obj) {
  obj.glide = () => 'Gliding!';
}

glideMixin(bird);
glideMixin(boat);
```

</section>
