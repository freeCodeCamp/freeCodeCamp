---
id: 5900f3ab1000cf542c50febe
title: 'Problema 63: Contagem poderosa de algarismos'
challengeType: 1
forumTopicId: 302175
dashedName: problem-63-powerful-digit-counts
---

# --description--

O número de 5 algarismos, 16807 = 7<sup>5</sup>, também é uma quinta potência. Da mesma forma, o número de 9 algarismos, 134217728 = 8<sup>9</sup>, é uma nona potência.

Complete a função para que ela retorne quantos números inteiros e positivos são da `n`-ésima potência e de comprimento `n`.

# --hints--

`powerfulDigitCounts(1)` deve retornar um número.

```js
assert(typeof powerfulDigitCounts(1) === 'number');
```

`powerfulDigitCounts(1)` deve retornar `9`.

```js
assert.strictEqual(powerfulDigitCounts(1), 9);
```

`powerfulDigitCounts(2)` deve retornar `6`.

```js
assert.strictEqual(powerfulDigitCounts(2), 6);
```

`powerfulDigitCounts(3)` deve retornar `5`.

```js
assert.strictEqual(powerfulDigitCounts(3), 5);
```

`powerfulDigitCounts(4)` deve retornar `4`.

```js
assert.strictEqual(powerfulDigitCounts(4), 4);
```

`powerfulDigitCounts(5)` deve retornar `3`.

```js
assert.strictEqual(powerfulDigitCounts(5), 3);
```

`powerfulDigitCounts(6)` deve retornar `3`.

```js
assert.strictEqual(powerfulDigitCounts(6), 3);
```

`powerfulDigitCounts(7)` deve retornar `2`.

```js
assert.strictEqual(powerfulDigitCounts(7), 2);
```

`powerfulDigitCounts(8)` deve retornar `2`.

```js
assert.strictEqual(powerfulDigitCounts(8), 2);
```

`powerfulDigitCounts(10)` deve retornar `2`.

```js
assert.strictEqual(powerfulDigitCounts(10), 2);
```

`powerfulDigitCounts(21)` deve retornar `1`.

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
