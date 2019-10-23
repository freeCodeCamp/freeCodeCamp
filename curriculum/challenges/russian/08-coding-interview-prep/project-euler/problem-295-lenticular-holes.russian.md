---
id: 5900f4931000cf542c50ffa6
challengeType: 5
title: 'Problem 295: Lenticular holes'
forumTopicId: 301947
localeTitle: 'Задача 295: Линзовидные отверстия'
---

## Description
<section id='description'>
Мы называем выпуклую область, окруженную двумя кругами линзовидным отверстием, если: Центры обеих окружностей находятся в точках решетки. Два круга пересекаются в двух разных точках решетки. Внутренность выпуклой области, окруженной обоими кругами, не содержит точек решетки. <p> Рассмотрим кружки: C0: x2 + y2 = 25 C1: (x + 4) 2+ (y-4) 2 = 1 C2: (x-12) 2+ (y-4) 2 = 65 </p><p> Круги C0, C1 и C2 изображены на рисунке ниже. </p><p> C0 и C1 образуют линзовидное отверстие, а также C0 и C2. </p><p> Будем называть упорядоченную пару положительных вещественных чисел (r1, r2) линзовидной парой, если существуют две окружности с радиусами r1 и r2, которые образуют линзовидное отверстие. Мы можем проверить, что (1, 5) и (5, √65) являются линзовидными парами вышеприведенного примера. </p><p> Пусть L (N) - число различных линзообразных пар (r1, r2), для которых 0 &lt;r1 ≤ r2 ≤ N. Мы можем проверить, что L (10) = 30 и L (100) = 3442. </p><p> Найдите L (100 000). </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler295()</code> should return 4884650818.
    testString: assert.strictEqual(euler295(), 4884650818);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler295() {
  // Good luck!
  return true;
}

euler295();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
