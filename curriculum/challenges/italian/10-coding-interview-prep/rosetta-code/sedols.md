---
id: 59d9c6bc214c613ba73ff012
title: SEDOLs
challengeType: 1
forumTopicId: 302305
dashedName: sedols
---

# --description--

<abbr title="Stock Exchange Daily Official List">SEDOL</abbr> è una lista di numeri di identificazione di sicurezza rilasciati dal London Stock Exchange.

Per ogni elenco di numeri di 6 cifre <abbr title="Stock Exchange Daily Official List">SEDOL</abbr>, calcolare e aggiungere la cifra di checksum. Cioè, data la stringa di input a sinistra, la funzione dovrebbe restituire la stringa corrispondente a destra:

<pre>
710889 => 7108899
B0YBKJ => B0YBKJ7
406566 => 4065663
B0YBLH => B0YBLH2
228276 => 2282765
B0YBKL => B0YBKL9
557910 => 5579107
B0YBKR => B0YBKR5
585284 => 5852842
B0YBKT => B0YBKT7
B00030 => B000300
</pre>

Controllare che ogni input sia formato correttamente, soprattutto per quanto riguarda i caratteri validi consentiti in una stringa SEDOL. La tua funzione dovrebbe restituire `null` per un input non valido.

# --hints--

`sedol` dovrebbe essere una funzione.

```js
assert(typeof sedol === 'function');
```

`sedol('a')` dovrebbe restituire null.

```js
assert(sedol('a') === null);
```

`sedol('710889')` dovrebbe restituire '7108899'.

```js
assert(sedol('710889') === '7108899');
```

`sedol('BOATER')` dovrebbe restituire null.

```js
assert(sedol('BOATER') === null);
```

`sedol('228276')` dovrebbe restituire '2282765'.

```js
assert(sedol('228276') === '2282765');
```

# --seed--

## --seed-contents--

```js
function sedol(input) {
  const checkSum = 0

  return checkSum;
}
```

# --solutions--

```js
function sedol(input) {
  const checkDigit = sedolCheckDigit(input);
  if (checkDigit !== null) {
    return input + checkDigit;
  }
  return null;
}

const weight = [1, 3, 1, 7, 3, 9, 1];
function sedolCheckDigit(char6) {
  if (char6.search(/^[0-9BCDFGHJKLMNPQRSTVWXYZ]{6}$/) === -1) {
    return null;
  }

  let sum = 0;
  for (let i = 0; i < char6.length; i++) {
    sum += weight[i] * parseInt(char6.charAt(i), 36);
  }
  const checkSum = (10 - (sum % 10)) % 10;
  return checkSum.toString();
}
```
