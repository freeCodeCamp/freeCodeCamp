---
id: 59713bd26bdeb8a594fb9413
title: Contar moedas
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

<p>Há seis maneiras de fazer troco com 15 centavos:</p>

<ul>
  <li>A dime and a nickel</li>
  <li>Um dime e 5 pennies</li>
  <li>3 nickels</li>
  <li>2 nickels e 5 pennies</li>
  <li>Um nickel e 10 pennies</li>
  <li>15 pennies</li>
</ul>

# --instructions--

Implemente uma função para determinar quantas maneiras há para fazer troco para uma determinada entrada, `cents`, que representa uma quantidade de centavos americanos usando essas moedas comuns.

# --hints--

`countCoins` deve ser uma função.

```js
assert(typeof countCoins === 'function');
```

`countCoins(15)` deve retornar `6`.

```js
assert.equal(countCoins(15), 6);
```

`countCoins(85)` deve retornar `163`.

```js
assert.equal(countCoins(85), 163);
```

`countCoins(100)` deve retornar `242`.

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
