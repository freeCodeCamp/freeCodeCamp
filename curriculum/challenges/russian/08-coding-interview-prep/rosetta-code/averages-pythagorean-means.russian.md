---
title: Averages-Pythagorean means
id: 594d966a1467eb84194f0086
challengeType: 5
videoUrl: ''
localeTitle: Средние значения - пифагорейские средства
---

## Description
<section id="description"><p class="rosetta__paragraph"> Вычислите все три <a class="rosetta__link--wiki" href="https://en.wikipedia.org/wiki/Pythagorean means" title="wp: Пифагорейский означает">пифагорейских средства</a> набора целых чисел от <big>1</big> до <big>10</big> (включительно). </p><p class="rosetta__paragraph"> Покажите, что для этого набора натуральных чисел <big>$ A (x_1, \ ldots, x_n) \ geq G (x_1, \ ldots, x_n) \ geq H (x_1, \ ldots, x_n) $</big> . </p> Наиболее распространенным из трех означает <a class="rosetta__link--rosetta" href="http://rosettacode.org/wiki/Averages/Arithmetic mean" title="Средние / Средние арифметические">среднее арифметическое</a> - это сумма списка, деленная на его длину: <big>$ A (x_1, \ ldots, x_n) = \ frac {x_1 + \ cdots + x_n} {n} $</big> <a class="rosetta__link--wiki" href="https://en.wikipedia.org/wiki/Geometric mean" title="wp: среднее геометрическое">Геометрическая Среднее означает</a> $ n $ -ый корень из произведения списка: <big>$ G (x_1, \ ldots, x_n) = \ sqrt [n] {x_1 \ cdots x_n} $</big> <a class="rosetta__link--wiki" href="https://en.wikipedia.org/wiki/Harmonic mean" title="wp: Гармоническое среднее">Гармоническое среднее</a> $ n $, деленное на сумму обратный каждому элементу в списке: <big>$ H (x_1, \ ldots, x_n) = \ frac {n} {\ frac {1} {x_1} + \ cdots + \ frac {1} {x_n}} $</big> <p class="rosetta__paragraph"> Предположим, что вход представляет собой упорядоченный массив всех включенных чисел. </p><p class="rosetta__paragraph"> Для ответа, пожалуйста, выведите объект в следующем формате: </p><pre class="rosetta__pre"> {
  значения: {
    Арифметика: 5.5,
    Геометрический: 4.528728688116765,
    Гармонический: 3.414171521474055
  },
  test: &#39;является A&gt; = G&gt; = H? да&#39;
}
</pre></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Функция <code>pythagoreanMeans</code> - это функция.
    testString: 'assert(typeof pythagoreanMeans === "function", "<code>pythagoreanMeans</code> is a function.");'
  - text: '<code>pythagoreanMeans([1, 2, ..., 10])</code> должен равняться тому же самому выходу.'
    testString: 'assert.deepEqual(pythagoreanMeans(range1), answer1, "<code>pythagoreanMeans([1, 2, ..., 10])</code> should equal the same output above.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function pythagoreanMeans (rangeArr) {
  // Good luck!
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
