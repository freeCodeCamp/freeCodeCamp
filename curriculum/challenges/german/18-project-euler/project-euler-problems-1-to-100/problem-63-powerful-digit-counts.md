---
id: 5900f3ab1000cf542c50febe
title: 'Problem 63: Powerful digit counts'
challengeType: 1
forumTopicId: 302175
dashedName: problem-63-powerful-digit-counts
---

# --description--

Die 5-stellige Zahl, 16807 = 7<sup>5</sup>, ist ebenfalls eine fünfte Potenz. Ebenso ist die 9-stellige Zahl, 134217728 = 8<sup>9</sup>, eine neunte Potenz.

Vervollständige die Funktion so, dass sie die Anzahl der positiven ganzen Zahlen mit der Länge `n` und einer `n`-ten Potenz zurückgibt.

# --hints--

`powerfulDigitCounts(1)` sollte eine Zahl zurückgeben.

```js
assert(typeof powerfulDigitCounts(1) === 'number');
```

`powerfulDigitCounts(1)` sollte `9` zurückgeben.

```js
assert.strictEqual(powerfulDigitCounts(1), 9);
```

`powerfulDigitCounts(2)` sollte `6` zurückgeben.

```js
assert.strictEqual(powerfulDigitCounts(2), 6);
```

`powerfulDigitCounts(3)` sollte `5` zurückgeben.

```js
assert.strictEqual(powerfulDigitCounts(3), 5);
```

`powerfulDigitCounts(4)` sollte `4` zurückgeben.

```js
assert.strictEqual(powerfulDigitCounts(4), 4);
```

`powerfulDigitCounts(5)` sollte `3` zurückgeben.

```js
assert.strictEqual(powerfulDigitCounts(5), 3);
```

`powerfulDigitCounts(6)` sollte `3` zurückgeben.

```js
assert.strictEqual(powerfulDigitCounts(6), 3);
```

`powerfulDigitCounts(7)` sollte `2` zurückgeben.

```js
assert.strictEqual(powerfulDigitCounts(7), 2);
```

`powerfulDigitCounts(8)` sollte `2` zurückgeben.

```js
assert.strictEqual(powerfulDigitCounts(8), 2);
```

`powerfulDigitCounts(10)` sollte `2` zurückgeben.

```js
assert.strictEqual(powerfulDigitCounts(10), 2);
```

`powerfulDigitCounts(21)` sollte `1` zurückgeben.

```js
assert.strictEqual(powerfulDigitCounts(21), 1);
```

# --seed--

## --seed-contents--

```js
function powerfulDigitCounts(n) {

  return true;
}

powerfulDigitCounts(1);
```

# --solutions--

```js
function powerfulDigitCounts(n) {
  function countDigits(num) {
    let counter = 0;
    while (num > 0) {
      num = Math.floor(num / 10);
      counter++;
    }
    return counter;
  }

  let numbersCount = 0;

  let curNum = 1;
  while (curNum < 10) {
    let power = n;
    if (power === countDigits(curNum ** power)) {
      numbersCount++;
    }
    curNum++;
  }

  return numbersCount;
}
```
