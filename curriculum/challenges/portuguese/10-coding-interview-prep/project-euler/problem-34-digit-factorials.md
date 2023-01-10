---
id: 5900f38e1000cf542c50fea1
title: 'Problema 34: Algarismos dos fatoriais'
challengeType: 1
forumTopicId: 301998
dashedName: problem-34-digit-factorials
---

# --description--

145 é um número curioso, já que 1! + 4! + 5! = 1 + 24 + 120 = 145.

Calcule os números e a soma dos números que são iguais à soma do fatorial de seus algarismos.

**Observação:** como 1! = 1 e 2! = 2 não são somas, eles não estão incluídos.

# --hints--

`digitFactorial()` deve retornar um objeto.

```js
assert.typeOf(digitFactorial(), 'object');
```

`digitFactorial()` deve retornar { sum: 40730, numbers: [145, 40585] }.

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
