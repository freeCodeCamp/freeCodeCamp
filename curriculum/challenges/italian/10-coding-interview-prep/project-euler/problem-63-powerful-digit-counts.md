---
id: 5900f3ab1000cf542c50febe
title: 'Problema 63: Conteggio cifre potenti'
challengeType: 1
forumTopicId: 302175
dashedName: problem-63-powerful-digit-counts
---

# --description--

Il numero a 5 cifre, 16807 = 7<sup>5</sup>, è anche una quinta potenza. Analogamente, il numero a 9 cifre, 134217728 = 8<sup>9</sup>, è una nona potenza.

Completa la funzione in modo che restituisca quanti interi positivi siano di lunghezza `n` e `n`ma potenza.

# --hints--

`powerfulDigitCounts(1)` dovrebbe restituire un numero.

```js
assert(typeof powerfulDigitCounts(1) === 'number');
```

`powerfulDigitCounts(1)` dovrebbe restituire `9`.

```js
assert.strictEqual(powerfulDigitCounts(1), 9);
```

`powerfulDigitCounts(2)` dovrebbe restituire `6`.

```js
assert.strictEqual(powerfulDigitCounts(2), 6);
```

`powerfulDigitCounts(3)` dovrebbe restituire `5`.

```js
assert.strictEqual(powerfulDigitCounts(3), 5);
```

`powerfulDigitCounts(4)` dovrebbe restituire `4`.

```js
assert.strictEqual(powerfulDigitCounts(4), 4);
```

`powerfulDigitCounts(5)` dovrebbe restituire `3`.

```js
assert.strictEqual(powerfulDigitCounts(5), 3);
```

`powerfulDigitCounts(6)` dovrebbe restituire `3`.

```js
assert.strictEqual(powerfulDigitCounts(6), 3);
```

`powerfulDigitCounts(7)` dovrebbe restituire `2`.

```js
assert.strictEqual(powerfulDigitCounts(7), 2);
```

`powerfulDigitCounts(8)` dovrebbe restituire `2`.

```js
assert.strictEqual(powerfulDigitCounts(8), 2);
```

`powerfulDigitCounts(10)` dovrebbe restituire `2`.

```js
assert.strictEqual(powerfulDigitCounts(10), 2);
```

`powerfulDigitCounts(21)` dovrebbe restituire `1`.

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
