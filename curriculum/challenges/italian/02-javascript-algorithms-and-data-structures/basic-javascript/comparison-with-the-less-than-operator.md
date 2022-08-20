---
id: 56533eb9ac21ba0edf2244d6
title: Confronto con l'operatore di minoranza
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNVRWtB'
forumTopicId: 16789
dashedName: comparison-with-the-less-than-operator
---

# --description--

L'operatore di minoranza (`<`) confronta i valori di due numeri. Se il numero a sinistra è inferiore al numero a destra, restituisce `true`. In caso contrario, restituisce `false`. Come l'operatore di uguaglianza, l'operatore di minoranza converte i tipi di dati durante il confronto.

**Esempi**

```js
2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false
```

# --instructions--

Aggiungi l'operatore di minoranza alle linee indicate in modo che le istruzioni return abbiano senso.

# --hints--

`testLessThan(0)` dovrebbe restituire la stringa `Under 25`

```js
assert(testLessThan(0) === 'Under 25');
```

`testLessThan(24)` dovrebbe restituire la stringa `Under 25`

```js
assert(testLessThan(24) === 'Under 25');
```

`testLessThan(25)` dovrebbe restituire la stringa `Under 55`

```js
assert(testLessThan(25) === 'Under 55');
```

`testLessThan(54)` dovrebbe restituire la stringa `Under 55`

```js
assert(testLessThan(54) === 'Under 55');
```

`testLessThan(55)` dovrebbe restituire la stringa `55 or Over`

```js
assert(testLessThan(55) === '55 or Over');
```

`testLessThan(99)` dovrebbe restituire la stringa `55 or Over`

```js
assert(testLessThan(99) === '55 or Over');
```

Dovresti utilizzare l'operatore `<` almeno due volte

```js
assert(code.match(/val\s*<\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testLessThan(val) {
  if (val) {  // Change this line
    return "Under 25";
  }

  if (val) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
```

# --solutions--

```js
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}
```
