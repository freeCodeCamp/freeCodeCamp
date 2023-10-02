---
id: 5900f3811000cf542c50fe94
title: 'Problema 21: Números amigos'
challengeType: 1
forumTopicId: 301851
dashedName: problem-21-amicable-numbers
---

# --description--

Considere d(`n`) sendo igual à soma dos divisores próprios de `n` (divisores próprios de um número positivo `n` são todos os divisores inteiros positivos exceto o próprio `n`).

Se d(`a`) = `b` e d(`b`) = `a`, onde `a` ≠ `b`, então, `a` e `b` são um par amigável e tanto `a` quanto `b` são chamados de números amigos.

Por exemplo, os divisores próprios de 220 são 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 e 110. Portanto, d(220) = 284. Os divisores próprios de 284 são 1, 2, 4, 71 e 142. Então d(284) = 220.

Calcule a soma de todos os números amigos abaixo de `n`.

# --hints--

`sumAmicableNum(1000)` deve retornar um número.

```js
assert(typeof sumAmicableNum(1000) === 'number');
```

`sumAmicableNum(1000)` deve retornar 504.

```js
assert.strictEqual(sumAmicableNum(1000), 504);
```

`sumAmicableNum(2000)` deve retornar 2898.

```js
assert.strictEqual(sumAmicableNum(2000), 2898);
```

`sumAmicableNum(5000)` deve retornar 8442.

```js
assert.strictEqual(sumAmicableNum(5000), 8442);
```

`sumAmicableNum(10000)` deve retornar 31626.

```js
assert.strictEqual(sumAmicableNum(10000), 31626);
```

# --seed--

## --seed-contents--

```js
function sumAmicableNum(n) {

  return n;
}

sumAmicableNum(10000);
```

# --solutions--

```js
const sumAmicableNum = (n) => {
  const fsum = (n) => {
    let sum = 1;
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++)
      if (Math.floor(n % i) === 0)
        sum += i + Math.floor(n / i);
    return sum;
  };
  let d = [];
  let amicableSum = 0;
  for (let i=2; i<n; i++) d[i] = fsum(i);
  for (let i=2; i<n; i++) {
    let dsum = d[i];
    if (d[dsum]===i && i!==dsum) amicableSum += i+dsum;
  }
  return amicableSum/2;
};
```
