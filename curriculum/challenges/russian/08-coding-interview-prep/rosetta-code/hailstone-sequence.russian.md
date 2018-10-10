---
title: Hailstone sequence
id: 595608ff8bcd7a50bd490181
challengeType: 5
videoUrl: ''
localeTitle: Последовательность градиента
---

## Description
<section id="description"><p> Последовательность чисел Hailstone может быть сгенерирована из начального положительного целого числа, n: </p> Если n равно 1, последовательность заканчивается. Если n четно, то следующее n последовательности <code>= n/2</code> Если n нечетно, то следующее n последовательности <code>= (3 * n) + 1</code> <p> (Неподтвержденная) <a href="https://en.wikipedia.org/wiki/Collatz conjecture" title="wp: гипотеза Collatz">гипотеза Collatz</a> заключается в том, что последовательность градиентов для любого начального числа всегда заканчивается. </p><p> Последовательность градиента также известна как номера градиента (поскольку значения обычно подвержены нескольким спуску и восхождениям, таким как град в облаке) или как последовательность Collatz. </p> Задача: создать процедуру для генерации последовательности градиента для числа. Используйте процедуру, чтобы показать, что последовательность градиента для числа 27 содержит 112 элементов, начиная с <code>27, 82, 41, 124</code> и заканчивая <code>8, 4, 2, 1</code> Покажите число менее 100 000, которое имеет самую длинную последовательность градиента вместе с этим длина последовательности. (Но не показывайте действительную последовательность!) См. Также: <a href="http://xkcd.com/710" title="ссылка: http://xkcd.com/710">xkcd</a> (humourous). </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>hailstoneSequence</code> - это функция.
    testString: 'assert(typeof hailstoneSequence === "function", "<code>hailstoneSequence</code> is a function.");'
  - text: '<code>hailstoneSequence()</code> должен возвращать <code>[[27,82,41,124,8,4,2,1], [351, 77031]]</code>'
    testString: 'assert.deepEqual(hailstoneSequence(), res, "<code>hailstoneSequence()</code> should return <code>[[27,82,41,124,8,4,2,1], [351, 77031]]</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// noprotect
function hailstoneSequence () {
  const res = [];
  // Good luck!

  return res;
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
