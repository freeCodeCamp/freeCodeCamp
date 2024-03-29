---
id: 5900f3811000cf542c50fe94
title: 'Problem 21: Befreundete Zahlen'
challengeType: 1
forumTopicId: 301851
dashedName: problem-21-amicable-numbers
---

# --description--

Lass d(`n`) als die Summe der richtigen Teiler von `n` definiert sein (Zahlen kleiner als `n`, die sich gleichmäßig in `n` teilen).

Wenn d(`a`) = `b` und d(`b`) = `a` ist, wobei `a` ≠ `b` ist, dann sind `a` und `b` ein freundschaftliches Paar und jedes von `a` und `b` wird als befreundete Zahl bezeichnet.

Zum Beispiel sind die richtigen Teiler von 220 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 und 110; daher ist d(220) = 284. Die richtigen Teiler von 284 sind 1, 2, 4, 71 und 142; also ist d(284) = 220.

Berechne die Summe aller gütigen Zahlen unter `n`.

# --hints--

`sumAmicableNum(1000)` sollte eine Zahl zurückgeben.

```js
assert(typeof sumAmicableNum(1000) === 'number');
```

`sumAmicableNum(1000)` sollte 504 zurückgeben.

```js
assert.strictEqual(sumAmicableNum(1000), 504);
```

`sumAmicableNum(2000)` sollte 2898 zurückgeben.

```js
assert.strictEqual(sumAmicableNum(2000), 2898);
```

`sumAmicableNum(5000)` sollte 8442 zurückgeben.

```js
assert.strictEqual(sumAmicableNum(5000), 8442);
```

`sumAmicableNum(10000)` sollte 31626 zurückgeben.

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
