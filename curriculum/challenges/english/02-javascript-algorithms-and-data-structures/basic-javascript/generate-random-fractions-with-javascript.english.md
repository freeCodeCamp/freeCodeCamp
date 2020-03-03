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
JavaScript has a <code>Math.random()</code> function that generates a random decimal number between <code>0</code> (inclusive) and not quite up to <code>1</code> (exclusive). Thus <code>Math.random()</code> can return a <code>0</code> but never quite return a <code>1</code>
<strong>Note</strong><br>Like <a href='/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator' target='_blank'>Storing Values with the Equal Operator</a>, all function calls will be resolved before the <code>return</code> executes, so we can <code>return</code> the value of the <code>Math.random()</code> function.
</section>

## Instructions
<section id='instructions'>
Change <code>randomFraction</code> to return a random number instead of returning <code>0</code>.
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
