---
id: 5a23c84252665b21eecc7edf
title: Mínimo múltiplo comum
challengeType: 1
forumTopicId: 302301
dashedName: least-common-multiple
---

# --description--

The least common multiple of 12 and 18 is 36, because 12 is a factor (12 × 3 = 36), and 18 is a factor (18 × 2 = 36), and there is no positive integer less than 36 that has both factors. As a special case, if either $m$ or $n$ is zero, then the least common multiple is zero. One way to calculate the least common multiple is to iterate all the multiples of $m$, until you find one that is also a multiple of $n$. If you already have $gcd$ for <a href="https://rosettacode.org/wiki/Greatest_common_divisor" target="_blank" rel="noopener noreferrer nofollow">greatest common divisor</a>, then this formula calculates $lcm$.

$$ \\operatorname{lcm}(m, n) = \\frac{|m \\times n|}{\\operatorname{gcd}(m, n)} $$

# --instructions--

Calcule o mínimo múltiplo comum de um array de números inteiros. Dados *m* e *n*, o mínimo múltiplo comum é o menor número inteiro positivo que tenha tanto *m* quanto *n* como fatores.

# --hints--

`LCM` deve ser uma função.

```js
assert(typeof LCM == 'function');
```

`LCM([2, 4, 8])` deve retornar um número.

```js
assert(typeof LCM([2, 4, 8]) == 'number');
```

`LCM([2, 4, 8])` deve retornar `8`.

```js
assert.equal(LCM([2, 4, 8]), 8);
```

`LCM([4, 8, 12])` deve retornar `24`.

```js
assert.equal(LCM([4, 8, 12]), 24);
```

`LCM([3, 4, 5, 12, 40])` deve retornar `120`.

```js
assert.equal(LCM([3, 4, 5, 12, 40]), 120);
```

`LCM([11, 33, 90])` deve retornar `990`.

```js
assert.equal(LCM([11, 33, 90]), 990);
```

`LCM([-50, 25, -45, -18, 90, 447])` deve retornar `67050`.

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
