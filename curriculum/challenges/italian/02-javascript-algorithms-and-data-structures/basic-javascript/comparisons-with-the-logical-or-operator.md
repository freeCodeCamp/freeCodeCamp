---
id: 56533eb9ac21ba0edf2244d9
title: Confronti con l'operatore Or logico
challengeType: 1
videoUrl: 'https://scrimba.com/c/cEPrGTN'
forumTopicId: 16800
dashedName: comparisons-with-the-logical-or-operator
---

# --description--

L'operatore <dfn>Or logico</dfn> (`||`) restituisce `true` se uno degli <dfn>operandi</dfn> è `true`. In caso contrario, restituisce `false`.

L'operatore <dfn>or logico</dfn> è composto da due simboli "pipe": (`||`). Questo in genere può essere trovato tra i tuoi tasti Backspace e Enter.

Lo schema sottostante dovrebbe esserti familiare dai punti visti in precedenza:

```js
if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
```

Esso restituirà `Yes` solo se `num` è compreso tra `5` e `10` (5 e 10 inclusi). La stessa logica può essere scritta come:

```js
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
```

# --instructions--

Combina le due istruzioni `if` in un'unica istruzione che restituisca la stringa `Outside` se `val` non è compreso tra `10` e `20` inclusi. In caso contrario, restituisca la stringa `Inside`.

# --hints--

Dovresti usare l'operatore `||` una sola volta

```js
assert(code.match(/\|\|/g).length === 1);
```

Dovresti avere una sola istruzione `if`

```js
assert(code.match(/if/g).length === 1);
```

`testLogicalOr(0)` dovrebbe restituire la stringa `Outside`

```js
assert(testLogicalOr(0) === 'Outside');
```

`testLogicalOr(9)` dovrebbe restituire la stringa `Outside`

```js
assert(testLogicalOr(9) === 'Outside');
```

`testLogicalOr(10)` dovrebbe restituire la stringa `Inside`

```js
assert(testLogicalOr(10) === 'Inside');
```

`testLogicalOr(15)` dovrebbe restituire la stringa `Inside`

```js
assert(testLogicalOr(15) === 'Inside');
```

`testLogicalOr(19)` dovrebbe restituire la stringa `Inside`

```js
assert(testLogicalOr(19) === 'Inside');
```

`testLogicalOr(20)` dovrebbe restituire la stringa `Inside`

```js
assert(testLogicalOr(20) === 'Inside');
```

`testLogicalOr(21)` dovrebbe restituire la stringa `Outside`

```js
assert(testLogicalOr(21) === 'Outside');
```

`testLogicalOr(25)` dovrebbe restituire la stringa `Outside`

```js
assert(testLogicalOr(25) === 'Outside');
```

# --seed--

## --seed-contents--

```js
function testLogicalOr(val) {
  // Only change code below this line

  if (val) {
    return "Outside";
  }

  if (val) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
```

# --solutions--

```js
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}
```
