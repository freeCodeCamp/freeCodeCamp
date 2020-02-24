---
title: Taxicab numbers
id: 594ecc0d9a8cf816e3340187
challengeType: 5
isHidden: false
forumTopicId: 302337
---

## Description
<section id='description'>
A &nbsp; <a href="https://en.wikipedia.org/wiki/Hardy–Ramanujan number" title="wp: Hardy–Ramanujan number" target="_blank">taxicab number</a> (the definition that is being used here) is a positive integer that can be expressed as the sum of two positive cubes in more than one way.
The first taxicab number is <code>1729</code>, which is:
<span style="margin-left: 2em;">1<sup>3</sup> &nbsp; + &nbsp; 12<sup>3</sup> &nbsp; &nbsp; &nbsp; and</span>
<span style="margin-left: 2em;">9<sup>3</sup> &nbsp; + &nbsp; 10<sup>3</sup>.</span>
Taxicab numbers are also known as:
<ul>
  <li>taxi numbers</li>
  <li>taxi-cab numbers</li>
  <li>taxi cab numbers</li>
  <li>Hardy-Ramanujan numbers</li>
</ul>
</section>

## Instructions
<section id='instructions'>
Write a function that returns the lowest <code>n</code> taxicab numbers. For each of the taxicab numbers, show the number as well as its constituent cubes.
<strong>See also:</strong>
<ul>
  <li><a href="https://oeis.org/A001235" target="_blank">A001235 taxicab numbers</a> on The On-Line Encyclopedia of Integer Sequences.</li>
  <li><a href="https://en.wikipedia.org/wiki/Taxicab_number" target="_blank">taxicab number</a> on Wikipedia.</li>
</ul>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>taxicabNumbers</code> should be a function.
    testString: assert(typeof taxicabNumbers === 'function');
  - text: <code>taxicabNumbers</code> should return an array.
    testString: assert(typeof taxicabNumbers(2) === 'object');
  - text: <code>taxicabNumbers</code> should return an array of numbers.
    testString: assert(typeof taxicabNumbers(100)[0] === 'number');
  - text: <code>taxicabNumbers(4)</code> should return [1729, 4104, 13832, 20683].
    testString: assert.deepEqual(taxicabNumbers(4), res4);
  - text: <code>taxicabNumbers(25)</code> should return [1729, 4104, 13832, 20683, 32832, 39312, 40033, 46683, 64232, 65728, 110656, 110808, 134379, 149389, 165464, 171288, 195841, 216027, 216125, 262656, 314496, 320264, 327763, 373464, 402597]
    testString: assert.deepEqual(taxicabNumbers(25), res25);
  - text: <code>taxicabNumbers(39)</code> resulting numbers from 20 - 29 should be [314496,320264,327763,373464,402597,439101,443889,513000,513856].
    testString: assert.deepEqual(taxicabNumbers(39).slice(20, 29), res39From20To29);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function taxicabNumbers(n) {
  // Good luck!
  return true;
}
```

</div>


### After Test
<div id='js-teardown'>

```js
const res4 = [1729, 4104, 13832, 20683];
const res25 = [
  1729, 4104, 13832, 20683, 32832, 39312, 40033, 46683, 64232, 65728, 110656,
  110808, 134379, 149389, 165464, 171288, 195841, 216027, 216125, 262656, 314496, 320264, 327763,
  373464, 402597
];

const res39From20To29 = [314496, 320264, 327763, 373464, 402597, 439101, 443889, 513000, 513856];
```

</div>

</section>

## Solution
<section id='solution'>


```js
function taxicabNumbers(nNumbers) {
  const cubeN = [];
  const s3s = {};

  const e = 100;
  for (let n = 1; n < e; n += 1) {
    cubeN[n] = n * n * n;
  }

  for (let a = 1; a < e - 1; a += 1) {
    const a3 = cubeN[a];
    for (let b = a; b < e; b += 1) {
      const b3 = cubeN[b];
      const s3 = a3 + b3;

      let abs = s3s[s3];
      if (!abs) {
        s3s[s3] = abs = [];
      }
      abs.push([a, b]);
    }
  }

  let i = 0;
  const res = [];
  Object.keys(s3s).forEach(s3 => {
    const abs = s3s[s3];
    if (abs.length >= 2) { // No two cube pairs found
      i += 1;
      if (i <= nNumbers) {
        res.push(s3);
      }
    }
  });
  return res.map(item => parseInt(item, 10));
}

```

</section>
