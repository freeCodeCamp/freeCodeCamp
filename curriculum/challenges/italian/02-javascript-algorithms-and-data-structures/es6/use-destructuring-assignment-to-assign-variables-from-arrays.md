---
id: 587d7b89367417b2b2512b4b
title: Usare l'assegnazione destrutturante per assegnare variabili dagli array
challengeType: 1
forumTopicId: 301213
dashedName: use-destructuring-assignment-to-assign-variables-from-arrays
---

# --description--

ES6 rende la destrutturazione degli array facile come quella degli oggetti.

Una differenza fondamentale tra l'operatore spread e la destrutturazione dell'array è che l'operatore spread spacchetta tutti i contenuti di un array in una lista separata da virgole. Di conseguenza, non è possibile selezionare o scegliere quali elementi si desidera assegnare a delle variabili.

La destrutturazione di un array ci permette di fare esattamente questo:

```js
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
```

La console mostrerà i valori di `a` e `b` come `1, 2`.

Alla variabile `a` viene assegnato il primo valore dell'array, e a `b` viene assegnato il secondo valore dell'array. Possiamo anche accedere al valore a qualsiasi indice di un array tramite destrutturazione, utilizzando le virgole per raggiungere l'indice desiderato:

```js
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
```

La console mostrerà i valori di `a`, `b`, e `c` come `1, 2, 5`.

# --instructions--

Usa l'assegnazione destrutturante per scambiare i valori di `a` e `b` in modo che `a` riceva il valore memorizzato in `b`, e `b` riceva il valore memorizzato in `a`.

# --hints--

Il valore di `a` dovrebbe essere `6`, dopo lo scambio.

```js
assert(a === 6);
```

Il valore di `b` dovrebbe essere `8`, dopo lo scambio.

```js
assert(b === 8);
```

Dovresti usare la destrutturazione di array per scambiare `a` e `b`.

```js
assert(/\[\s*(\w)\s*,\s*(\w)\s*\]\s*=\s*\[\s*\2\s*,\s*\1\s*\]/g.test(code));
```

# --seed--

## --seed-contents--

```js
let a = 8, b = 6;
// Only change code below this line
```

# --solutions--

```js
let a = 8, b = 6;
[a, b] = [b, a];
```
