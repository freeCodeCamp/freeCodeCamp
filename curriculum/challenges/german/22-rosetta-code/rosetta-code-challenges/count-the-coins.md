---
id: 59713bd26bdeb8a594fb9413
title: Zähle die Münzen
challengeType: 1
forumTopicId: 302238
dashedName: count-the-coins
---

# --description--

There are four types of common coins in US currency:

<ul>
  <li>quarters (25 cents)</li>
  <li>dimes (10 cents)</li>
  <li>nickels (5 cents), and</li>
  <li>pennies (1 cent)</li>
</ul>

<p>Es gibt sechs Möglichkeiten, 15 Cent zu wechseln:</p>

<ul>
  <li>A dime and a nickel</li>
  <li>Ein Groschen und 5 Pfennige</li>
  <li>3 Nickel</li>
  <li>2 Nickel und 5 Pfennig</li>
  <li>Ein Nickel und 10 Pfennige</li>
  <li>15 Pfennige</li>
</ul>

# --instructions--

Implementiere eine Funktion, um festzustellen, wie viele Möglichkeiten es gibt, für eine gegebene Eingabe `cents`, die einen Betrag von US-Pennies darstellt, unter Verwendung dieser gängigen Münzen zu wechseln.

# --hints--

`countCoins` sollte eine Funktion zurückgeben.

```js
assert(typeof countCoins === 'function');
```

`countCoins(15)` sollte `6` zurückgeben.

```js
assert.equal(countCoins(15), 6);
```

`countCoins(85)` sollte `163` zurückgeben.

```js
assert.equal(countCoins(85), 163);
```

`countCoins(100)` sollte `242` zurückgeben.

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
