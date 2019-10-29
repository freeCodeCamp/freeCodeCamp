---
id: 5900f3781000cf542c50fe8b
challengeType: 5
title: 'Problem 12: Highly divisible triangular number'
forumTopicId: 301746
localeTitle: 'Задача 12: Высокое делимое треугольное число'
---

## Description
<section id='description'>
Последовательность чисел треугольника порождается добавлением натуральных чисел. Таким образом, 7-й номер треугольника будет 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. Первые десять терминов будут: <div style="text-align: center;"> 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ... </div> Перечислим коэффициенты первых семи чисел треугольника: <div style="padding-left: 4em;"> <b>1:</b> 1 </div><div style="padding-left: 4em;"> <b>3:</b> 1, 3 </div><div style="padding-left: 4em;"> <b>6:</b> 1, 2, 3, 6 </div><div style="padding-left: 4em;"> <b>10:</b> 1, 2, 5, 10 </div><div style="padding-left: 4em;"> <b>15:</b> 1, 3, 5, 15 </div><div style="padding-left: 4em;"> <b>21:</b> 1, 3, 7, 21 </div><div style="padding-left: 4em;"> <b>28:</b> 1, 2, 4, 7, 14, 28 </div> Мы видим, что 28 - это первое число треугольников, состоящее из пяти делителей. Каково значение первого числа треугольников для <code>n</code> делителей?
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>divisibleTriangleNumber(5)</code> should return 28.
    testString: assert.strictEqual(divisibleTriangleNumber(5), 28);
  - text: <code>divisibleTriangleNumber(23)</code> should return 630.
    testString: assert.strictEqual(divisibleTriangleNumber(23), 630);
  - text: <code>divisibleTriangleNumber(167)</code> should return 1385280.
    testString: assert.strictEqual(divisibleTriangleNumber(167), 1385280);
  - text: <code>divisibleTriangleNumber(374)</code> should return 17907120.
    testString: assert.strictEqual(divisibleTriangleNumber(374), 17907120);
  - text: <code>divisibleTriangleNumber(500)</code> should return 76576500.
    testString: assert.strictEqual(divisibleTriangleNumber(500), 76576500);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function divisibleTriangleNumber(n) {
  // Good luck!
  return true;
}

divisibleTriangleNumber(500);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function divisibleTriangleNumber(n) {
  let counter = 1;
  let triangleNumber = counter++;

  function getFactors(num) {
    let factors = [];

    let possibleFactor = 1;
    let sqrt = Math.sqrt(num);

    while (possibleFactor <= sqrt) {
      if (num % possibleFactor == 0) {
        factors.push(possibleFactor);
        var otherPossibleFactor = num / possibleFactor;
        if (otherPossibleFactor > possibleFactor) {
          factors.push(otherPossibleFactor);
        }
      }
      possibleFactor++;
    }

    return factors;
  }

  while (getFactors(triangleNumber).length < n) {
    triangleNumber += counter++;
  }
  console.log(triangleNumber)
  return triangleNumber;
}
```

</section>
