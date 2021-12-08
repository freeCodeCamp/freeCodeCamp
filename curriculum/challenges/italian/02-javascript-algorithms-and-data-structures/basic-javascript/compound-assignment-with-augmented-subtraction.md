---
id: 56533eb9ac21ba0edf2244b0
title: Assegnazione composta con sottrazione aumentata
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2Qv7AV'
forumTopicId: 16660
dashedName: compound-assignment-with-augmented-subtraction
---

# --description--

Come l'operatore `+=`, `-=` sottrae un numero da una variabile.

```js
myVar = myVar - 5;
```

sottrarrà `5` da `myVar`. Questo può essere riscritto come:

```js
myVar -= 5;
```

# --instructions--

Converti le assegnazioni per `a`, `b` e `c` in modo da utilizzare l'operatore `-=`.

# --hints--

`a` dovrebbe essere uguale a `5`.

```js
assert(a === 5);
```

`b` dovrebbe essere uguale a `-6`.

```js
assert(b === -6);
```

`c` dovrebbe essere uguale a `2`.

```js
assert(c === 2);
```

Dovresti usare l'operatore `-=` per ogni variabile.

```js
assert(code.match(/-=/g).length === 3);
```

Non dovresti modificare il codice sopra il commento specificato.

```js
assert(
  /let a = 11;/.test(code) && /let b = 9;/.test(code) && /let c = 3;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a = a - 6;
b = b - 15;
c = c - 1;
```

# --solutions--

```js
let a = 11;
let b = 9;
let c = 3;

a -= 6;
b -= 15;
c -= 1;
```
