---
id: 56533eb9ac21ba0edf2244aa
title: Comprendere le variabili non inizializzate
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBa2JAL'
forumTopicId: 18335
dashedName: understanding-uninitialized-variables
---

# --description--

Quando vengono dichiarate delle variabili in JavaScript, esse hanno un valore iniziale `undefined`. Se esegui un'operazione matematica su una variabile `undefined`, il risultato sarà `NaN` che significa <dfn>"Not a Number"</dfn> (non è un numero). Se concateni una stringa con una variabile `undefined`, otterrai una <dfn>string</dfn> di valore `undefined`.

# --instructions--

Inizializza le tre variabili `a`, `b` e `c` con `5`, `10`, e `"I am a"` rispettivamente, in modo che non siano `undefined`.

# --hints--

La variabile `a` dovrebbe essere definita e avere un valore finale di `6`.

```js
assert(typeof a === 'number' && a === 6);
```

La variabile `b` dovrebbe essere definita e avere un valore finale di `15`.

```js
assert(typeof b === 'number' && b === 15);
```

`c` non dovrebbe contenere `undefined` e dovrebbe avere un valore finale della stringa `I am a String!`

```js
assert(!/undefined/.test(c) && c === 'I am a String!');
```

Non modificare il codice sotto il commento specificato.

```js
assert(
  /a = a \+ 1;/.test(code) &&
    /b = b \+ 5;/.test(code) &&
    /c = c \+ " String!";/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = '" + c + "'"; })(a,b,c);
```

## --seed-contents--

```js
// Only change code below this line
var a;
var b;
var c;
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";
```

# --solutions--

```js
var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";
```
