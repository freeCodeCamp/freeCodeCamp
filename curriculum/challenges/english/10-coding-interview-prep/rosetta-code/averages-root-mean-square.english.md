---
title: Averages/Root mean square
id: 594da033de4190850b893874
challengeType: 5
isHidden: false
forumTopicId: 302228
---

## Description
<section id='description'>
Compute the  <a href="https://en.wikipedia.org/wiki/Root mean square" title="wp: Root mean square" target='_blank'>Root mean square</a>  of the numbers 1 through 10 inclusive.
The <i>root mean square</i> is also known by its initials RMS (or rms), and as the <strong>quadratic mean</strong>.
The RMS is calculated as the mean of the squares of the numbers, square-rooted:
<big>$$x_{\mathrm{rms}} = \sqrt {{{x_1}^2 + {x_2}^2 + \cdots + {x_n}^2} \over n}. $$</big>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>rms</code> should be a function.
    testString: assert(typeof rms === 'function');
  - text: <code>rms([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])</code> should equal <code>6.2048368229954285</code>.
    testString: assert.equal(rms(arr1), answer1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function rms(arr) {
  // Good luck!
}
```

</div>


### After Test
<div id='js-teardown'>

```js
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const answer1 = 6.2048368229954285;
```

</div>

</section>

## Solution
<section id='solution'>


```js
function rms(arr) {
  const sumOfSquares = arr.reduce((s, x) => s + x * x, 0);
  return Math.sqrt(sumOfSquares / arr.length);
}

```

</section>
