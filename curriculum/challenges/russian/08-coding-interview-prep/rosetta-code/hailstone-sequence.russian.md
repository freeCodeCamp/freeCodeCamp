---
title: Hailstone sequence
id: 595608ff8bcd7a50bd490181
challengeType: 5
forumTopicId: 302279
localeTitle: Последовательность градиента
---

## Description
<section id='description'>
<p> Последовательность чисел Hailstone может быть сгенерирована из начального положительного целого числа, n: </p> Если n равно 1, последовательность заканчивается. Если n четно, то следующее n последовательности <code>= n/2</code> Если n нечетно, то следующее n последовательности <code>= (3 * n) + 1</code> <p> (Неподтвержденная) <a href="https://en.wikipedia.org/wiki/Collatz conjecture" title="wp: гипотеза Collatz">гипотеза Collatz</a> заключается в том, что последовательность градиентов для любого начального числа всегда заканчивается. </p><p> Последовательность градиента также известна как номера градиента (поскольку значения обычно подвержены нескольким спуску и восхождениям, таким как град в облаке) или как последовательность Collatz. </p> Задача: создать процедуру для генерации последовательности градиента для числа. Используйте процедуру, чтобы показать, что последовательность градиента для числа 27 содержит 112 элементов, начиная с <code>27, 82, 41, 124</code> и заканчивая <code>8, 4, 2, 1</code> Покажите число менее 100 000, которое имеет самую длинную последовательность градиента вместе с этим длина последовательности. (Но не показывайте действительную последовательность!) См. Также: <a href="http://xkcd.com/710" title="ссылка: http://xkcd.com/710">xkcd</a> (humourous).
</section>

## Instructions
<section id='instructions'>
<ol>
  <li>Create a routine to generate the hailstone sequence for a number</li>
  <li>Use the routine to show that the hailstone sequence for the number 27 has 112 elements starting with <code>27, 82, 41, 124</code> and ending with <code>8, 4, 2, 1</code></li>
  <li>Show the number less than 100,000 which has the longest hailstone sequence together with that sequence's length. (But don't show the actual sequence!)</li>
</ol>
<strong>See also:</strong>
<ul>
  <li><a href="https://xkcd.com/710" target="_blank">xkcd</a> (humourous).</li>
</ul>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>hailstoneSequence</code> is a function.
    testString: assert(typeof hailstoneSequence === 'function');
  - text: <code>hailstoneSequence()</code> should return <code>[[27,82,41,124,8,4,2,1], [351, 77031]]</code>
    testString: assert.deepEqual(hailstoneSequence(), res);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// noprotect
function hailstoneSequence() {
  const res = [];
  // Good luck!

  return res;
}

```

</div>

### After Tests
<div id='js-teardown'>

```js
const res = [[27, 82, 41, 124, 8, 4, 2, 1], [351, 77031]];

```

</div>

</section>

## Solution
<section id='solution'>

```js
// noprotect
function hailstoneSequence () {
  const res = [];

  function hailstone(n) {
    const seq = [n];
    while (n > 1) {
      n = n % 2 ? 3 * n + 1 : n / 2;
      seq.push(n);
    }
    return seq;
  }

  const h = hailstone(27);
  const hLen = h.length;
  res.push([...h.slice(0, 4), ...h.slice(hLen - 4, hLen)]);

  let n = 0;
  let max = 0;
  for (let i = 100000; --i;) {
    const seq = hailstone(i);
    const sLen = seq.length;

    if (sLen > max) {
      n = i;
      max = sLen;
    }
  }
  res.push([max, n]);

  return res;
}
```

</section>
