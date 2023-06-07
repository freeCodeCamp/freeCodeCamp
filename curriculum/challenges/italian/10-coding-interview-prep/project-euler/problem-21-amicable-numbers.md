---
id: 5900f3811000cf542c50fe94
title: 'Problema 21: Numeri amichevoli'
challengeType: 1
forumTopicId: 301851
dashedName: problem-21-amicable-numbers
---

# --description--

Si definisce d(`n`) la somma dei divisori propri di `n` (numeri inferiori a `n` che dividono `n` senza resto).

Se d(`a`) = `b` e d(`b`) = `a`, dove `a` ≠ `b`, allora `a` e `b` sono una coppia amichevole e `a` e `b` sono chiamati numeri amichevoli.

Ad esempio, i divisori propri di 220 sono 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 e 110; quindi d(220) = 284. I divisori propri di 284 sono 1, 2, 4, 71 e 142; quindi d(284) = 220.

Valutare la somma di tutti i numeri amichevoli inferiori a `n`.

# --hints--

`sumAmicableNum(1000)` dovrebbe restituire un numero.

```js
assert(typeof sumAmicableNum(1000) === 'number');
```

`sumAmicableNum(1000)` dovrebbe restituire 504.

```js
assert.strictEqual(sumAmicableNum(1000), 504);
```

`sumAmicableNum(2000)` dovrebbe restituire 2898.

```js
assert.strictEqual(sumAmicableNum(2000), 2898);
```

`sumAmicableNum(5000)` dovrebbe restituire 8442.

```js
assert.strictEqual(sumAmicableNum(5000), 8442);
```

`sumAmicableNum(10000)` dovrebbe restituire 31626.

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
