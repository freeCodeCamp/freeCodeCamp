---
id: 5900f3fd1000cf542c50ff10
title: 'Problema 145: Quanti numeri reversibili ci sono sotto un miliardo?'
challengeType: 1
forumTopicId: 301774
dashedName: problem-145-how-many-reversible-numbers-are-there-below-one-billion
---

# --description--

Alcuni numeri interi positivi $n$ hanno la proprietà che la somma [ $n + reverse(n)$ ] consiste interamente di cifre dispari (decimali). Per esempio, $36 + 63 = 99$ e $409 + 904 = 1313$. Chiameremo tali numeri reversibili; quindi 36, 63, 409 e 904 sono reversibili. Gli zero iniziali non sono ammessi in $n$ o $reverse(n)$.

Ci sono 120 numeri reversibili sotto il mille.

Quanti numeri reversibili ci sono sotto un miliardo (${10}^9$)?

# --hints--

`reversibleNumbers()` dovrebbe restituire `608720`.

```js
assert.strictEqual(reversibleNumbers(), 608720);
```

# --seed--

## --seed-contents--

```js
function reversibleNumbers() {

  return true;
}

reversibleNumbers();
```

# --solutions--

```js
// solution required
```
