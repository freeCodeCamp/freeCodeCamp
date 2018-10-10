---
id: 587d7db2367417b2b2512b89
title: Use a Mixin to Add Common Behavior Between Unrelated Objects
challengeType: 1
videoUrl: ''
localeTitle: Использование Mixin для добавления общего поведения между несвязанными объектами
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш код должен объявить переменную <code>glideMixin</code> которая является функцией.
    testString: 'assert(typeof glideMixin === "function", "Your code should declare a <code>glideMixin</code> variable that is a function.");'
  - text: ''
    testString: 'assert(typeof bird.glide === "function", "Your code should use the <code>glideMixin</code> on the <code>bird</code> object to give it the <code>glide</code> method.");'
  - text: Ваш код должен использовать <code>glideMixin</code> на объекте <code>boat</code> чтобы придать ему метод <code>glide</code> .
    testString: 'assert(typeof boat.glide === "function", "Your code should use the <code>glideMixin</code> on the <code>boat</code> object to give it the <code>glide</code> method.");'

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

// Add your code below this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
