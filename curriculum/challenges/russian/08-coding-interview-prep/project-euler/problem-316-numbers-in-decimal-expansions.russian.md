---
id: 5900f4a81000cf542c50ffbb
challengeType: 5
title: 'Problem 316: Numbers in decimal expansions'
forumTopicId: 301972
localeTitle: 'Задача 316: Числа в десятичных разложениях'
---

## Description
<section id='description'>
Пусть p = p1 p2 p3 ... - бесконечная последовательность случайных чисел, выбранных из {0,1,2,3,4,5,6,7,8,9} с равной вероятностью. Можно видеть, что p соответствует вещественному числу 0.p1 p2 p3 .... Можно также видеть, что выбор случайного действительного числа из интервала [0,1) эквивалентен выбору бесконечной последовательности случайных цифр, выбранных от {0,1,2,3,4,5,6,7,8,9} с равной вероятностью. <p> Для любого натурального n с d десятичными числами пусть k - наименьший индекс, такой, что pk, pk + 1, ... pk + d-1 - десятичные числа n в том же порядке. Кроме того, пусть g (n) - ожидаемое значение k; можно доказать, что g (n) всегда конечна и, что интересно, всегда является целым числом. </p><p> Например, если n = 535, то для p = 31415926535897 .... получаем k = 9 для p = 355287143650049560000490848764084685354 ..., получаем k = 36 и т. Д., И получаем, что g (535) = 1008. </p><p> Учитывая, что найти </p><p> Примечание: представляет функцию пола. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler316()</code> should return 542934735751917760.
    testString: assert.strictEqual(euler316(), 542934735751917760);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler316() {
  // Good luck!
  return true;
}

euler316();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
