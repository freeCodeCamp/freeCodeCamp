---
id: 587d7db2367417b2b2512b8a
title: Use Closure to Protect Properties Within an Object from Being Modified Externally
challengeType: 1
forumTopicId: 18234
---

## Description

<section id='description'>

In the previous challenge, `bird` had a public property `name`. It is considered public because it can be accessed and changed outside of `bird`'s definition.

```js
bird.name = "Duffy";
```

Therefore, any part of your code can easily change the name of `bird` to any value. Think about things like passwords and bank accounts being easily changeable by any part of your codebase. That could cause a lot of issues.

The simplest way to make this public property private is by creating a variable within the constructor function. This changes the scope of that variable to be within the constructor function versus available globally. This way, the variable can only be accessed and changed by methods also within the constructor function.

```js
function Bird() {
  let hatchedEgg = 10; // private variable

  /* publicly available method that a bird object can use */
  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount(); // returns 10
```

Here `getHatchedEggCount` is a privileged method, because it has access to the private variable `hatchedEgg`. This is possible because `hatchedEgg` is declared in the same context as `getHatchedEggCount`. In JavaScript, a function always has access to the context in which it was created. This is called `closure`.

</section>

## Instructions

<section id='instructions'>

Change how `weight` is declared in the `Bird` function so it is a private variable. Then, create a method `getWeight` that returns the value of `weight` 15.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: The <code>weight</code> property should be a private variable and should be assigned the value of <code>15</code>.
    testString: assert(code.match(/(var|let|const)\s+weight\s*\=\s*15\;?/g));
  - text: Your code should create a method in <code>Bird</code> called <code>getWeight</code> that returns the value of the private variable <code>weight</code>.
    testString: assert((new Bird()).getWeight() === 15);
  - text: Your <code>getWeight</code> function should return the private variable <code>weight</code>.
    testString: assert(code.match(/((return\s+)|(\(\s*\)\s*\=\>\s*))weight\;?/g));

```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function Bird() {
  this.weight = 15;


}

```

</div>

</section>

## Solution

<section id='solution'>

```js
function Bird() {
  let weight = 15;

  this.getWeight = () => weight;
}
```

</section>
