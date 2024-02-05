---
id: 595668ca4cfe1af2fb9818d4
title: Harshad- oder Niven-Serie
challengeType: 1
forumTopicId: 302281
dashedName: harshad-or-niven-series
---

# --description--

The Harshad or Niven numbers are positive integers ≥ 1 that are divisible by the sum of their digits.

Zum Beispiel ist `42` eine Harshad-Zahl wie `42` durch `(4 + 2)` ohne Rest teilbar.

Angenommen, die Reihe ist definiert als die Zahlen in aufsteigender Reihenfolge.

# --instructions--

Implementiere eine Funktion zur Erzeugung aufeinanderfolgender Mitglieder der Harshad-Sequenz.

Verwende diese Funktion, um eine Anordnung mit zehn Mitgliedern der Sequenz zurückzugeben, beginnend mit der ersten Harshad-Zahl, die größer als `n` ist.

# --hints--

`isHarshadOrNiven` sollte eine Funktion sein.

```js
assert(typeof isHarshadOrNiven === 'function');
```

`isHarshadOrNiven(10)` sollte `[12, 18, 20, 21, 24, 27, 30, 36, 40, 42]` zurückgeben

```js
assert.deepEqual(isHarshadOrNiven(10), [12, 18, 20, 21, 24, 27, 30, 36, 40, 42]);
```

`isHarshadOrNiven(400)` sollte `[402, 405, 407, 408, 410, 414, 420, 423, 432, 440]` zurückgeben

```js
assert.deepEqual(isHarshadOrNiven(400), [402, 405, 407, 408, 410, 414, 420, 423, 432, 440]);
```

`isHarshadOrNiven(1000)` sollte `[1002, 1008, 1010, 1011, 1012, 1014, 1015, 1016, 1017, 1020]` zurückgeben

```js
assert.deepEqual(isHarshadOrNiven(1000), [1002, 1008, 1010, 1011, 1012, 1014, 1015, 1016, 1017, 1020]);
```

# --seed--

## --seed-contents--

```js
function isHarshadOrNiven(n) {
  const res = [];

  return res;
}
```

# --solutions--

```js
function isHarshadOrNiven(n) {
  function isHarshad(num) {
    let s = 0;
    const nStr = num.toString();
    for (let i = 0; i < nStr.length; ++i) {
      s += parseInt(nStr.charAt(i), 10);
    }
    return n % s === 0;
  }

  const res = [];
  let count = 0;

  while (count < 10) {
    n++;
    if (isHarshad(n)) {
      count++;
      res.push(n);
    }
  }

  return res;
}
```
