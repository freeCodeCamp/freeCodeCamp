---
id: 59713bd26bdeb8a594fb9413
title: Count the coins
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

<p>There are six ways to make change for 15 cents:</p>

<ul>
  <li>A dime and a nickel</li>
  <li>A dime and 5 pennies</li>
  <li>3 nickels</li>
  <li>2 nickels and 5 pennies</li>
  <li>A nickel and 10 pennies</li>
  <li>15 pennies</li>
</ul>

# --instructions--

Implement a function to determine how many ways there are to make change for a given input, `cents`, that represents an amount of US pennies using these common coins.

# --hints--

`countCoins` should be a function.

```js
assert(typeof countCoins === 'function');
```

`countCoins(15)` should return `6`.

```js
assert.equal(countCoins(15), 6);
```

`countCoins(85)` should return `163`.

```js
assert.equal(countCoins(85), 163);
```

`countCoins(100)` should return `242`.

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
