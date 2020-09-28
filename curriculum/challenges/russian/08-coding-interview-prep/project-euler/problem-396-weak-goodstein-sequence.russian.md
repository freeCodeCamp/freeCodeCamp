---
id: 5900f4f81000cf542c51000b
challengeType: 5
title: 'Problem 396: Weak Goodstein sequence'
forumTopicId: 302061
localeTitle: 'Problem 396: Weak Goodstein sequence'
---

## Description
<section id='description'>
Для любого натурального n n-я слабая последовательность Гудштейна {g1, g2, g3, ...} определяется как: g1 = n при k&gt; 1, gk получается путем записи gk-1 в базе k, интерпретируя ее как base k + 1 число и вычитание 1. <p> Последовательность завершается, когда gk становится 0. </p><p> Например, 6-я слабая последовательность Гудштейна {6, 11, 17, 25, ...}: g1 = 6. g2 = 11, так как 6 = 1102, 1103 = 12 и 12 - 1 = 11. g3 = 17, поскольку 11 = 1023, 1024 = 18 и 18 - 1 = 17. g4 = 25, так как 17 = 1014, 1015 = 26 и 26 - 1 = 25. </p><p> и так далее. </p><p> Можно показать, что каждая слабая последовательность Гудштейна заканчивается. </p><p> Пусть G (n) - число ненулевых элементов в n-й слабой последовательности Гудштейна. Можно проверить, что G (2) = 3, G (4) = 21 и G (6) = 381. Также можно проверить, что ΣG (n) = 2517 для 1 ≤ n &lt;8. </p><p> Найдите последние 9 цифр ΣG (n) для 1 ≤ n &lt;16. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler396()</code> should return 173214653.
    testString: assert.strictEqual(euler396(), 173214653);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler396() {
  // Good luck!
  return true;
}

euler396();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
