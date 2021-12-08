---
id: 587d7b7e367417b2b2512b23
title: Usare la funzione parseInt
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm83LSW'
forumTopicId: 301183
dashedName: use-the-parseint-function
---

# --description--

La funzione `parseInt()` analizza una stringa e restituisce un numero intero. Ecco un esempio:

```js
const a = parseInt("007");
```

La funzione di cui sopra converte la stringa `007` nell'intero `7`. Se il primo carattere della stringa non può essere convertito in un numero, restituisce `NaN`.

# --instructions--

Usa `parseInt()` nella funzione `convertToInteger` in modo che converta la serie `str` in un intero e la restituisca.

# --hints--

`convertToInteger` dovrebbe utilizzare la funzione `parseInt()`

```js
assert(/parseInt/g.test(code));
```

`convertToInteger("56")` dovrebbe restituire un numero

```js
assert(typeof convertToInteger('56') === 'number');
```

`convertToInteger("56")` dovrebbe restituire 56

```js
assert(convertToInteger('56') === 56);
```

`convertToInteger("77")` dovrebbe restituire 77

```js
assert(convertToInteger('77') === 77);
```

`convertToInteger("JamesBond")` dovrebbe restituire `NaN`

```js
assert.isNaN(convertToInteger('JamesBond'));
```

# --seed--

## --seed-contents--

```js
function convertToInteger(str) {

}

convertToInteger("56");
```

# --solutions--

```js
function convertToInteger(str) {
  return parseInt(str);
}
```
