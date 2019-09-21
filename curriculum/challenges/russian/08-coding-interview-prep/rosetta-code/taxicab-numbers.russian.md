---
title: Taxicab numbers
id: 594ecc0d9a8cf816e3340187
challengeType: 5
forumTopicId: 302337
localeTitle: Номера такси
---

## Description
<section id='description'>
Номер <a href="https://en.wikipedia.org/wiki/Hardy–Ramanujan number" title="wp: номер Харди-Рамануджана">такси</a> (определение, которое используется здесь) является положительным целым числом, которое может быть выражено как сумма двух положительных кубов более чем одним способом. Первый номер такси составляет 1729, что составляет: 1 <sup>3</sup> + 12 <sup>3</sup> и 9 <sup>3</sup> + 10 <sup>3</sup> . Номера такси также известны как: * номера такси * номера такси-такси * номера такси * номера Hardy-Ramanujan Задача: Напишите функцию, которая возвращает самые низкие номера такси. Для каждого номера такси, укажите номер, а также его составные кубы. См. Также: [http://oeis.org/A001235 A001235 номера такси) в онлайновой энциклопедии целочисленных последовательностей. <a href="http://mathworld.wolfram.com/Hardy-RamanujanNumber.html">Харди-Рамануджан</a> на MathWorld. <a href="http://mathworld.wolfram.com/TaxicabNumber.html">номер такси</a> для MathWorld. <a href="https://en.wikipedia.org/wiki/Taxicab_number">номер такси</a> в Википедии.
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
  - text: <code>taxicabNumbers</code> is a function.
    testString: assert(typeof taxicabNumbers === 'function');
  - text: <code>taxicabNumbers</code> should return an array.
    testString: assert(typeof taxicabNumbers(2) === 'object');
  - text: <code>taxicabNumbers</code> should return an array of numbers.
    testString: assert(typeof taxicabNumbers(100)[0] === 'number');
  - text: <code>taxicabNumbers(4)</code> must return [1729, 4104, 13832, 20683].
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

### After Tests
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
