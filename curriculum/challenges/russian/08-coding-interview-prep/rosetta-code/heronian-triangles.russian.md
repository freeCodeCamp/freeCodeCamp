---
title: Heronian triangles
id: 595b98f8b5a2245e243aa831
challengeType: 5
forumTopicId: 302285
localeTitle: Херонические треугольники
---

## Description
<section id='description'>
<p> <a href="https://en.wikipedia.org/wiki/Heron&#x27;s formula" title="wp: формула Герона">Формула Героя</a> для области треугольника с учетом длины трех ее сторон <big>a,</big> <big>b</big> и <big>c</big> определяется следующим образом: </p><p> <big>$$ A = \ sqrt {s (sa) (sb) (sc)}, $$</big> </p><p> где <big>s</big> - половина периметра треугольника; то есть, </p><p> <big>$$ з = \ гидроразрыва {а + B + C} {2} $$.</big> </p><p> <a href="http://www.had2know.com/academics/heronian-triangles-generator-calculator.html" title="ссылка: http://www.had2know.com/academics/heronian-triangles-generator-calculator.html">Херонические треугольники</a> - это треугольники, стороны и области которых являются целыми числами. </p><p> Примером может служить треугольник со сторонами 3, 4, 5, площадь которых равна 6 (а по периметру - 12). </p><p> Заметим, что любой треугольник, чьи стороны все целые кратные 3, 4, 5; такие как 6, 8, 10, также будут иероническим треугольником. </p><p> Определите примитивный херонийский треугольник как хернийский треугольник, где наибольший общий делитель </p><p> всех трех сторон 1 (единство). </p><p> Это исключает, например, треугольник 6, 8, 10. </p> Задача: <p> Реализуйте функцию, основанную на формуле Героя, которая возвращает первые <code>n <sub>th</sub></code> упорядоченные треугольники в массиве массивов. </p>
</section>

## Instructions
<section id='instructions'>
Implement a function based on Hero's formula that returns the first <code>n<sub>th</sub></code> ordered triangles in an array of arrays.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>heronianTriangle</code> is a function.
    testString: assert(typeof heronianTriangle === 'function');
  - text: <code>heronianTriangle()</code> should return <code>[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17]]</code>
    testString: assert.deepEqual(heronianTriangle(testCases[0]), res[0]);
  - text: <code>heronianTriangle()</code> should return <code>[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15]],</code>
    testString: assert.deepEqual(heronianTriangle(testCases[1]), res[1]);
  - text: <code>heronianTriangle()</code> should return <code>[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15], [10, 17, 21], [7, 24, 25], [8, 29, 35], [12, 17, 25], [4, 51, 53]],</code>
    testString: assert.deepEqual(heronianTriangle(testCases[2]), res[2]);
  - text: <code>heronianTriangle()</code> should return <code>[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15], [10, 17, 21], [7, 24, 25], [8, 29, 35], [12, 17, 25], [4, 51, 53], [19, 20, 37],[16, 17, 17], [17, 17, 30], [16, 25, 39], [13, 20, 21]]</code>
    testString: assert.deepEqual(heronianTriangle(testCases[3]), res[3]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// noprotect
function heronianTriangle(n) {
  // Good luck!

  return [];
}

```

</div>

### After Tests
<div id='js-teardown'>

```js
const testCases = [10, 15, 20, 25];

const res = [
  [[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17]],
  [[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15]],
  [[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15], [10, 17, 21], [7, 24, 25], [8, 29, 35], [12, 17, 25], [4, 51, 53]],
  [[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15], [10, 17, 21], [7, 24, 25], [8, 29, 35], [12, 17, 25], [4, 51, 53], [19, 20, 37], [16, 17, 17], [17, 17, 30], [16, 25, 39], [13, 20, 21]]
];

```

</div>

</section>

## Solution
<section id='solution'>

```js
// noprotect
function heronianTriangle(n) {
  const list = [];
  const result = [];

  let j = 0;
  for (let c = 1; c <= 200; c++) {
    for (let b = 1; b <= c; b++) {
      for (let a = 1; a <= b; a++) {
        if (gcd(gcd(a, b), c) === 1 && isHeron(heronArea(a, b, c))) {
          list[j++] = new Array(a, b, c, heronArea(a, b, c));
        }
      }
    }
  }

  sort(list);

  for (let i = 0; i < n; i++) {
    result[i] = [list[i][0], list[i][1], list[i][2]];
  }

  return result;

  function heronArea(a, b, c) {
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }

  function isHeron(h) { return h % 1 === 0 && h > 0; }

  function gcd(a, b) {
    let leftover = 1;
    let dividend = a > b ? a : b;
    let divisor = a > b ? b : a;
    while (leftover !== 0) {
      leftover = dividend % divisor;
      if (leftover > 0) {
        dividend = divisor;
        divisor = leftover;
      }
    }
    return divisor;
  }

  function sort(arg) {
    let swapped = true;
    let temp = [];
    while (swapped) {
      swapped = false;
      for (let i = 1; i < arg.length; i++) {
        if (arg[i][4] < arg[i - 1][4] || arg[i][4] === arg[i - 1][4] && arg[i][3] < arg[i - 1][3]) {
          temp = arg[i];
          arg[i] = arg[i - 1];
          arg[i - 1] = temp;
          swapped = true;
        }
      }
    }
  }
}
```

</section>
