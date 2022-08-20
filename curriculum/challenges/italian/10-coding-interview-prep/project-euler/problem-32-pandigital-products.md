---
id: 5900f38c1000cf542c50fe9f
title: 'Problema 32: prodotti pandigitali'
challengeType: 1
forumTopicId: 301976
dashedName: problem-32-pandigital-products
---

# --description--

Possiamo dire che un numero di `n` cifre è pandigitale se usa tutte le cifre da 1 a `n` esattamente una volta; per esempio, il numero a 5 cifre 15234 è pandigitale per le cifre da 1 a 5.

Il prodotto 7259 è inusuale, in quanto l'identità 39 x 186 = 7254, contenente moltiplicando, moltiplicatore, e prodotto, è pandigitale per le cifre da 1 a 9.

Trova le somme di tutti i prodotti la cui identità moltiplicando/moltiplicatore/prodotto può essere scritta come pandigitale per le cifre da 1 a `n`.

**Indizio:** Alcuni prodotti possono essere ottenuti in più di un modo quindi assicurati di includerli una volta sola nella tua somma.

# --hints--

`pandigitalProducts(4)` dovrebbe restituire un numero.

```js
assert(typeof pandigitalProducts(4) === 'number');
```

`pandigitalProducts(4)` dovrebbe restituire `12`.

```js
assert.strictEqual(pandigitalProducts(4), 12);
```

`pandigitalProducts(6)` dovrebbe restituire `162`.

```js
assert.strictEqual(pandigitalProducts(6), 162);
```

`pandigitalProducts(7)` dovrebbe restituire `0`.

```js
assert.strictEqual(pandigitalProducts(7), 0);
```

`pandigitalProducts(8)` dovrebbe restituire `13458`.

```js
assert.strictEqual(pandigitalProducts(8), 13458);
```

`pandigitalProducts(9)` dovrebbe restituire `45228`.

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
