---
id: 5900f4971000cf542c50ffaa
challengeType: 5
title: 'Problem 299: Three similar triangles'
forumTopicId: 301951
localeTitle: 'Проблема 299: Три похожих треугольника'
---

## Description
<section id='description'>
Выбираются четыре точки с целыми координатами: A (a, 0), B (b, 0), C (0, c) и D (0, d), с 0 &lt;a &lt;b и 0 &lt;c &lt;d. Точка P, также с целыми координатами, выбирается на линии AC так, чтобы три треугольника ABP, CDP и BDP были одинаковыми. <p> Нетрудно доказать, что три треугольника могут быть похожими, только если а = с. </p><p> Итак, учитывая, что a = c, мы ищем триплеты (a, b, d), так что на AC существует по крайней мере одна точка P (с целыми координатами), что делает три треугольника ABP, CDP и BDP одинаковыми. </p><p> Например, если (a, b, d) = (2,3,4), легко проверить, что точка P (1,1) удовлетворяет указанному выше условию. Заметим, что триплеты (2,3,4) и (2,4,3) считаются различными, хотя точка P (1,1) является общей для обоих. </p><p> Если b + d &lt;100, то существует 92 различных триплета (a, b, d), для которых существует точка P. Если b + d &lt;100 000, существует 320471 различных триплетов (a, b, d), так что точка P существует. Если b + d &lt;100 000 000, сколько четких триплетов (a, b, d) существует, так что точка P существует? </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler299()</code> should return 549936643.
    testString: assert.strictEqual(euler299(), 549936643);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler299() {
  // Good luck!
  return true;
}

euler299();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
