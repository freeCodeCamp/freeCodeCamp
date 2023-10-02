---
id: 56533eb9ac21ba0edf2244d7
title: Confronto con l'operatore di minoranza o uguaglianza
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNVR7Am'
forumTopicId: 16788
dashedName: comparison-with-the-less-than-or-equal-to-operator
---

# --description--

L'operatore di minoranza o uguaglianza (`<=`) confronta i valori di due numeri. Se il numero a sinistra è minore o uguale al numero a destra, restituisce `true`. Se il numero a sinistra è maggiore del numero a destra, restituisce `false`. Come l'operatore di uguaglianza, l'operatore di minoranza o uguaglianza converte i tipi di dati.

**Esempi**

```js
4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false
```

# --instructions--

Aggiungi l'operatore di minoranza o uguaglianza alle linee indicate in modo che le dichiarazioni return abbiano senso.

# --hints--

`testLessOrEqual(0)` dovrebbe restituire la stringa `Smaller Than or Equal to 12`

```js
assert(testLessOrEqual(0) === 'Smaller Than or Equal to 12');
```

`testLessOrEqual(11)` dovrebbe restituire la stringa `Smaller Than or Equal to 12`

```js
assert(testLessOrEqual(11) === 'Smaller Than or Equal to 12');
```

`testLessOrEqual(12)` dovrebbe restituire la stringa `Smaller Than or Equal to 12`

```js
assert(testLessOrEqual(12) === 'Smaller Than or Equal to 12');
```

`testLessOrEqual(23)` dovrebbe restituire la stringa `Smaller Than or Equal to 24`

```js
assert(testLessOrEqual(23) === 'Smaller Than or Equal to 24');
```

`testLessOrEqual(24)` dovrebbe restituire la stringa `Smaller Than or Equal to 24`

```js
assert(testLessOrEqual(24) === 'Smaller Than or Equal to 24');
```

`testLessOrEqual(25)` dovrebbe restituire la stringa `More Than 24`

```js
assert(testLessOrEqual(25) === 'More Than 24');
```

`testLessOrEqual(55)` dovrebbe restituire la stringa `More Than 24`

```js
assert(testLessOrEqual(55) === 'More Than 24');
```

Dovresti utilizzare l'operatore `<=` almeno due volte

```js
assert(code.match(/val\s*<=\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testLessOrEqual(val) {
  if (val) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);
```

# --solutions--

```js
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}
```
