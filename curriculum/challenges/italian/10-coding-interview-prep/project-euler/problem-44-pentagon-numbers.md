---
id: 5900f3981000cf542c50feab
title: 'Problema 44: numeri pentagonali'
challengeType: 1
forumTopicId: 302111
dashedName: problem-44-pentagon-numbers
---

# --description--

Numeri pentagonali sono generati dalla formula P<sub>n</sub>=`n`(3`n`−1)/2. I primi dieci numeri pentagonali sono:

1, 5, 12, 22, 35, 51, 70, 92, 117, 145, ...

Possiamo vedere che P<sub>4</sub> + P<sub>7</sub> = 22 + 70 = 92 = P<sub>8</sub>. D'altro canto, la loro differenza, 70 − 22 = 48, non è pentagonale.

Trova la coppia di numeri, P<sub>j</sub> and P<sub>k</sub>, per cui sia la loro somma che la loro differenza sono pentagonali e D = |P<sub>k</sub> − P<sub>j</sub>| è minimizzata; quale è il valore di D?

# --hints--

`pentagonNumbers()` dovrebbe restituire un numero.

```js
assert(typeof pentagonNumbers() === 'number');
```

`pentagonNumbers()` dovrebbe restituire 5482660.

```js
assert.strictEqual(pentagonNumbers(), 5482660);
```

# --seed--

## --seed-contents--

```js
function pentagonNumbers() {

  return true;
}

pentagonNumbers();
```

# --solutions--

```js
function pentagonNumbers() {
  function isPentagonal(num) {
  // Formula found by solving pentagonal number
  // equation for n.
  const n = (Math.sqrt((24 * num) + 1) + 1) / 6;
  return n % 1 === 0;
  }

  function pentagonal(num) {
    return (num * ((3 * num) - 1)) / 2;
  }
  let result;
  let i = 1;
  while (!result) {
  i++;
  const num1 = (i * ((3 * i) - 1)) / 2; // Pentagonal num formula
  const minDiff = num1 - (((i - 1) * ((3 * (i - 1)) - 1)) / 2);
  let j = i - 1;
  while (j > 0 && !result) {
  const num2 = (j * ((3 * j) - 1)) / 2;
  if (isPentagonal(num1 - num2) && isPentagonal(num1 + num2)) {
        result = num1 - num2;
      }
      j--;
    }
  }
  return result;
  }
```
