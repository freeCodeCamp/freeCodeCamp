---
id: 5900f4ba1000cf542c50ffcd
challengeType: 5
title: 'Problem 334: Spilling the beans'
forumTopicId: 301992
localeTitle: 'Задача 334: Пролитие фасоли'
---

## Description
<section id='description'>
В небесах Платона существует бесконечное количество чаш в прямой линии. Каждая чаша либо содержит некоторое, либо ни одно из конечного количества бобов. Ребенок играет в игру, которая допускает только один вид движения: удаление двух бобов из любой чаши и помещение одного в каждую из двух соседних чаш. Игра заканчивается, когда каждая чаша содержит либо одну, либо никакую фасоль. <p> Например, рассмотрите две соседние чаши, содержащие 2 и 3 бобов, соответственно, все остальные чаши пусты. Следующие восемь ходов завершат игру: </p><p> Вам заданы следующие последовательности: t0 = 123456. </p><pre> <code> ti = ti-12 , if ti-1 is even ti-12 926252, if ti-1 is odd where ⌊x⌋ is the floor function and is the bitwise XOR operator. bi = ( ti mod 211) + 1.</code> </pre><p> Первые два члена последней последовательности: b1 = 289 и b2 = 145. Если мы начнем с b1 и b2 beans в двух соседних чашках, для завершения игры потребуется 3419100 ходов. </p><p> Рассмотрим теперь 1500 соседних чаш, содержащих b1, b2, ..., b1500 бобов, соответственно, все остальные чаши пусты. Найдите, сколько ходов требуется до окончания игры. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler334()</code> should return 150320021261690850.
    testString: assert.strictEqual(euler334(), 150320021261690850);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler334() {
  // Good luck!
  return true;
}

euler334();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
