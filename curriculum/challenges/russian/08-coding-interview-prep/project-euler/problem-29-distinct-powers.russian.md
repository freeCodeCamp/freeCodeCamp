---
id: 5900f3891000cf542c50fe9c
challengeType: 5
title: 'Problem 29: Distinct powers'
forumTopicId: 301941
localeTitle: 'Задача 29: Определенные полномочия'
---

## Description
<section id='description'>
Рассмотрим все целые комбинации ab для 2 ≤ a ≤ 5 и 2 ≤ b ≤ 5: 22 = 4, 23 = 8, 24 = 16, 25 = 32 32 = 9, 33 = 27, 34 = 81, 35 = 243 42 = 16, 43 = 64, 44 = 256, 45 = 1024 52 = 25, 53 = 125, 54 = 625, 55 = 3125. Если они затем помещаются в числовом порядке, при удалении любых повторений мы получаем следующую последовательность из 15 различные термины: 4, 8, 9, 16, 25, 27, 32, 64, 81, 125, 243, 256, 625, 1024, 3125 Сколько различных членов в последовательности, сгенерированной ab для 2 ≤ a ≤ n и 2 ≤ b ≤ n?
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>distinctPowers(15)</code> should return 177.
    testString: assert.strictEqual(distinctPowers(15), 177);
  - text: <code>distinctPowers(20)</code> should return 324.
    testString: assert.strictEqual(distinctPowers(20), 324);
  - text: <code>distinctPowers(25)</code> should return 519.
    testString: assert.strictEqual(distinctPowers(25), 519);
  - text: <code>distinctPowers(30)</code> should return 755.
    testString: assert.strictEqual(distinctPowers(30), 755);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function distinctPowers(n) {
  // Good luck!
  return n;
}

distinctPowers(30);

```

</div>

</section>

## Solution
<section id='solution'>

```js
const distinctPowers = (n) => {
  let list = [];
  for (let a=2; a<=n; a++) {
    for (let b=2; b<=n; b++) {
      let term = Math.pow(a, b);
      if (list.indexOf(term)===-1) list.push(term);
    }
  }
  return list.length;
};
```

</section>
