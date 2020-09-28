---
id: 5900f4731000cf542c50ff85
challengeType: 5
title: 'Problem 262: Mountain Range'
forumTopicId: 301911
localeTitle: 'Задача 262: Горный хребет'
---

## Description
<section id='description'>
Следующее уравнение представляет непрерывную топографию горной области, дающую возвышение h в любой точке (x, y): <p> Москит намерен летать от А (200 200) до B (1400, 1400), не покидая области, заданной 0 ≤ x, y ≤ 1600. </p><p> Из-за промежуточных гор он сначала поднимается прямо до точки A &#39;, имеющей отметку f. Затем, оставаясь на одном и том же уровне f, он летает вокруг любых препятствий, пока он не достигнет точки B &#39;непосредственно над B. </p><p> Сначала определите fmin, который является минимальной постоянной высотой, позволяющей такое путешествие от A до B, оставаясь в указанной области. Затем найдите длину кратчайшего пути между A &#39;и B&#39;, при этом пролетев на этой постоянной высоте fmin. </p><p> Дайте эту длину как ваш ответ, округленный до трех знаков после запятой. </p><p> Примечание: для удобства приведенная выше функция возвышения повторяется ниже в форме, подходящей для большинства языков программирования: h = (5000-0,005 <em>(x</em> x + y <em>y + x</em> y) +12,5 <em>(x + y))</em> exp (- абс (0,000001 <em>(x</em> x + y <em>y) -0,0015</em> (x + y) +0,7)) </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler262()</code> should return 2531.205.
    testString: assert.strictEqual(euler262(), 2531.205);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler262() {
  // Good luck!
  return true;
}

euler262();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
