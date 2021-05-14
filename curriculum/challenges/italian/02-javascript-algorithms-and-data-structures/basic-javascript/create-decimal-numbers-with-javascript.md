---
id: cf1391c1c11feddfaeb4bdef
title: Creare numeri decimali con JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8GEuW'
forumTopicId: 16826
dashedName: create-decimal-numbers-with-javascript
---

# --description--

Possiamo memorizzare nelle variabili anche i numeri decimali. I numeri decimali a volte sono indicati come numeri <dfn>in virgola mobile (floating point)</dfn> o <dfn>floats</dfn>.

**Nota:** Non tutti i numeri reali possono essere accuratamente rappresentati in <dfn>floating point</dfn>. Ciò può portare a errori di arrotondamento. [Dettagli qui](https://en.wikipedia.org/wiki/Floating_point#Accuracy_problems).

# --instructions--

Crea una variabile `myDecimal` e dalle un valore decimale con una parte frazionaria (es. `5.7`).

# --hints--

`myDecimal` dovrebbe essere un numero.

```js
assert(typeof myDecimal === 'number');
```

`myDecimal` dovrebbe avere un punto decimale

```js
assert(myDecimal % 1 != 0);
```

# --seed--

## --after-user-code--

```js
(function(){if(typeof myDecimal !== "undefined"){return myDecimal;}})();
```

## --seed-contents--

```js
var ourDecimal = 5.7;

// Only change code below this line
```

# --solutions--

```js
var myDecimal = 9.9;
```
