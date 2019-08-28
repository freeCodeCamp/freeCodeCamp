---
id: 5900f4c21000cf542c50ffd4
challengeType: 5
title: 'Problem 340: Crazy Function'
forumTopicId: 301999
localeTitle: 'Проблема 340: Сумасшедшая функция'
---

## Description
<section id='description'>
Для фиксированных целых чисел a, b, c определяют сумасшедшую функцию F (n) следующим образом: F (n) = n - c для всех n&gt; b F (n) = F (a + F (a + F (a + F (a + n)))) для всех n ≤ b. <p> Также определим S (a, b, c) =. </p><p> Например, если a = 50, b = 2000 и c = 40, то F (0) = 3240 и F (2000) = 2040. Также S (50, 2000, 40) = 5204240. </p><p> Найдите последние 9 цифр S (217, 721, 127). </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler340()</code> should return 291504964.
    testString: assert.strictEqual(euler340(), 291504964);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler340() {
  // Good luck!
  return true;
}

euler340();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
