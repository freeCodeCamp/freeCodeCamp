---
id: 5a23c84252665b21eecc7edf
title: Mínimo múltiplo comum
challengeType: 1
forumTopicId: 302301
dashedName: least-common-multiple
---

# --description--

O mínimo múltiplo comum de 12 e 18 é 36, porque 12 é um fator (12 × 3 = 36) e 18 é um fator (18 × 2 = 36). Além disso, não há nenhum inteiro positivo menor que 36 que tenha ambos os fatores. Por ser um caso especial, se $m$ ou $n$ for zero, o mínimo múltiplo comum é zero. Uma maneira de calcular o mínimo múltiplo comum é iterar todos os múltiplos de $m$, até encontrar um que também seja múltiplo de $n$. Se você já tiver o $gcd$ para o <a href="https://rosettacode.org/wiki/Greatest_common_divisor" target="_blank" rel="noopener noreferrer nofollow">máximo divisor comum</a>, esta fórmula calcula o $lcm$.

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
