---
title: Heronian triangles
id: 595b98f8b5a2245e243aa831
challengeType: 5
forumTopicId: 302285
---

## Description
<section id='description'>
<a href="https://en.wikipedia.org/wiki/Heron's formula" title="wp: Heron's formula" target="_blank">Hero's formula</a> for the area of a triangle given the length of its three sides <big> a,</big> <big>b,</big> and <big>c</big> is given by:
<span style="margin-left: 2em;"><big>$A = \sqrt{s(s-a)(s-b)(s-c)},$</big></span>
where <big>s</big> is half the perimeter of the triangle; that is,
<span style="margin-left: 2em;"><big>$s=\frac{a+b+c}{2}.$</big></span>
Heronian triangles are triangles whose sides and area are all integers.
An example is the triangle with sides <code>3, 4, 5</code> whose area is <code>6</code> (and whose perimeter is <code>12</code>).
Note that any triangle whose sides are all an integer multiple of <code>3, 4, 5</code>; such as <code>6, 8, 10,</code> will also be a Heronian triangle.
Define a Primitive Heronian triangle as a Heronian triangle where the greatest common divisor
of all three sides is <code>1</code> (unity).
This will exclude, for example, triangle <code>6, 8, 10.</code>
</section>

## Instructions
<section id='instructions'>
Implement a function based on Hero's formula that returns the first <code>n<sub>th</sub></code> ordered triangles in an array of arrays.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>heronianTriangle</code> should be a function.
    testString: assert(typeof heronianTriangle === 'function');
  - text: <code>heronianTriangle(10)</code> should return <code>[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17]]</code>
    testString: assert.deepEqual(heronianTriangle(testCases[0]), res[0]);
  - text: <code>heronianTriangle(15)</code> should return <code>[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15]],</code>
    testString: assert.deepEqual(heronianTriangle(testCases[1]), res[1]);
  - text: <code>heronianTriangle(20)</code> should return <code>[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15], [10, 17, 21], [7, 24, 25], [8, 29, 35], [12, 17, 25], [4, 51, 53]],</code>
    testString: assert.deepEqual(heronianTriangle(testCases[2]), res[2]);
  - text: <code>heronianTriangle(25)</code> should return <code>[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15], [10, 17, 21], [7, 24, 25], [8, 29, 35], [12, 17, 25], [4, 51, 53], [19, 20, 37],[16, 17, 17], [17, 17, 30], [16, 25, 39], [13, 20, 21]]</code>
    testString: assert.deepEqual(heronianTriangle(testCases[3]), res[3]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function heronianTriangle(n) {


  return [];
}
```

</div>


### After Test
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
