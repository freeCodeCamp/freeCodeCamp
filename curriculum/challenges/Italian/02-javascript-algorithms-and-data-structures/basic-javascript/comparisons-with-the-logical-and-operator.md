---
id: 56533eb9ac21ba0edf2244d8
title: Confronti con l'operatore logico AND
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvbRVtr'
forumTopicId: 16799
dashedName: comparisons-with-the-logical-and-operator
---

# --description--

A volte dovrai testare più di una cosa alla volta. L'operatore logico <dfn>and</dfn> (`&&`) restituisce `true` se e solo se gli <dfn>operandi</dfn> a sinistra e a destra di esso sono veri.

Lo stesso effetto può essere ottenuto annidando un'istruzione if all'interno di un altro if:

```js
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
```

restituirà `Yes` solo se `num` è maggiore di `5` e minore a `10`. La stessa logica può essere scritta come:

```js
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
```

# --instructions--

Sostituisci i due if con una sola istruzione, utilizzando l’operatore `&&`, che restituirà la stringa `Yes` se `val` è minore o uguale a `50` e maggiore o uguale a `25`. Altrimenti, restituisci la stringa `No`.

# --hints--

Dovresti utilizzare l'operatore `&&` una sola volta

```js
assert(code.match(/&&/g).length === 1);
```

Dovresti avere una sola istruzione `if`

```js
assert(code.match(/if/g).length === 1);
```

`testLogicalAnd(0)` dovrebbe restituire la stringa `No`

```js
assert(testLogicalAnd(0) === 'No');
```

`testLogicalAnd(24)` dovrebbe restituire la stringa `No`

```js
assert(testLogicalAnd(24) === 'No');
```

`testLogicalAnd(25)` dovrebbe restituire la stringa `Yes`

```js
assert(testLogicalAnd(25) === 'Yes');
```

`testLogicalAnd(30)` dovrebbe restituire la stringa `Yes`

```js
assert(testLogicalAnd(30) === 'Yes');
```

`testLogicalAnd(50)` dovrebbe restituire la stringa `Yes`

```js
assert(testLogicalAnd(50) === 'Yes');
```

`testLogicalAnd(51)` dovrebbe restituire la stringa `No`

```js
assert(testLogicalAnd(51) === 'No');
```

`testLogicalAnd(75)` dovrebbe restituire la stringa `No`

```js
assert(testLogicalAnd(75) === 'No');
```

`testLogicalAnd(80)` dovrebbe restituire la stringa `No`

```js
assert(testLogicalAnd(80) === 'No');
```

# --seed--

## --seed-contents--

```js
function testLogicalAnd(val) {
  // Only change code below this line

  if (val) {
    if (val) {
      return "Yes";
    }
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);
```

# --solutions--

```js
function testLogicalAnd(val) {
  if (val >= 25 && val <= 50) {
    return "Yes";
  }
  return "No";
}
```
