---
id: 5900f5431000cf542c510056
challengeType: 5
title: 'Problem 471: Triangle inscribed in ellipse'
forumTopicId: 302148
localeTitle: 'Задача 471: Треугольник, вписанный в эллипс'
---

## Description
<section id='description'>
Треугольник ΔABC вписан в эллипс с уравнением $ \ frac {x ^ 2} {a ^ 2} + \ frac {y ^ 2} {b ^ 2} = 1 $, 0 &lt;2b &lt;a, a и b целые числа , Пусть r (a, b) - радиус обтекания ΔABC, когда окружность имеет центр (2b, 0), а A имеет координаты $ \ left (\ frac a 2, \ frac {\ sqrt 3} 2 b \ right) $. Например, r (3,1) = ½, r (6,2) = 1, r (12,3) = 2. <p> Пусть $ G (n) = \ sum <em>{a = 3} ^ n \ sum</em> {b = 1} ^ {\ lfloor \ frac {a - 1} 2 \ rfloor} r (a, b) $ Вы получаете G ( 10) = 20,59722222, G (100) = 19223.60980 (округлено до 10 значащих цифр). Найти G (1011). Дайте свой ответ в научной нотации округлен до 10 значащих цифр. Используйте нижний регистр e для разделения мантиссы и экспоненты. Для G (10) ответ был бы 2.059722222e1. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler471()</code> should return 1.895093981e+31.
    testString: assert.strictEqual(euler471(), 1.895093981e+31);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler471() {
  // Good luck!
  return true;
}

euler471();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
