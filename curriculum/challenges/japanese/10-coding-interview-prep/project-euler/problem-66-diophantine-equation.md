---
id: 5900f3ae1000cf542c50fec1
title: '問題 66: ディオファントス方程式'
challengeType: 1
forumTopicId: 302178
dashedName: problem-66-diophantine-equation
---

# --description--

次のような二次のディオファントス方程式を考えます。

<div style='text-align: center;'>x<sup>2</sup> – Dy<sup>2</sup> = 1</div>

例えば、D=13 のとき、x の最小解は 649<sup>2</sup> – 13×180<sup>2</sup> = 1 です。

D が平方数のとき、正整数の中に解は存在しないと想定できます。

D = {2, 3, 5, 6, 7} に対する x の最小解を求めると、以下が得られます。

<div style='margin-left: 2em;'>
  3<sup>2</sup> – 2×2<sup>2</sup> = 1<br>
  2<sup>2</sup> – 3×1<sup>2</sup> = 1<br>
  <strong><span style='color: red;'>9</span></strong><sup>2</sup> – 5×4<sup>2</sup> = 1<br>
  5<sup>2</sup> – 6×2<sup>2</sup> = 1<br>
  8<sup>2</sup> – 7×3<sup>2</sup> = 1<br>
</div>

したがって、D ≤ 7 に対する `x` の最小解を考えると、D=5 のときに `x` が最大になります。

`x` が最大になるような 、`x` の最小解における値 D (≤ `n`) を求めなさい。

# --hints--

`diophantineEquation(7)` は数値を返す必要があります。

```js
assert(typeof diophantineEquation(7) === 'number');
```

`diophantineEquation(7)` は `5` を返す必要があります。

```js
assert.strictEqual(diophantineEquation(7), 5);
```

`diophantineEquation(100)` は `61` を返す必要があります。

```js
assert.strictEqual(diophantineEquation(100), 61);
```

`diophantineEquation(409)` は `409` を返す必要があります。

```js
assert.strictEqual(diophantineEquation(409), 409);
```

`diophantineEquation(500)` は `421` を返す必要があります。

```js
assert.strictEqual(diophantineEquation(500), 421);
```

`diophantineEquation(1000)` は `661` を返す必要があります。

```js
assert.strictEqual(diophantineEquation(1000), 661);
```

# --seed--

## --seed-contents--

```js
function diophantineEquation(n) {

  return true;
}

diophantineEquation(7);
```

# --solutions--

```js
function diophantineEquation(n) {
  // Based on https://www.mathblog.dk/project-euler-66-diophantine-equation/
  function isSolution(D, numerator, denominator) {
    return numerator * numerator - BigInt(D) * denominator * denominator === 1n;
  }

  let result = 0;
  let biggestX = 0;

  for (let D = 2; D <= n; D++) {
    let boundary = Math.floor(Math.sqrt(D));
    if (boundary ** 2 === D) {
      continue;
    }

    let m = 0n;
    let d = 1n;
    let a = BigInt(boundary);

    let [numerator, prevNumerator] = [a, 1n];

    let [denominator, prevDenominator] = [1n, 0n];

    while (!isSolution(D, numerator, denominator)) {
      m = d * a - m;
      d = (BigInt(D) - m * m) / d;
      a = (BigInt(boundary) + m) / d;

      [numerator, prevNumerator] = [a * numerator + prevNumerator, numerator];
      [denominator, prevDenominator] = [
        a * denominator + prevDenominator,
        denominator
      ];
    }

    if (numerator > biggestX) {
      biggestX = numerator;
      result = D;
    }
  }
  return result;
}
```
