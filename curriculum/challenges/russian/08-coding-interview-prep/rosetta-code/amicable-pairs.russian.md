---
title: Amicable pairs
id: 5949b579404977fbaefcd737
challengeType: 5
videoUrl: ''
localeTitle: Дружественные пары
---

## Description
<section id="description"> Два целых числа $ N $ и $ M $ называются <a href="https://en.wikipedia.org/wiki/Amicable numbers" title="wp: дружественные номера">дружественными парами,</a> если $ N \ neq M $ и сумма <a href="http://rosettacode.org/wiki/Proper divisors" title="Собственные делители">собственных делителей</a> $ N $ ($ \ mathrm {sum} (\ mathrm {propDivs} (N)) $) $ = M $, а также $ \ mathrm {sum} (\ mathrm {propDivs} (M)) = N $. Пример: 1184 и 1210 являются дружной парой с соответствующими делителями: 1, 2, 4, 8, 16, 32, 37, 74, 148, 296, 592 и 1, 2, 5, 10, 11, 22, 55, 110, 121, 242, 605 соответственно. Задача: рассчитать и показать здесь дружественные пары ниже 20 000 (их восемь). Связанные задачи <a href="http://rosettacode.org/wiki/Proper divisors" title="Собственные делители">Правильные делители</a> <a href="http://rosettacode.org/wiki/Abundant, deficient and perfect number classifications" title="Обильные, неполные и совершенные классификации номеров">Обильные, неполные и совершенные классификации чисел Классификация</a> <a href="http://rosettacode.org/wiki/Aliquot sequence classifications" title="Классификация последовательности аликвот">последовательности аликвот</a> и ее дружественная классификация. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>amicablePairsUpTo</code> - это функция.
    testString: 'assert(typeof amicablePairsUpTo === "function", "<code>amicablePairsUpTo</code> is a function.");'
  - text: '<code>amicablePairsUpTo(300)</code> должен возвратить <code>[[220,284]]</code> .'
    testString: 'assert.deepEqual(amicablePairsUpTo(300), answer300, "<code>amicablePairsUpTo(300)</code> should return <code>[[220,284]]</code>.");'
  - text: '<code>amicablePairsUpTo(3000)</code> должен вернуть <code>[[220,284],[1184,1210],[2620,2924]]</code> .'
    testString: 'assert.deepEqual(amicablePairsUpTo(3000), answer3000, "<code>amicablePairsUpTo(3000)</code> should return <code>[[220,284],[1184,1210],[2620,2924]]</code>.");'
  - text: '<code>amicablePairsUpTo(20000)</code> должен возвращать <code>[[220,284],[1184,1210],[2620,2924],[5020,5564],[6232,6368],[10744,10856],[12285,14595],[17296,18416]]</code> .'
    testString: 'assert.deepEqual(amicablePairsUpTo(20000), answer20000, "<code>amicablePairsUpTo(20000)</code> should return <code>[[220,284],[1184,1210],[2620,2924],[5020,5564],[6232,6368],[10744,10856],[12285,14595],[17296,18416]]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function amicablePairsUpTo (maxNum) {
  // Good luck!
  return true;
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
