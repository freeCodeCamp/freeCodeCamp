---
id: 5900f4451000cf542c50ff57
title: 'Problema 216: Indagare la primalità dei numeri nella forma 2n2-1'
challengeType: 1
forumTopicId: 301858
dashedName: problem-216-investigating-the-primality-of-numbers-of-the-form-2n2-1
---

# --description--

Considera i numeri $t(n)$ nella forma $t(n) = 2n^2 - 1$ con $n > 1$.

I primi di questi numeri sono 7, 17, 31, 49, 71, 97, 127 e 161.

Si scopre che solo $49 = 7 \tvolte 7$ e $161 = 7 \tvolte 23$ non sono primi.

Per $n ≤ 10000$ ci sono 2202 numeri $t(n)$ che sono primi.

Quanti numeri $t(n)$ sono primi per $n ≤ 50\\,000\\,000$?

# --hints--

`primalityOfNumbers()` dovrebbe restituire `5437849`.

```js
assert.strictEqual(primalityOfNumbers(), 5437849);
```

# --seed--

## --seed-contents--

```js
function primalityOfNumbers() {

  return true;
}

primalityOfNumbers();
```

# --solutions--

```js
// solution required
```
