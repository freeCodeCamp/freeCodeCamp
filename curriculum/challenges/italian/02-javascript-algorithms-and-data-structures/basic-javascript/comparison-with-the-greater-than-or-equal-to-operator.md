---
id: 56533eb9ac21ba0edf2244d5
title: Confronto con l'operatore di maggioranza o uguaglianza
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6KBqtV'
forumTopicId: 16785
dashedName: comparison-with-the-greater-than-or-equal-to-operator
---

# --description--

L'operatore di maggioranza o uguaglianza (`>=`) confronta i valori di due numeri. Se il numero a sinistra è maggiore o uguale al numero a destra, restituisce `true`. In caso contrario, restituisce `false`.

Come l'operatore di uguaglianza, l'operatore di maggioranza o uguaglianza convertirà i tipi di dati durante il confronto.

**Esempi**

```js
6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false
```

# --instructions--

Aggiungi l'operatore di maggioranza o uguaglianza alle linee indicate in modo che le istruzioni return abbiano senso.

# --hints--

`testGreaterOrEqual(0)` dovrebbe restituire la stringa `Less than 10`

```js
assert(testGreaterOrEqual(0) === 'Less than 10');
```

`testGreaterOrEqual(9)` dovrebbe restituire la stringa `Less than 10`

```js
assert(testGreaterOrEqual(9) === 'Less than 10');
```

`testGreaterOrEqual(10)` dovrebbe restituire la stringa `10 or Over`

```js
assert(testGreaterOrEqual(10) === '10 or Over');
```

`testGreaterOrEqual(11)` dovrebbe restituire la stringa `10 or Over`

```js
assert(testGreaterOrEqual(11) === '10 or Over');
```

`testGreaterOrEqual(19)` dovrebbe restituire la stringa `10 or Over`

```js
assert(testGreaterOrEqual(19) === '10 or Over');
```

`testGreaterOrEqual(100)` dovrebbe restituire la stringa `20 or Over`

```js
assert(testGreaterOrEqual(100) === '20 or Over');
```

`testGreaterOrEqual(21)` dovrebbe restituire la stringa `20 or Over`

```js
assert(testGreaterOrEqual(21) === '20 or Over');
```

Dovresti utilizzare l'operatore `>=` almeno due volte

```js
assert(code.match(/val\s*>=\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testGreaterOrEqual(val) {
  if (val) {  // Change this line
    return "20 or Over";
  }

  if (val) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
```

# --solutions--

```js
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}
```
