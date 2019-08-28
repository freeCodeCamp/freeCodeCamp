---
id: 5900f3e61000cf542c50fef9
challengeType: 5
title: 'Problem 122: Efficient exponentiation'
forumTopicId: 301749
localeTitle: 'Задача 122: Эффективное возведение в степень'
---

## Description
<section id='description'>
Самый наивный способ вычисления n15 требует четырнадцати умножений: n × n × ... × n = n15 Но используя «двоичный» метод, вы можете вычислить его в шести умножениях: n × n = n2n2 × n2 = n4n4 × n4 = n8n8 × n4 = n12n12 × n2 = n14n14 × n = n15 Однако еще можно вычислить его только в пяти умножениях: n × n = n2n2 × n = n3n3 × n3 = n6n6 × n6 = n12n12 × n3 = n15 Определим m (k) - минимальное количество умножений для вычисления nk; например m (15) = 5. Для 1 ≤ k ≤ 200 найдите Σ m (k).
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler122()</code> should return 1582.
    testString: assert.strictEqual(euler122(), 1582);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler122() {
  // Good luck!
  return true;
}

euler122();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
