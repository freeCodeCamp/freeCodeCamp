---
title: Heronian triangles
id: 595b98f8b5a2245e243aa831
challengeType: 5
videoUrl: ''
localeTitle: Херонические треугольники
---

## Description
<section id="description"><p> <a href="https://en.wikipedia.org/wiki/Heron&#x27;s formula" title="wp: формула Герона">Формула Героя</a> для области треугольника с учетом длины трех ее сторон <big>a,</big> <big>b</big> и <big>c</big> определяется следующим образом: </p><p> <big>$$ A = \ sqrt {s (sa) (sb) (sc)}, $$</big> </p><p> где <big>s</big> - половина периметра треугольника; то есть, </p><p> <big>$$ з = \ гидроразрыва {а + B + C} {2} $$.</big> </p><p> <a href="http://www.had2know.com/academics/heronian-triangles-generator-calculator.html" title="ссылка: http://www.had2know.com/academics/heronian-triangles-generator-calculator.html">Херонические треугольники</a> - это треугольники, стороны и области которых являются целыми числами. </p><p> Примером может служить треугольник со сторонами 3, 4, 5, площадь которых равна 6 (а по периметру - 12). </p><p> Заметим, что любой треугольник, чьи стороны все целые кратные 3, 4, 5; такие как 6, 8, 10, также будут иероническим треугольником. </p><p> Определите примитивный херонийский треугольник как хернийский треугольник, где наибольший общий делитель </p><p> всех трех сторон 1 (единство). </p><p> Это исключает, например, треугольник 6, 8, 10. </p> Задача: <p> Реализуйте функцию, основанную на формуле Героя, которая возвращает первые <code>n <sub>th</sub></code> упорядоченные треугольники в массиве массивов. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>heronianTriangle</code> - это функция.
    testString: 'assert(typeof heronianTriangle === "function", "<code>heronianTriangle</code> is a function.");'
  - text: '<code>heronianTriangle()</code> должен возвращать <code>[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17]]</code>'
    testString: 'assert.deepEqual(heronianTriangle(testCases[0]), res[0], "<code>heronianTriangle()</code> should return <code>[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17]]</code>");'
  - text: '<code>heronianTriangle()</code> должен возвращать <code>[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15]],</code>'
    testString: 'assert.deepEqual(heronianTriangle(testCases[1]), res[1], "<code>heronianTriangle()</code> should return <code>[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15]],</code>");'
  - text: '<code>heronianTriangle()</code> должен возвращать <code>[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15], [10, 17, 21], [7, 24, 25], [8, 29, 35], [12, 17, 25], [4, 51, 53]],</code>'
    testString: 'assert.deepEqual(heronianTriangle(testCases[2]), res[2], "<code>heronianTriangle()</code> should return <code>[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15], [10, 17, 21], [7, 24, 25], [8, 29, 35], [12, 17, 25], [4, 51, 53]],</code>");'
  - text: '<code>heronianTriangle()</code> должен возвращать <code>[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15], [10, 17, 21], [7, 24, 25], [8, 29, 35], [12, 17, 25], [4, 51, 53], [19, 20, 37],[16, 17, 17], [17, 17, 30], [16, 25, 39], [13, 20, 21]]</code>'
    testString: 'assert.deepEqual(heronianTriangle(testCases[3]), res[3], "<code>heronianTriangle()</code> should return <code>[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15], [10, 17, 21], [7, 24, 25], [8, 29, 35], [12, 17, 25], [4, 51, 53], [19, 20, 37],[16, 17, 17], [17, 17, 30], [16, 25, 39], [13, 20, 21]]</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// noprotect
function heronianTriangle (n) {
  // Good luck!

  return [];
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
