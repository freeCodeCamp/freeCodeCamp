---
id: 5900f3981000cf542c50feab
title: 'Problema 44: Números pentagonais'
challengeType: 1
forumTopicId: 302111
dashedName: problem-44-pentagon-numbers
---

# --description--

Números pentagonais são gerados pela fórmula P<sub>n</sub> = `n`(3`n` − 1) / 2. Os primeiros dez números pentagonais são:

1, 5, 12, 22, 35, 51, 70, 92, 117, 145, ...

Pode ser visto que P<sub>4</sub> + P<sub>7</sub> = 22 + 70 = 92 = P<sub>8</sub>. No entanto, a sua diferença, 70 - 22 = 48, não forma um número pentagonal.

Encontre o par de números pentagonais, P<sub>j</sub> e P<sub>k</sub>, cuja soma e a diferença formem um número pentagonal e cuja equação D = |P<sub>k</sub> − P<sub>j</sub>| é minimizada. Qual o valor de D?

# --hints--

`pentagonNumbers()` deve retornar um número.

```js
assert(typeof pentagonNumbers() === 'number');
```

`pentagonNumbers()` deve retornar 5482660.

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
