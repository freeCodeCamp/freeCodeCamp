---
id: 5900f37d1000cf542c50fe90
title: 'Problem 17: Anzahl der Zahlen und Buchstaben'
challengeType: 1
forumTopicId: 301804
dashedName: problem-17-number-letter-counts
---

# --description--

Wenn man die Zahlen 1 bis 5 in Wörtern schreibt: eins, zwei, drei, vier, fünf, dann sind es insgesamt 3 + 3 + 5 + 4 + 4 = 19 Buchstaben.

Wenn man alle Zahlen von 1 bis zum angegebenen `limit` in Worte fassen würde, wie viele Buchstaben würde man verwenden?

**Hinweis:** Zähle keine Leerzeichen oder Bindestriche. Zum Beispiel enthält 342 (dreihundertzweiundvierzig) 23 Buchstaben und 115 (einhundertfünfzehn) enthält 20 Buchstaben. Die Verwendung von "und" bei der Schreibweise von Zahlen entspricht dem britischen Sprachgebrauch.

# --hints--

`numberLetterCounts(5)` sollte eine Zahl zurückgeben.

```js
assert(typeof numberLetterCounts(5) === 'number');
```

`numberLetterCounts(5)` sollte 19 zurückgeben.

```js
assert.strictEqual(numberLetterCounts(5), 19);
```

`numberLetterCounts(150)` sollte 1903 zurückgeben.

```js
assert.strictEqual(numberLetterCounts(150), 1903);
```

`numberLetterCounts(1000)` sollte 21124 zurückgeben.

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
