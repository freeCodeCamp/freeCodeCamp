---
id: 587d7b7e367417b2b2512b24
title: Usare l'operatore condizionale (ternario)
challengeType: 1
forumTopicId: 301181
dashedName: use-the-conditional-ternary-operator
---

# --description--

L'<dfn>operatore condizionale</dfn>, chiamato anche <dfn>ternario</dfn>, può essere utilizzato come un'espressione if-else tutta in una riga.

La sintassi è `a ? b : c`, dove `a` è la condizione; `b` è il codice da eseguire quando la condizione restituisce `true`, e `c` è il codice da eseguire quando la condizione restituisce `false`.

La seguente funzione utilizza un'istruzione `if/else` per controllare una condizione:

```js
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}
```

Questo può essere riscritto utilizzando l'operatore condizionale:

```js
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}
```

# --instructions--

Utilizzare l'operatore condizionale nella funzione `checkEqual` per verificare se due numeri sono uguali o meno. La funzione dovrebbe restituire la stringa `Equal` o la stringa `Not Equal`.

# --hints--

`checkEqual` dovrebbe utilizzare l'operatore condizionale

```js
assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?/.test(code));
```

`checkEqual(1, 2)` dovrebbe restituire la stringa `Not Equal`

```js
assert(checkEqual(1, 2) === 'Not Equal');
```

`checkEqual(1, 1)` dovrebbe restituire la stringa `Equal`

```js
assert(checkEqual(1, 1) === 'Equal');
```

`checkEqual(1, -1)` dovrebbe restituire la stringa `Not Equal`

```js
assert(checkEqual(1, -1) === 'Not Equal');
```

# --seed--

## --seed-contents--

```js
function checkEqual(a, b) {

}

checkEqual(1, 2);
```

# --solutions--

```js
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}
```
