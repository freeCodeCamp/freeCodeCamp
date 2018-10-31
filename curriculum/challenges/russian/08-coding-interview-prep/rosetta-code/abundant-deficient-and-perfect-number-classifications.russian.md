---
title: 'Abundant, deficient and perfect number classifications'
id: 594810f028c0303b75339acd
challengeType: 5
videoUrl: ''
localeTitle: 'Обильные, неполные и совершенные классификации номеров'
---

## Description
<section id="description"><p> Они определяют три классификации положительных целых чисел на основе их <a href="http://rosettacode.org/wiki/Proper divisors" title="Собственные делители">правильных делителей</a> . </p><p> Пусть $ P (n) $ - сумма собственных делителей n, где собственные делители - все натуральные n, отличные от n. </p><p> Если <code>P(n) &lt; n</code> то n классифицируется как «несовершенный», </p><p> Если <code>P(n) === n</code> то n классифицируется как &quot;совершенный&quot; </p><p> Если <code>P(n) &gt; n</code> то n классифицируется как &quot;обильное&quot; </p><p> Пример: </p><p> 6 имеет собственные делители 1, 2 и 3. </p><p> 1 + 2 + 3 = 6, поэтому 6 классифицируется как совершенное число. </p><p> Внедрите функцию, которая вычисляет, сколько целых чисел от 1 до 20 000 (включительно) находятся в каждом из трех классов. Выведите результат как массив в следующем формате <code>[deficient, perfect, abundant]</code> . </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getDPA</code> - это функция.
    testString: 'assert(typeof getDPA === "function", "<code>getDPA</code> is a function.");'
  - text: <code>getDPA</code> должен возвращать массив.
    testString: 'assert(Array.isArray(getDPA(100)), "<code>getDPA</code> should return an array.");'
  - text: Возвращаемое значение <code>getDPA</code> должно иметь длину 3.
    testString: 'assert(getDPA(100).length === 3, "<code>getDPA</code> return value should have a length of 3.");'
  - text: '<code>getDPA(20000)</code> должен равняться [15043, 4, 4953]'
    testString: 'assert.deepEqual(getDPA(20000), solution, "<code>getDPA(20000)</code> should equal [15043, 4, 4953]");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getDPA (num) {
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
