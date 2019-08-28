---
title: Abundant, deficient and perfect number classifications
id: 594810f028c0303b75339acd
challengeType: 5
forumTopicId: 302221
localeTitle: Обильные, неполные и совершенные классификации номеров
---

## Description
<section id='description'>
<p> Они определяют три классификации положительных целых чисел на основе их <a href="http://rosettacode.org/wiki/Proper divisors" title="Собственные делители">правильных делителей</a> . </p><p> Пусть $ P (n) $ - сумма собственных делителей n, где собственные делители - все натуральные n, отличные от n. </p><p> Если <code>P(n) &lt; n</code> то n классифицируется как «несовершенный», </p><p> Если <code>P(n) === n</code> то n классифицируется как &quot;совершенный&quot; </p><p> Если <code>P(n) &gt; n</code> то n классифицируется как &quot;обильное&quot; </p><p> Пример: </p><p> 6 имеет собственные делители 1, 2 и 3. </p><p> 1 + 2 + 3 = 6, поэтому 6 классифицируется как совершенное число. </p><p> Внедрите функцию, которая вычисляет, сколько целых чисел от 1 до 20 000 (включительно) находятся в каждом из трех классов. Выведите результат как массив в следующем формате <code>[deficient, perfect, abundant]</code> . </p>
</section>

## Instructions
<section id='instructions'>
Implement a function that calculates how many of the integers from <code>1</code> to <code>20,000</code> (inclusive) are in each of the three classes. Output the result as an array in the following format <code>[deficient, perfect, abundant]</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getDPA</code> is a function.
    testString: assert(typeof getDPA === 'function');
  - text: <code>getDPA</code> should return an array.
    testString: assert(Array.isArray(getDPA(100)));
  - text: <code>getDPA</code> return value should have a length of 3.
    testString: assert(getDPA(100).length === 3);
  - text: <code>getDPA(20000)</code> should equal [15043, 4, 4953]
    testString: assert.deepEqual(getDPA(20000), solution);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getDPA(num) {
  // Good luck!
}

```

</div>

### After Tests
<div id='js-teardown'>

```js
const solution = [15043, 4, 4953];

```

</div>

</section>

## Solution
<section id='solution'>

```js
function getDPA(num) {
  const dpa = [1, 0, 0];
  for (let n = 2; n <= num; n += 1) {
    let ds = 1;
    const e = Math.sqrt(n);
    for (let d = 2; d < e; d += 1) {
      if (n % d === 0) {
        ds += d + (n / d);
      }
    }
    if (n % e === 0) {
      ds += e;
    }
    dpa[ds < n ? 0 : ds === n ? 1 : 2] += 1;
  }
  return dpa;
}
```

</section>
