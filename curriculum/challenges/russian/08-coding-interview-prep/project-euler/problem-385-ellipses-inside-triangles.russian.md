---
id: 5900f4ee1000cf542c510000
challengeType: 5
title: 'Problem 385: Ellipses inside triangles'
forumTopicId: 302049
localeTitle: 'Задача 385: Эллипсы внутри треугольников'
---

## Description
<section id='description'>
Для любого треугольника T на плоскости можно показать, что существует уникальный эллипс с наибольшей площадью, полностью внутри T. <p> Для данного n рассмотрим треугольники T такие, что: </p><ul><li> вершины T имеют целочисленные координаты с абсолютным значением ≤ n и </li><li> фокусы эллипса наибольшей площади внутри Т (√13,0) и (-13,13). Пусть A (n) - сумма площадей всех таких треугольников. </li></ul><p> Например, если n = 8, то есть два таких треугольника. Их вершины: (-4, -3), (- 4,3), (8,0) и (4,3), (4, -3), (- 8,0) и площадь каждого треугольника равна 36. Таким образом, A (8) = 36 + 36 = 72. </p><p> Можно проверить, что A (10) = 252, A (100) = 34632 и A (1000) = 3529008. </p><p> Найдите A (1 000 000 000). </p><p> 1 Фокусы (множественное число фокусов) эллипса представляют собой две точки A и B такие, что для каждой точки P на границе эллипса AP + PB постоянна. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler385()</code> should return 3776957309612154000.
    testString: assert.strictEqual(euler385(), 3776957309612154000);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler385() {
  // Good luck!
  return true;
}

euler385();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
