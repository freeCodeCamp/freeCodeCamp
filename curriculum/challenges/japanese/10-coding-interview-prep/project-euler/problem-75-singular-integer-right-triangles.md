---
id: 5900f3b71000cf542c50feca
title: '問題 75: 単一の整数直角三角形'
challengeType: 1
forumTopicId: 302188
dashedName: problem-75-singular-integer-right-triangles
---

# --description--

鉄線を折り曲げて 3 辺の長さが整数である直角三角形を作る場合、その作り方が 1 通りしかない鉄線の最短長は 12 cm であることが分かっていますが、他にも数多くの例があります。

<div style='margin-left: 4em;'>
  <strong>12 cm:</strong> (3,4,5)<br>
  <strong>24 cm:</strong> (6,8,10)<br>
  <strong>30 cm:</strong> (5,12,13)<br>
  <strong>36 cm:</strong> (9,12,15)<br>
  <strong>40 cm:</strong> (8,15,17)<br>
  <strong>48 cm:</strong> (12,16,20)<br><br>
</div>

対照的に、ある長さの鉄線 (例えば 20 cm) は、3 辺の長さが整数である直角三角形に折り曲げることができません。また、長さによってはそのような折り曲げ方が 2 通り以上あり、例えば 120 cm の場合、3 辺の長さが整数である直角三角形を作る折り曲げ方が 3 通りあります。

<div style='margin-left: 4em;'>
  <strong>120 cm:</strong> (30,40,50), (20,48,52), (24,45,51)<br><br>
</div>

L を鉄線の長さとします。3 辺の長さが整数である直角三角形を作る折り曲げ方が 1 通りしかないような L の値は、`n` 以下でいくつありますか。

# --hints--

`singularIntRightTriangles(48)` は数値を返す必要があります。

```js
assert(typeof singularIntRightTriangles(48) === 'number');
```

`singularIntRightTriangles(48)` は `6` を返す必要があります。

```js
assert.strictEqual(singularIntRightTriangles(48), 6);
```

`singularIntRightTriangles(700000)` は `75783` を返す必要があります。

```js
assert.strictEqual(singularIntRightTriangles(700000), 75783);
```

`singularIntRightTriangles(1000000)` は `107876` を返す必要があります。

```js
assert.strictEqual(singularIntRightTriangles(1000000), 107876);
```

`singularIntRightTriangles(1500000)` は `161667` を返す必要があります。

```js
assert.strictEqual(singularIntRightTriangles(1500000), 161667);
```

# --seed--

## --seed-contents--

```js
function singularIntRightTriangles(n) {

  return true;
}

singularIntRightTriangles(48);
```

# --solutions--

```js
function singularIntRightTriangles(limit) {
  function euclidFormula(m, n) {
    return [m ** 2 - n ** 2, 2 * m * n, m ** 2 + n ** 2];
  }

  function gcd(numberA, numberB) {
    if (numberB === 0) {
      return numberA;
    }
    return gcd(numberB, numberA % numberB);
  }

  function notBothOdd(numberA, numberB) {
    return (numberA + numberB) % 2 === 1;
  }

  function areCoprime(numberA, numberB) {
    return gcd(numberA, numberB) === 1;
  }

  const trianglesWithPerimeter = new Array(limit + 1).fill(0);
  const mLimit = Math.sqrt(limit / 2);

  for (let m = 2; m < mLimit; m++) {
    for (let n = 1; n < m; n++) {
      if (notBothOdd(m, n) && areCoprime(m, n)) {
        const [sideA, sideB, sideC] = euclidFormula(m, n);
        const perimeter = sideA + sideB + sideC;
        let curPerimeter = perimeter;
        while (curPerimeter <= limit) {
          trianglesWithPerimeter[curPerimeter]++;
          curPerimeter += perimeter;
        }
      }
    }
  }
  return trianglesWithPerimeter.filter(trianglesCount => trianglesCount === 1)
    .length;
}
```
