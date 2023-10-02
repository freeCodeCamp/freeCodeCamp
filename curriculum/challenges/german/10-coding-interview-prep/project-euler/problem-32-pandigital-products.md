---
id: 5900f38c1000cf542c50fe9f
title: 'Problem 32: Pandigital products'
challengeType: 1
forumTopicId: 301976
dashedName: problem-32-pandigital-products
---

# --description--

Wir sagen, dass eine `n`-stellige Zahl pandigital ist, wenn sie alle Ziffern 1 bis `n` genau einmal verwendet; zum Beispiel ist die 5-stellige Zahl 15234 von 1 bis 5 pandigital.

Das Produkt 7254 ist ungewöhnlich, da die Identität 39 × 186 = 7254, die Multiplikand, Multiplikator und Produkt enthält, 1 bis 9 pandigital ist.

Finde die Summe aller Produkte, deren Multiplikand/Multiplikator/Produkt-Identität als 1 durch `n` pandigital geschrieben werden kann.

**Hinweis:** Einige Produkte können auf mehr als eine Weise erhalten werden, also achte darauf darauf, dass du sie nur einmal in deine Summe miteinbeziehst.

# --hints--

`pandigitalProducts(4)` sollte eine Zahl zurückgeben.

```js
assert(typeof pandigitalProducts(4) === 'number');
```

`pandigitalProducts(4)` sollte `12` zurückgeben.

```js
assert.strictEqual(pandigitalProducts(4), 12);
```

`pandigitalProducts(6)` sollte `162` zurückgeben.

```js
assert.strictEqual(pandigitalProducts(6), 162);
```

`pandigitalProducts(7)` sollte `0` zurückgeben.

```js
assert.strictEqual(pandigitalProducts(7), 0);
```

`pandigitalProducts(8)` sollte `13458` zurückgeben.

```js
assert.strictEqual(pandigitalProducts(8), 13458);
```

`pandigitalProducts(9)` sollte `45228` zurückgeben.

```js
assert.strictEqual(pandigitalProducts(9), 45228);
```

# --seed--

## --seed-contents--

```js
function pandigitalProducts(n) {

  return true;
}

pandigitalProducts(4);
```

# --solutions--

```js
function pandigitalProducts(n) {
  function is1toNPandigital(n, digitStr) {
    // check if length is n
    if (digitStr.length !== n) {
      return false;
    }
    // check if pandigital
    for (let i = digitStr.length; i > 0; i--) {
      if (digitStr.indexOf(i.toString()) === -1) {
        return false;
      }
    }
    return true;
  }
  function concatenateNums(...numbers) {
    let digitStr = '';
    for (let i = 0; i < numbers.length; i++) {
      digitStr += numbers[i].toString();
    }
    return digitStr;
  }

  const pandigitalNums = [];
  const limit = 10 ** Math.floor(n / 2) - 1;
  let sum = 0;
  for (let mult1 = 2; mult1 < limit; mult1++) {
    for (let mult2 = 2; mult2 < limit; mult2++) {
      const product = mult1 * mult2;
      const concatenated = concatenateNums(mult1, mult2, product);
      if (concatenated.length > n) {
        break;
      } else if (concatenated.length < n) {
        continue;
      }
      if (
        is1toNPandigital(n, concatenated) &&
        !pandigitalNums.includes(product)
      ) {
        pandigitalNums.push(product);
        sum += product;
      }
    }
  }
  return sum;
}
```
