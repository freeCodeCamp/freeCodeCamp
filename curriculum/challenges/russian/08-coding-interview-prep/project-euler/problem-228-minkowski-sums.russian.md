---
id: 5900f4511000cf542c50ff63
challengeType: 5
title: 'Problem 228: Minkowski Sums'
forumTopicId: 301871
localeTitle: 'Задача 228: Суммы Минковского'
---

## Description
<section id='description'>
Пусть Sn - регулярный n-сторонний многоугольник - или форма - вершины которого <p> vk (k = 1,2, ..., n) имеют координаты: </p><pre> <code>xk   = cos( 2k-1/n ×180° ) yk   = sin( 2k-1/n ×180° )</code> </pre><p> Каждый Sn должен интерпретироваться как заполненная форма, состоящая из всех точек по периметру и в интерьере. </p><p> Сумма Минковского S + T двух форм S и T является результатом </p><p> добавляя каждую точку в S к каждой точке в T, где добавление точки выполняется по координате: </p><p> (u, v) + (x, y) = (u + x, v + y). </p><p> Например, сумма S3 и S4 представляет собой шестигранную форму, показанную розовым ниже: </p><p> Сколько сторон имеет S1864 + S1865 + ... + S1909? </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler228()</code> should return 86226.
    testString: assert.strictEqual(euler228(), 86226);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler228() {
  // Good luck!
  return true;
}

euler228();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
