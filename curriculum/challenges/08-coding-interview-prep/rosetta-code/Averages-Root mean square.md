---
title: Averages-Root mean square
id: 594da033de4190850b893874
challengeType: 5
---

## Description
<section id='description'>
<p>Compute the  <a href="https://en.wikipedia.org/wiki/Root mean square" title="wp: Root mean square">Root mean square</a>  of the numbers 1 through 10 inclusive.</p>
<p>The  root mean square  is also known by its initials RMS (or rms), and as the quadratic mean.</p><p>The RMS is calculated as the mean of the squares of the numbers, square-rooted:</p>
<p><big>$$x_{\mathrm{rms}} = \sqrt {{{x_1}^2 + {x_2}^2 + \cdots + {x_n}^2} \over n}. $$</big></p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: <code>rms</code> is a function.
  testString: 'assert(typeof rms === "function", "<code>rms</code> is a function.");'
- text: '<code>rms([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])</code> should equal <code>6.2048368229954285</code>.'
  testString: 'assert.equal(rms(arr1), answer1, "<code>rms([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])</code> should equal <code>6.2048368229954285</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function rms (arr) {
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
function rms (arr) {
  const sumOfSquares = arr.reduce((s, x) => s + x * x, 0);
  return Math.sqrt(sumOfSquares / arr.length);
}

```

</section>
