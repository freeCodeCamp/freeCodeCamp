---
title: Accumulator factory
id: 594810f028c0303b75339ace
challengeType: 5
---

## Description
<section id='description'>
<p>Create a function that takes a single (numeric) argument and returns another function that is an accumulator. The returned accumulator function in turn also takes a single numeric argument, and returns the sum of all the numeric values passed in so far to that accumulator (including the initial value passed when the accumulator was created).</p>
<p>Rules:</p>
<p>Do not use global variables.</p>
<p>Hint:</p>
<p>Closures save outer state.</p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>accumulator</code> is a function.
    testString: 'assert(typeof accumulator === ''function'', ''<code>accumulator</code> is a function.'');'
  - text: <code>accumulator(0)</code> should return a function.
    testString: 'assert(typeof accumulator(0) === ''function'', ''<code>accumulator(0)</code> should return a function.'');'
  - text: <code>accumulator(0)(2)</code> should return a number.
    testString: 'assert(typeof accumulator(0)(2) === ''number'', ''<code>accumulator(0)(2)</code> should return a number.'');'
  - text: 'Passing in the values 3, -4, 1.5, and 5 should return 5.5.'
    testString: 'assert(testFn(5) === 5.5, ''Passing in the values 3, -4, 1.5, and 5 should return 5.5.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function accumulator (sum) {
  // Good luck!
}
```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>


```js
function accumulator (sum) {
  return function (n) {
    return sum += n;
  };
}

```

</section>
