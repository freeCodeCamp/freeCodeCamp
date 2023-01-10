---
id: 5900f38e1000cf542c50fea1
title: 'Probelma 34: Números factoriales'
challengeType: 1
forumTopicId: 301998
dashedName: problem-34-digit-factorials
---

# --description--

145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

Encuentra los números y la suma de los números que son iguales a la suma factorial de sus dígitos.

**Note:** as 1! = 1 and 2! = 2 are not sums they are not included.

# --hints--

`digitFactorial()` debería devolver un objeto.

```js
assert.typeOf(digitFactorial(), 'object');
```

`digitFactorial()` debería devolver { suma: 40730, números: [145, 40585] }.

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
