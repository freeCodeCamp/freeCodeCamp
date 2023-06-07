---
id: 5900f37d1000cf542c50fe90
title: 'Problema 17: conteggio delle lettere dei numeri'
challengeType: 1
forumTopicId: 301804
dashedName: problem-17-number-letter-counts
---

# --description--

Se i numeri da 1 a 5 fossero scritti in parole in inglese: one, two, three, four, five, allora ci sono 3 + 3 + 5 + 4 + 4 = 19 lettere usate in totale.

Se tutti i numeri da 1 al dato limite inclusivo `limit` fossero scritti in parole in inglese, quante lettere sarebbero usate?

**Nota:** Non contare gli spazi o i trattini. Per esempio, 342 (three hundred and forty-two) contiene 23 lettere e 115 (one hundred and fifteen) contiene 20 lettere. L'uso di "and" scrivendo i numeri segue l'uso britannico.

# --hints--

`numberLetterCounts(5)` dovrebbe restituire un numero.

```js
assert(typeof numberLetterCounts(5) === 'number');
```

`numberLetterCounts(5)` dovrebbe restituire 19.

```js
assert.strictEqual(numberLetterCounts(5), 19);
```

`numberLetterCounts(150)` dovrebbe restituire 1903.

```js
assert.strictEqual(numberLetterCounts(150), 1903);
```

`numberLetterCounts(1000)` dovrebbe restituire 21124.

```js
assert.strictEqual(numberLetterCounts(1000), 21124);
```

# --seed--

## --seed-contents--

```js
function numberLetterCounts(limit) {

  return true;
}

numberLetterCounts(5);
```

# --solutions--

```js
function numberLetterCounts(limit) {
  const dictionary = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    1000: 'onethousand'
  };

  let numString = '';

  function convertToString(num) {
    // check dictionary for number
    if (dictionary[num]) {
      return dictionary[num];
    } else {
      const hundreds = Math.floor(num / 100);
      const tens =  Math.floor((num / 10) % 10) * 10;
      const remainder = num % 10;

      let tempStr = '';

      if (hundreds === 0) {
        tempStr += dictionary[tens] + dictionary[remainder];
      } else {
        tempStr += dictionary[hundreds] + 'hundred';

        if (tens !== 0 || remainder !== 0) {
          tempStr += 'and';
        }

        if (tens < 20) {
          const lessThanTwenty = tens + remainder;
          tempStr += dictionary[lessThanTwenty];
        } else {
          tempStr += dictionary[tens] + dictionary[remainder];
        }
      }
      return tempStr;
    }
  }

  for (let i = 1; i <= limit; i++) {
    numString += convertToString(i);
  }
  return numString.length;
}
```
