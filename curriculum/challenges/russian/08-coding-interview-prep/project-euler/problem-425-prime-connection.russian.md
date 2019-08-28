---
id: 5900f5151000cf542c510028
challengeType: 5
title: 'Problem 425: Prime connection'
forumTopicId: 302095
localeTitle: 'Задача 425: Основное соединение'
---

## Description
<section id='description'>
Два положительных числа A и B называются связанными (обозначается «A ↔ B»), если выполнено одно из этих условий: (1) A и B имеют одинаковую длину и отличаются ровно одной цифрой; например, 123 ↔ 173. (2) Добавление одной цифры слева от A (или B) делает B (или A); например, 23 ↔ 223 и 123 ↔ 23. <p> Назовем простой P a 2, если существует цепочка связных простых чисел между 2 и P и никакое простое в цепочке не превосходит P. </p><p> Например, 127 является родственником 2. Одна из возможных цепочек показана ниже: 2 ↔ 3 ↔ 13 ↔ 113 ↔ 103 ↔ 107 ↔ 127 Однако 11 и 103 не являются родственниками 2. </p><p> Пусть F (N) - сумма простых чисел ≤ N, не являющихся родственниками 2. Мы можем проверить, что F (103) = 431 и F (104) = 78728. </p><p> Найти F (107). </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler425()</code> should return 46479497324.
    testString: assert.strictEqual(euler425(), 46479497324);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler425() {
  // Good luck!
  return true;
}

euler425();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
