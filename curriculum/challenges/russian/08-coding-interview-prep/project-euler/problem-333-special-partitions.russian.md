---
id: 5900f4b91000cf542c50ffcc
challengeType: 5
title: 'Problem 333: Special partitions'
forumTopicId: 301991
localeTitle: 'Задача 333: Специальные разделы'
---

## Description
<section id='description'>
Все положительные целые числа могут быть разделены таким образом, что каждый член разбиения может быть выражен как 2ix3j, где i, j ≥ 0. <p> Давайте рассмотрим только те такие разделы, где ни один из терминов не может делить ни одно из других членов. Например, разбиение 17 = 2 + 6 + 9 = (21x30 + 21x31 + 20x32) было бы неверным, так как 2 может делить 6. Ни одно разделение 17 = 16 + 1 = (24x30 + 20x30), так как 1 может делить 16. Единственным допустимым разделом 17 будет 8 + 9 = (23x30 + 20x32). </p><p> Многие целые числа имеют более одного допустимого раздела, первый из которых имеет 11 следующих двух разделов. 11 = 2 + 9 = (21x30 + 20x32) 11 = 8 + 3 = (23x30 + 20x31) </p><p> Определим P (n) как число допустимых разделов n. Например, P (11) = 2. </p><p> Рассмотрим только простые целые числа q, которые имели бы один действительный раздел, такой как P (17). </p><p> Сумма простых чисел q &lt;100 такая, что P (q) = 1 равно 233. </p><p> Найдите сумму простых чисел q &lt;1000000, для которых P (q) = 1. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler333()</code> should return 3053105.
    testString: assert.strictEqual(euler333(), 3053105);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler333() {
  // Good luck!
  return true;
}

euler333();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
