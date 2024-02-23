---
id: 595b98f8b5a2245e243aa831
title: ヘロンの三角形
challengeType: 1
forumTopicId: 302285
dashedName: heronian-triangles
---

# --description--

Hero's formula for the area of a triangle given the length of its three sides `a`, `b`, and `c` is given by:

$A = \\sqrt{s(s-a)(s-b)(s-c)},$

`s` は三角形の周囲の半分です。つまり、

$s=\\frac{a+b+c}{2}.$

ヘロンの三角形は、その辺と面積がすべて整数である三角形です。

例として、辺が `3, 4, 5` でその面積が`6` (そして、その周囲が`12`) の三角形が挙げられます。

辺が`6, 8, 10,`のように、`3, 4, 5`の整数の倍数である三角形もすべてヘロンの三角形となることを覚えておいてください。

原始ヘロン三角形を

3辺の最大公約数が `1` (単一) であるヘロン三角形として定義します。

例えば、`6, 8, 10.`の三角形はこれに当てはまりません。

# --instructions--

配列の配列の中にある最初の<code>n<sub>th</sub></code>番目までの三角形を返す、ヘロンの公式に基づく関数を作成してください。

# --hints--

`heronianTriangle` は関数とします。

```js
assert(typeof heronianTriangle === 'function');
```

`heronianTriangle(10)` は、`[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17]]`を返す必要があります。

```js
assert.deepEqual(heronianTriangle(testCases[0]), res[0]);
```

`heronianTriangle(15)` は、`[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15]],`を返す必要があります。

```js
assert.deepEqual(heronianTriangle(testCases[1]), res[1]);
```

`heronianTriangle(20)` は、`[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15], [10, 17, 21], [7, 24, 25], [8, 29, 35], [12, 17, 25], [4, 51, 53]],`を返す必要があります。

```js
assert.deepEqual(heronianTriangle(testCases[2]), res[2]);
```

`heronianTriangle(25)` は 、`[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15], [10, 17, 21], [7, 24, 25], [8, 29, 35], [12, 17, 25], [4, 51, 53], [19, 20, 37],[16, 17, 17], [17, 17, 30], [16, 25, 39], [13, 20, 21]]`を返す必要があります。

```js
assert.deepEqual(heronianTriangle(testCases[3]), res[3]);
```

# --seed--

## --after-user-code--

```js
const testCases = [10, 15, 20, 25];

const res = [
  [[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17]],
  [[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15]],
  [[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15], [10, 17, 21], [7, 24, 25], [8, 29, 35], [12, 17, 25], [4, 51, 53]],
  [[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15], [10, 17, 21], [7, 24, 25], [8, 29, 35], [12, 17, 25], [4, 51, 53], [19, 20, 37], [16, 17, 17], [17, 17, 30], [16, 25, 39], [13, 20, 21]]
];
```

## --seed-contents--

```js
function heronianTriangle(n) {


  return [];
}
```

# --solutions--

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
