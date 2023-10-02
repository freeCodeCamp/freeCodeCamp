---
id: 595668ca4cfe1af2fb9818d4
title: Serie di Harshad o Niven
challengeType: 1
forumTopicId: 302281
dashedName: harshad-or-niven-series
---

# --description--

I numeri di Harshad o Niven sono numeri interi positivi ≥ 1 che sono divisibili per la somma delle loro cifre.

Ad esempio, `42` è un numero di Harshad dato che `42` è divisibile per `(4 + 2)` senza resto.

Assumiamo che la serie sia definita con i numeri in ordine crescente.

# --instructions--

Implementare una funzione per generare elementi successivi della sequenza di Harshad.

Usalo per restituire un array con dieci elementi della sequenza, iniziando con il primo numero di Harshad maggiore di `n`.

# --hints--

`isHarshadOrNiven` dovrebbe essere una funzione.

```js
assert(typeof isHarshadOrNiven === 'function');
```

`isHarshadOrNiven(10)` dovrebbe restituire `[12, 18, 20, 21, 24, 27, 30, 36, 40, 42]`

```js
assert.deepEqual(isHarshadOrNiven(10), [12, 18, 20, 21, 24, 27, 30, 36, 40, 42]);
```

`isHarshadOrNiven(400)` dovrebbe restituire `[402, 405, 407, 408, 410, 414, 420, 423, 432, 440]`

```js
assert.deepEqual(isHarshadOrNiven(400), [402, 405, 407, 408, 410, 414, 420, 423, 432, 440]);
```

`isHarshadOrNiven(1000)` dovrebbe restituire `[1002, 1008, 1010, 1011, 1012, 1014, 1015, 1016, 1017, 1020]`

```js
assert.deepEqual(isHarshadOrNiven(1000), [1002, 1008, 1010, 1011, 1012, 1014, 1015, 1016, 1017, 1020]);
```

# --seed--

## --seed-contents--

```js
function isHarshadOrNiven(n) {
  const res = [];

  return res;
}
```

# --solutions--

```js
function isHarshadOrNiven(n) {
  function isHarshad(num) {
    let s = 0;
    const nStr = num.toString();
    for (let i = 0; i < nStr.length; ++i) {
      s += parseInt(nStr.charAt(i), 10);
    }
    return n % s === 0;
  }

  const res = [];
  let count = 0;

  while (count < 10) {
    n++;
    if (isHarshad(n)) {
      count++;
      res.push(n);
    }
  }

  return res;
}
```
