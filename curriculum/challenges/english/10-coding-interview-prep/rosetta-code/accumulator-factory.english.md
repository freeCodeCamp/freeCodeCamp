---
title: Accumulator factory
id: 594810f028c0303b75339ace
challengeType: 5
forumTopicId: 302222
---

## Description
<section id='description'>
A problem posed by <a href='https://en.wikipedia.org/wiki/Paul_Graham_(programmer)' target='_blank'>Paul Graham</a> is that of creating a function that takes a single (numeric) argument and which returns another function that is an accumulator. The returned accumulator function in turn also takes a single numeric argument, and returns the sum of all the numeric values passed in so far to that accumulator (including the initial value passed when the accumulator was created).
</section>

## Instructions
<section id='instructions'>
Create a function that takes a number $n$ and generates accumulator functions that return the sum of every number ever passed to them.
<strong>Rules:</strong>
Do not use global variables.
<strong>Hint:</strong>
Closures save outer state.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>accumulator</code> should be a function.
    testString: assert(typeof accumulator === 'function');
  - text: <code>accumulator(0)</code> should return a function.
    testString: assert(typeof accumulator(0) === 'function');
  - text: <code>accumulator(0)(2)</code> should return a number.
    testString: assert(typeof accumulator(0)(2) === 'number');
  - text: Passing in the values 3, -4, 1.5, and 5 should return 5.5.
    testString: assert(testFn(5) === 5.5);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function accumulator(sum) {

}
```

</div>


### After Test
<div id='js-teardown'>

```js
const testFn = typeof accumulator(3) === 'function' && accumulator(3);
if (testFn) {
  testFn(-4);
  testFn(1.5);
}
```

</div>

</section>

## Solution
<section id='solution'>


```js
function accumulator(sum) {
  return function(n) {
    return sum += n;
  };
}

```

</section>
