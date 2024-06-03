---
id: 59713bd26bdeb8a594fb9413
title: Cuenta las monedas
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

<p>Hay seis formas de dar cambio por 15 centavos:</p>

<ul>
  <li>A dime and a nickel</li>
  <li>Una moneda de diez centavos y 5 centavos</li>
  <li>3 monedas de cinco centavos</li>
  <li>2 monedas de cinco centavos y 5 centavos</li>
  <li>Una moneda de cinco centavos y 10 centavos</li>
  <li>15 centavos</li>
</ul>

# --instructions--

Implemente una función para determinar cuántas formas hay de cambiar una entrada dada, `cents`, que representa una cantidad de centavos estadounidenses usando estas monedas comunes.

# --hints--

`countCoins` debería ser una función.

```js
assert(typeof countCoins === 'function');
```

`countCoins(15)` debe devolver `6`.

```js
assert.equal(countCoins(15), 6);
```

`countCoins(85)` debe devolver `163`.

```js
assert.equal(countCoins(85), 163);
```

`countCoins(100)` debe devolver `242`.

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
