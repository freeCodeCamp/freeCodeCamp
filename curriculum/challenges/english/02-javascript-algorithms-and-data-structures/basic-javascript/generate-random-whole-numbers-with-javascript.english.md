---
id: cf1111c1c12feddfaeb1bdef
title: Generate Random Whole Numbers with JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6bfr'
forumTopicId: 18186
---

## Description
<section id='description'>
It's great that we can generate random decimal numbers, but it's even more useful if we use it to generate random whole numbers.
<ol><li>Use <code>Math.random()</code> to generate a random decimal.</li><li>Multiply that random decimal by <code>20</code>.</li><li>Use another function, <code>Math.floor()</code> to round the number down to its nearest whole number.</li></ol>
Remember that <code>Math.random()</code> can never quite return a <code>1</code> and, because we're rounding down, it's impossible to actually get <code>20</code>. This technique will give us a whole number between <code>0</code> and <code>19</code>.
Putting everything together, this is what our code looks like:
<code>Math.floor(Math.random() * 20);</code>
We are calling <code>Math.random()</code>, multiplying the result by 20, then passing the value to <code>Math.floor()</code> function to round the value down to the nearest whole number.
</section>

## Instructions
<section id='instructions'>
Use this technique to generate and return a random whole number between <code>0</code> and <code>9</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The result of <code>randomWholeNum</code> should be a whole number.
    testString: assert(typeof randomWholeNum() === "number" && (function(){var r = randomWholeNum();return Math.floor(r) === r;})());
  - text: You should use <code>Math.random</code> to generate a random number.
    testString: assert(code.match(/Math.random/g).length >= 1);
  - text: You should have multiplied the result of <code>Math.random</code> by 10 to make it a number that is between zero and nine.
    testString: assert(code.match(/\s*?Math.random\s*?\(\s*?\)\s*?\*\s*?10[\D]\s*?/g) || code.match(/\s*?10\s*?\*\s*?Math.random\s*?\(\s*?\)\s*?/g));
  - text: You should use <code>Math.floor</code> to remove the decimal part of the number.
    testString: assert(code.match(/Math.floor/g).length >= 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function randomWholeNum() {

  // Only change code below this line

  return Math.random();
}
```

</div>


### After Test
<div id='js-teardown'>

```js
(function(){return randomWholeNum();})();
```

</div>

</section>

## Solution
<section id='solution'>


```js
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
```

</section>
