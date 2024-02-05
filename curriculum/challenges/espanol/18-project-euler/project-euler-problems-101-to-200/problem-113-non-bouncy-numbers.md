---
id: 5900f3dd1000cf542c50fef0
title: 'Problem 113: Non-bouncy numbers'
challengeType: 1
forumTopicId: 301739
dashedName: problem-113-non-bouncy-numbers
---

# --description--

Working from left-to-right if no digit is exceeded by the digit to its left it is called an increasing number; for example, 134468.

Similarmente si no hay dígito que exceda por el dígito a su derecha, se le llama un número decreciente; por ejemplo, 66420.

Llamaremos a un entero positivo que no este incrementando ni decrementando un número que "rebote"; por ejemplo, 155349.

As n increases, the proportion of bouncy numbers below n increases such that there are only 12951 numbers below one-million that are not bouncy and only 277032 non-bouncy numbers below ${10}^{10}$.

How many numbers below a googol (${10}^{100}$) are not bouncy?

# --hints--

`nonBouncyNumbers()` should return `51161058134250`.

```js
assert.strictEqual(nonBouncyNumbers(), 51161058134250);
```

# --seed--

## --seed-contents--

```js
function nonBouncyNumbers() {

  return true;
}

nonBouncyNumbers();
```

# --solutions--

```js
// solution required
```
