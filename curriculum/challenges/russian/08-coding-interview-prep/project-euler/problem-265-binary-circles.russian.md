---
id: 5900f4761000cf542c50ff88
challengeType: 5
title: 'Problem 265: Binary Circles'
forumTopicId: 301914
localeTitle: 'Задача 265: двоичные круги'
---

## Description
<section id='description'>
2N двоичные цифры могут быть помещены в круг, так что все N-значные подпоследовательности по часовой стрелке различны. <p> При N = 3 возможны два таких круглых устройства, игнорируя вращения: </p><p> Для первой компоновки 3-значные подпоследовательности в порядке по часовой стрелке составляют: 000, 001, 010, 101, 011, 111, 110 и 100. </p><p> Каждое круговое расположение может быть закодировано как число путем объединения двоичных цифр, начиная с подпоследовательности всех нулей в качестве наиболее значимых бит и продолжая по часовой стрелке. Таким образом, два устройства для N = 3 представлены как 23 и 29: 00010111 2 = 23 00011101 2 = 29 </p><p> Вызывая S (N) сумму уникальных числовых представлений, мы можем видеть, что S (3) = 23 + 29 = 52. </p><p> Найти S (5). </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler265()</code> should return 209110240768.
    testString: assert.strictEqual(euler265(), 209110240768);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler265() {
  // Good luck!
  return true;
}

euler265();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
