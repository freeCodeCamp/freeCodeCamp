---
id: cf1111c1c11feddfaeb9bdef
title: Generate Random Fractions with JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cyWJJs3'
forumTopicId: 18185
---

## Description

<section id='description'>

Random numbers are useful for creating random behavior.

JavaScript has a `Math.random()` function that generates a random decimal number between `0` (inclusive) and not quite up to `1` (exclusive). Thus `Math.random()` can return a `0` but never quite return a `1`

**Note**  
Like [Storing Values with the Equal Operator](/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator), all function calls will be resolved before the `return` executes, so we can `return` the value of the `Math.random()` function.

</section>

## Instructions

<section id='instructions'>

Change `randomFraction` to return a random number instead of returning `0`.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>randomFraction</code> should return a random number.
    testString: assert(typeof randomFraction() === "number");
  - text: The number returned by <code>randomFraction</code> should be a decimal.
    testString: assert((randomFraction()+''). match(/\./g));
  - text: You should be using <code>Math.random</code> to generate the random decimal number.
    testString: assert(code.match(/Math\.random/g).length >= 0);

```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function randomFraction() {

  // Only change code below this line

  return 0;

  // Only change code above this line
}
```

</div>

### After Test

<div id='js-teardown'>

```js
(function(){return randomFraction();})();
```

</div>

</section>

## Solution

<section id='solution'>

```js
function randomFraction() {
  return Math.random();
}
```

</section>
