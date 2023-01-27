---
id: 59713bd26bdeb8a594fb9413
title: Contare le monete
challengeType: 1
forumTopicId: 302238
dashedName: count-the-coins
---

# --description--

Ci sono quattro tipi di monete comuni nel dollaro americano:

<ul>
  <li>quarter (25 centesimi)</li>
  <li>dime (10 centesimi)</li>
  <li>nickel (5 centesimi), e</li>
  <li>penny (1 centesimo)</li>
</ul>

<p>Ci sono sei modi per ottenere 15 centesimi:</p>

<ul>
  <li>Un dime e un nickel</li>
  <li>Un dime e 5 penny</li>
  <li>3 nickel</li>
  <li>2 nickel e 5 penny</li>
  <li>Un nickel e 10 penny</li>
  <li>15 penny</li>
</ul>

# --instructions--

Implementa una funzione che determina quanti modi diversi ci sono per ottenere un certo input, `cents`, che rappresenta il numero di centesimi, usando queste monete comuni.

# --hints--

`countCoins` dovrebbe essere una funzione.

```js
assert(typeof countCoins === 'function');
```

`countCoins(15)` dovrebbe restituire `6`.

```js
assert.equal(countCoins(15), 6);
```

`countCoins(85)` dovrebbe restituire `163`.

```js
assert.equal(countCoins(85), 163);
```

`countCoins(100)` dovrebbe restituire `242`.

```js
assert.equal(countCoins(100), 242);
```

# --seed--

## --seed-contents--

```js
function countCoins(cents) {

  return true;
}
```

# --solutions--

```js
function countCoins(cents) {
  const operands = [1, 5, 10, 25];
  const targetsLength = cents + 1;
  const operandsLength = operands.length;
  const t = [1];

  for (let a = 0; a < operandsLength; a++) {
    for (let b = 1; b < targetsLength; b++) {
      // initialise undefined target
      t[b] = t[b] ? t[b] : 0;

      // accumulate target + operand ways
      t[b] += (b < operands[a]) ? 0 : t[b - operands[a]];
    }
  }

  return t[targetsLength - 1];
}
```
