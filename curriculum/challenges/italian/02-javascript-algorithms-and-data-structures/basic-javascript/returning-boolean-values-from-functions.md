---
id: 5679ceb97cbaa8c51670a16b
title: Restituire valori booleani dalle funzioni
challengeType: 1
videoUrl: 'https://scrimba.com/c/cp62qAQ'
forumTopicId: 18273
dashedName: returning-boolean-values-from-functions
---

# --description--

È possibile ricordare da <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator" target="_blank" rel="noopener noreferrer nofollow">Confrontare con l'operatore di uguaglianza</a> che tutti gli operatori di confronto restituiscono un valore booleano `true` o `false`.

A volte le persone usano un'istruzione `if/else` per fare un confronto, in questo modo:

```js
function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
```

Ma c'è un modo migliore per farlo. Dal momento che `===` restituisce `true` o `false`, possiamo restituire il risultato del confronto:

```js
function isEqual(a, b) {
  return a === b;
}
```

# --instructions--

Correggi la funzione `isLess` per rimuovere le istruzioni `if/else`.

# --hints--

`isLess(10, 15)` dovrebbe restituire `true`

```js
assert(isLess(10, 15) === true);
```

`isLess(15, 10)` dovrebbe restituire `false`

```js
assert(isLess(15, 10) === false);
```

Non dovresti usare alcuna dichiarazione `if` o `else`

```js
assert(!/if|else/g.test(code));
```

# --seed--

## --seed-contents--

```js
function isLess(a, b) {
  // Only change code below this line
  if (a < b) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

isLess(10, 15);
```

# --solutions--

```js
function isLess(a, b) {
  return a < b;
}
```
