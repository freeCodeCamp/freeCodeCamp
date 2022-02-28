---
id: 56533eb9ac21ba0edf2244d4
title: Confrontare con l'operatore di maggioranza
challengeType: 1
videoUrl: 'https://scrimba.com/c/cp6GbH4'
forumTopicId: 16786
dashedName: comparison-with-the-greater-than-operator
---

# --description--

L'operatore di maggioranza (`>`) confronta i valori di due numeri. Se il numero a sinistra è maggiore del numero a destra, restituisce `true`. In caso contrario restituisce `false`.

Come l'operatore di uguaglianza, l'operatore di maggioranza convertirà i tipi di dati dei valori durante il confronto.

**Esempi**

```js
5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false
```

# --instructions--

Aggiungi l'operatore di maggioranza alle linee indicate in modo che le istruzioni return abbiano senso.

# --hints--

`testGreaterThan(0)` dovrebbe restituire la stringa `10 or Under`

```js
assert(testGreaterThan(0) === '10 or Under');
```

`testGreaterThan(10)` dovrebbe restituire la stringa `10 or Under`

```js
assert(testGreaterThan(10) === '10 or Under');
```

`testGreaterThan(11)` dovrebbe restituire la stringa `Over 10`

```js
assert(testGreaterThan(11) === 'Over 10');
```

`testGreaterThan(99)` dovrebbe restituire la stringa `Over 10`

```js
assert(testGreaterThan(99) === 'Over 10');
```

`testGreaterThan(100)` dovrebbe restituire la stringa `Over 10`

```js
assert(testGreaterThan(100) === 'Over 10');
```

`testGreaterThan(101)` dovrebbe restituire la stringa `Over 100`

```js
assert(testGreaterThan(101) === 'Over 100');
```

`testGreaterThan(150)` dovrebbe restituire la stringa `Over 100`

```js
assert(testGreaterThan(150) === 'Over 100');
```

Dovresti utilizzare l'operatore `>` almeno due volte

```js
assert(code.match(/val\s*>\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testGreaterThan(val) {
  if (val) {  // Change this line
    return "Over 100";
  }

  if (val) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
```

# --solutions--

```js
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }
  if (val > 10) {  // Change this line
    return "Over 10";
  }
  return "10 or Under";
}
```
