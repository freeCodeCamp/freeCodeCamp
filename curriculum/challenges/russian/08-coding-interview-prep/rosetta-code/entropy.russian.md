---
title: Entropy
id: 599d15309e88c813a40baf58
challengeType: 5
forumTopicId: 302254
localeTitle: Энтропия
---

## Description
<section id='description'>
Задача: <p> Вычислите энтропию Шеннона H данной входной строки. </p><p> Учитывая выборочную случайную переменную $ X $, которая представляет собой строку из $ N $ &quot;символов&quot; (всего символов), состоящую из $ n $ различных символов (n = 2 для двоичных), энтропия Шеннона X в битах / символе: </p><p> $ H_2 (X) = - \ sum_ {i = 1} ^ n \ frac {count_i} {N} \ log_2 \ left (\ frac {count_i} {N} \ right) $ </p><p> где $ count_i $ - количество символов $ n_i $. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>entropy</code> is a function.
    testString: assert(typeof entropy === 'function');
  - text: <code>entropy("0")</code> should return <code>0</code>
    testString: assert.equal(entropy('0'), 0);
  - text: <code>entropy("01")</code> should return <code>1</code>
    testString: assert.equal(entropy('01'), 1);
  - text: <code>entropy("0123")</code> should return <code>2</code>
    testString: assert.equal(entropy('0123'), 2);
  - text: <code>entropy("01234567")</code> should return <code>3</code>
    testString: assert.equal(entropy('01234567'), 3);
  - text: <code>entropy("0123456789abcdef")</code> should return <code>4</code>
    testString: assert.equal(entropy('0123456789abcdef'), 4);
  - text: <code>entropy("1223334444")</code> should return <code>1.8464393446710154</code>
    testString: assert.equal(entropy('1223334444'), 1.8464393446710154);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function entropy(s) {
  // Good luck!
}

```

</div>

</section>

## Solution
<section id='solution'>

```js
function entropy(s) {
    // Create a dictionary of character frequencies and iterate over it.
  function process(s, evaluator) {
    let h = Object.create(null),
      k;
    s.split('').forEach(c => {
      h[c] && h[c]++ || (h[c] = 1); });
    if (evaluator) for (k in h) evaluator(k, h[k]);
    return h;
  }
    // Measure the entropy of a string in bits per symbol.

  let sum = 0,
    len = s.length;
  process(s, (k, f) => {
    const p = f / len;
    sum -= p * Math.log(p) / Math.log(2);
  });
  return sum;
}
```

</section>
