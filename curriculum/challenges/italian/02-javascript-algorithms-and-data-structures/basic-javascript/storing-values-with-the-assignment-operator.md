---
id: 56533eb9ac21ba0edf2244a8
title: Memorizzare valori con l'operatore di assegnazione
challengeType: 1
videoUrl: 'https://scrimba.com/c/cEanysE'
forumTopicId: 18310
dashedName: storing-values-with-the-assignment-operator
---

# --description--

In JavaScript, puoi memorizzare un valore in una variabile con l'operatore <dfn>di assegnazione</dfn> (`=`).

```js
myVariable = 5;
```

Questo assegna il valore `Number` `5` a `myVariable`.

Se sono presenti calcoli a destra dell'operatore `=`, vengono eseguiti prima che il valore venga assegnato alla variabile a sinistra dell'operatore.

```js
var myVar;
myVar = 5;
```

Innanzitutto, questo codice crea una variabile denominata `myVar`. Quindi, il codice assegna `5` a `myVar`. Ora, se `myVar` appare di nuovo nel codice, il programma lo tratterà come se fosse `5`.

# --instructions--

Assegna il valore `7` alla variabile `a`.

# --hints--

Non modificare il codice sopra il commento specificato.

```js
assert(/var a;/.test(code));
```

`a` dovrebbe avere un valore di 7.

```js
assert(typeof a === 'number' && a === 7);
```

# --seed--

## --before-user-code--

```js
if (typeof a != 'undefined') {
  a = undefined;
}
```

## --after-user-code--

```js
(function(a){return "a = " + a;})(a);
```

## --seed-contents--

```js
// Setup
var a;

// Only change code below this line
```

# --solutions--

```js
var a;
a = 7;
```
