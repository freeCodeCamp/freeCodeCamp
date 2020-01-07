---
id: 5900f3ba1000cf542c50fecd
challengeType: 5
title: 'Problem 78: Coin partitions'
forumTopicId: 302191
---

## Description
<section id='description'>

Let p(n) represent the number of different ways in which n coins can be separated into piles. For example, five coins can be separated into piles in exactly seven different ways, so p(5)=7.

<div style='text-align: center;'>
<<<<<<< HEAD

  |Coin piles|
  |--- |
  |OOOOO|
  |OOOO   O|
  |OOO   OO|
  |OOO   O   O|
  |OO   OO   O|
  |OO   O   O   O|
  |O   O   O   O   O|

=======
  <table cellpadding='10'><tbody><tr><td>OOOOO</td></tr><tr><td>OOOO&nbsp; &nbsp;O</td></tr><tr><td>OOO&nbsp; &nbsp;OO</td></tr><tr><td>OOO&nbsp; &nbsp;O&nbsp; &nbsp;O</td></tr><tr><td>OO&nbsp; &nbsp;OO&nbsp; &nbsp;O</td></tr><tr><td>OO&nbsp; &nbsp;O&nbsp; &nbsp;O&nbsp; &nbsp;O</td></tr><tr><td>O&nbsp; &nbsp;O&nbsp; &nbsp;O&nbsp; &nbsp;O&nbsp; &nbsp;O</td></tr></tbody></table>
>>>>>>> fix: continue fixing test descriptions and adding "before test" sections
</div>

Find the least value of <var>n</var> for which p(<var>n</var>) is divisible by one million.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>coinPartitions()</code> should return a number.
    testString: assert(typeof coinPartitions() === 'number');
  - text: <code>coinPartitions()</code> should return 55374.
    testString: assert.strictEqual(coinPartitions(), 55374);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function coinPartitions() {
  // Good luck!
  return true;
}

coinPartitions();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
