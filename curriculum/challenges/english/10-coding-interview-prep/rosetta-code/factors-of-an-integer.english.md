---
title: Factors of an integer
id: 597f1e7fbc206f0e9ba95dc4
challengeType: 5
isHidden: false
forumTopicId: 302265
---

## Description
<section id='description'>
Write a function that returns the factors of a positive integer as an array.
These factors are the positive integers by which the number being factored can be divided to yield a positive integer result.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>factors</code> should be a function.
    testString: assert(typeof factors === 'function');
  - text: <code>factors(45)</code> should return <code>[1,3,5,9,15,45]</code>.
    testString: assert.deepEqual(factors(45), ans[0]);
  - text: <code>factors(53)</code> should return <code>[1,53]</code>.
    testString: assert.deepEqual(factors(53), ans[1]);
  - text: <code>factors(64)</code> should return <code>[1,2,4,8,16,32,64]</code>.
    testString: assert.deepEqual(factors(64), ans[2]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function factors(num) {
  // Good luck!
}
```

</div>


### After Test
<div id='js-teardown'>

```js
const ans=[[1,3,5,9,15,45],[1,53],[1,2,4,8,16,32,64]];
```

</div>

</section>

## Solution
<section id='solution'>


```js
function factors(num)
{
 let n_factors = [], i, sqr=Math.floor(Math.sqrt(num));

 for (i = 1; i <=sqr ; i += 1)
  if (num % i === 0)
  {
   n_factors.push(i);
   if (num / i !== i)
    n_factors.push(num / i);
  }
 n_factors.sort(function(a, b){return a - b;});
 return n_factors;
}

```

</section>
