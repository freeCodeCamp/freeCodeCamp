---
id: bd7123c9c441eddfaeb5bdef
title: Comprendere i valori booleani
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9Me8t4'
forumTopicId: 301176
dashedName: understanding-boolean-values
---

# --description--

Un altro tipo di dati è il <dfn>Boolean</dfn>. I valori booleani possono essere solo uno di due valori: `true` o `false`. Sono fondamentalmente piccoli interruttori on-off, dove `true` è attivato e `false` è disattivato. Questi due stati si escludono a vicenda.

**Nota:** i valori booleani non vengono mai scritti tra virgolette. Le stringhe `"true"` e `"false"` non sono booleane e non hanno alcun significato speciale in JavaScript.

# --instructions--

Modifica la funzione `welcomeToBooleans` in modo che restituisca `true` invece di `false`.

# --hints--

La funzione `welcomeToBooleans()` dovrebbe restituire un valore booleano (`true` o `false`).

```js
assert(typeof welcomeToBooleans() === 'boolean');
```

`welcomeToBooleans()` dovrebbe restituire `true`.

```js
assert(welcomeToBooleans() === true);
```

# --seed--

## --after-user-code--

```js
welcomeToBooleans();
```

## --seed-contents--

```js
function welcomeToBooleans() {
  // Only change code below this line

  return false; // Change this line

  // Only change code above this line
}
```

# --solutions--

```js
function welcomeToBooleans() {
  return true; // Change this line
}
```
