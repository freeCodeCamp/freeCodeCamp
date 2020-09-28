---
id: 5900f3b61000cf542c50fec9
challengeType: 5
title: 'Problem 74: Digit factorial chains'
forumTopicId: 302187
localeTitle: 'Задача 74: Цифровые факториальные цепи'
---

## Description
<section id='description'>
Число 145 хорошо известно тем свойством, что сумма факториала его цифр равна 145: 1! + 4! + 5! = 1 + 24 + 120 = 145 Возможно, менее хорошо известно 169, поскольку оно производит самую длинную цепочку чисел, которая ссылается на 169; оказывается, что существует только три таких цикла: 169 → 363601 → 1454 → 169 871 → 45361 → 871 872 → 45362 → 872 Нетрудно доказать, что КАЖДЫЙ стартовый номер в конечном итоге застревает в цикле. Например, 69 → 363600 → 1454 → 169 → 363601 (→ 1454) 78 → 45360 → 871 → 45361 (→ 871) 540 → 145 (→ 145) Начиная с 69 выдает цепочку из пяти не повторяющихся терминов, но самая длинная не повторяющаяся цепочка с начальным числом ниже миллиона составляет шестьдесят терминов. Сколько цепей с начальным номером ниже миллиона содержит ровно шестьдесят неповторяющихся терминов?
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler74()</code> should return 402.
    testString: assert.strictEqual(euler74(), 402);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler74() {
  // Good luck!
  return true;
}

euler74();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
