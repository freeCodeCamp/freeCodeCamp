---
title: Taxicab numbers
id: 594ecc0d9a8cf816e3340187
challengeType: 5
videoUrl: ''
localeTitle: Номера такси
---

## Description
<section id="description"> Номер <a href="https://en.wikipedia.org/wiki/Hardy–Ramanujan number" title="wp: номер Харди-Рамануджана">такси</a> (определение, которое используется здесь) является положительным целым числом, которое может быть выражено как сумма двух положительных кубов более чем одним способом. Первый номер такси составляет 1729, что составляет: 1 <sup>3</sup> + 12 <sup>3</sup> и 9 <sup>3</sup> + 10 <sup>3</sup> . Номера такси также известны как: * номера такси * номера такси-такси * номера такси * номера Hardy-Ramanujan Задача: Напишите функцию, которая возвращает самые низкие номера такси. Для каждого номера такси, укажите номер, а также его составные кубы. См. Также: [http://oeis.org/A001235 A001235 номера такси) в онлайновой энциклопедии целочисленных последовательностей. <a href="http://mathworld.wolfram.com/Hardy-RamanujanNumber.html">Харди-Рамануджан</a> на MathWorld. <a href="http://mathworld.wolfram.com/TaxicabNumber.html">номер такси</a> для MathWorld. <a href="https://en.wikipedia.org/wiki/Taxicab_number">номер такси</a> в Википедии. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>taxicabNumbers</code> - это функция.
    testString: 'assert(typeof taxicabNumbers === "function", "<code>taxicabNumbers </code> is a function.");'
  - text: <code>taxicabNumbers</code> должны возвращать массив.
    testString: 'assert(typeof taxicabNumbers(2) === "object", "<code>taxicabNumbers </code> should return an array.");'
  - text: <code>taxicabNumbers</code> должен возвращать массив чисел.
    testString: 'assert(typeof taxicabNumbers(100)[0] === "number", "<code>taxicabNumbers </code> should return an array of numbers.");'
  - text: '<code>taxicabNumbers(4)</code> должны вернуть [1729, 4104, 13832, 20683].'
    testString: 'assert.deepEqual(taxicabNumbers(4), res4, "<code>taxicabNumbers(4) </code> must return [1729, 4104, 13832, 20683].");'
  - text: 'taxicabNumbers (25) должны возвращаться [1729, 4104, 13832, 20683, 32832, 39312, 40033, 46683, 64232, 65728, 110656, 110808, 134379, 149389, 165464, 171288, 195841, 216027, 216125, 262656, 314496, 320264 , 327763, 373464, 402597]'
    testString: 'assert.deepEqual(taxicabNumbers(25), res25, "taxicabNumbers(25) should return [1729, 4104, 13832, 20683, 32832, 39312, 40033, 46683, 64232, 65728, 110656, 110808, 134379, 149389, 165464, 171288, 195841, 216027, 216125, 262656, 314496, 320264, 327763, 373464, 402597]");'
  - text: 'taxicabNumbers (39) итоговые цифры от 20 до 29 должны быть [314496,320264,327763,373464,402597,439101,443889,513000,513856].'
    testString: 'assert.deepEqual(taxicabNumbers(39).slice(20, 29), res39From20To29, "taxicabNumbers(39) resulting numbers from 20 - 29 should be [314496,320264,327763,373464,402597,439101,443889,513000,513856].");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function taxicabNumbers (n) {
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
