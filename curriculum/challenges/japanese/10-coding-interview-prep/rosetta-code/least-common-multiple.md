---
id: 5a23c84252665b21eecc7edf
title: 最小公倍数
challengeType: 5
forumTopicId: 302301
dashedName: least-common-multiple
---

# --description--

12 と 18 の最小公倍数は 36 です。なぜなら、12 は倍数 (12×3 = 36) そして 18 は倍数 (18×2=36) を持ち、36 より小さい両方の倍数となる正の整数はないからです。 特殊なケースとして、 *m* または *n* がゼロの場合、最小公倍数はゼロになります。 最小公倍数を計算する 1 つの方法は、*m* のすべての倍数を、*n* の倍数でもあるものが見つかるまで繰り返すことです。 [最大公約数](https://rosettacode.org/wiki/greatest common divisor) の *gcd* がすでにある場合、以下の公式で *lcm* を計算します。 ( \\operatorname{lcm}(m, n) = \\frac{|m \\times n|}{\\operatorname{gcd}(m, n)} )

# --instructions--

整数の配列の最小公倍数を計算してください。 *m* と *n* が指定されている場合、最小公倍数は、*m* と *n* の両方の倍数を持つ最小の正の整数となります。

# --hints--

`LCM` は関数とします。

```js
assert(typeof LCM == 'function');
```

`LCM([2, 4, 8])` は数値を返す必要があります。

```js
assert(typeof LCM([2, 4, 8]) == 'number');
```

`LCM([2, 4, 8])` は `8` を返す必要があります。

```js
assert.equal(LCM([2, 4, 8]), 8);
```

`LCM([4, 8, 12])` は `24` を返す必要があります。

```js
assert.equal(LCM([4, 8, 12]), 24);
```

`LCM([3, 4, 5, 12, 40])` は `120` を返す必要があります。

```js
assert.equal(LCM([3, 4, 5, 12, 40]), 120);
```

`LCM([11, 33, 90])` は `990` を返す必要があります。

```js
assert.equal(LCM([11, 33, 90]), 990);
```

`LCM([-50, 25, -45, -18, 90, 447])` は `67050` を返す必要があります。

```js
assert.equal(LCM([-50, 25, -45, -18, 90, 447]), 67050);
```

# --seed--

## --seed-contents--

```js
function LCM(A) {

}
```

# --solutions--

```js
function LCM(A) {
  var n = A.length,
    a = Math.abs(A[0]);
  for (var i = 1; i < n; i++) {
    var b = Math.abs(A[i]),
      c = a;
    while (a && b) {
      a > b ? (a %= b) : (b %= a);
    }
    a = Math.abs(c * A[i]) / (a + b);
  }
  return a;
}
```
