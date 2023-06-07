---
id: 5900f38e1000cf542c50fea1
title: 'Problema 34: fattoriali delle cifre'
challengeType: 1
forumTopicId: 301998
dashedName: problem-34-digit-factorials
---

# --description--

145 è un numero curioso, visto che 1! + 4! + 5! = 1 + 24 + 120 = 145.

Trova i numeri e le somme dei numeri che sono uguali alla somma dei fattoriali delle loro cifre.

**Nota:** dato che 1! = 1 e 2! = 2 non sono somme essi non sono inclusi.

# --hints--

`digitFactorial()` dovrebbe restituire un oggetto.

```js
assert.typeOf(digitFactorial(), 'object');
```

`digitFactorial()` should return { sum: 40730, numbers: [145, 40585] }.

```js
assert.deepEqual(digitFactorial(), { sum: 40730, numbers: [145, 40585] });
```

# --seed--

## --seed-contents--

```js
function digitFactorial() {

  var sum = 0;
  var numbers = [];
  return { sum, numbers };
}

digitFactorial();
```

# --solutions--

```js
// solution required
```
