---
id: 56533eb9ac21ba0edf2244d3
title: Confrontare con l'operatore di disuguaglianza stretta
challengeType: 1
videoUrl: 'https://scrimba.com/c/cKekkUy'
forumTopicId: 16791
dashedName: comparison-with-the-strict-inequality-operator
---

# --description--

L'operatore di disuguaglianza stretta (`!==`) è l'opposto logico dell'operatore di uguaglianza stretta. Significa "strettamente non uguale" e restituisce `false` dove una rigorosa uguaglianza avrebbe restituito `true` e *viceversa*. L'operatore di disuguaglianza stretta non converte i tipi di dati.

**Esempi**

```js
3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
```

# --instructions--

Aggiungi l'operatore di disuguaglianza stretta all'istruzione `if` in modo che la funzione restituisca la stringa `Not Equal` quando `val` non è strettamente uguale a `17`

# --hints--

`testStrictNotEqual(17)` dovrebbe restituire la stringa `Equal`

```js
assert(testStrictNotEqual(17) === 'Equal');
```

`testStrictNotEqual("17")` dovrebbe restituire la stringa `Not Equal`

```js
assert(testStrictNotEqual('17') === 'Not Equal');
```

`testStrictNotEqual(12)` dovrebbe restituire la stringa `Not Equal`

```js
assert(testStrictNotEqual(12) === 'Not Equal');
```

`testStrictNotEqual("bob")` dovrebbe restituire la stringa `Not Equal`

```js
assert(testStrictNotEqual('bob') === 'Not Equal');
```

Dovresti usare l'operatore `!==`

```js
assert(code.match(/(val\s*!==\s*\d+)|(\d+\s*!==\s*val)/g).length > 0);
```

# --seed--

## --seed-contents--

```js
// Setup
function testStrictNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
```

# --solutions--

```js
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}
```
