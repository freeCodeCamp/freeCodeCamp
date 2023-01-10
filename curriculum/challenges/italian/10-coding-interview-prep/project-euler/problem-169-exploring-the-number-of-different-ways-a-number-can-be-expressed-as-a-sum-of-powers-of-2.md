---
id: 5900f4151000cf542c50ff28
title: >-
  Problema 169: esplorando il numero di modi diversi in cui un numero può essere espresso come somma delle potenze di 2
challengeType: 1
forumTopicId: 301803
dashedName: >-
  problem-169-exploring-the-number-of-different-ways-a-number-can-be-expressed-as-a-sum-of-powers-of-2
---

# --description--

Sia $f(0) = 1$ e sia $f(n)$ il numero di modi diversi in cui $n$ può essere espresso come numero di potenze intere di 2 usando ogni potenza non più di due volte.

Per esempio, $f(10)=5$ visto che ci sono cinque modi diversi di esprimere 10:

$$\begin{align}   & 1 + 1 + 8 \\\\
  & 1 + 1 + 4 + 4 \\\\   & 1 + 1 + 2 + 2 + 4 \\\\
  & 2 + 4 + 4 \\\\ & 2 + 8 \end{align}$$

Qual è il valore di $f({10}^{25})$?

# --hints--

`numberOfWaysToExpress()` dovrebbe restituire `178653872807`.

```js
assert.strictEqual(numberOfWaysToExpress(), 178653872807);
```

# --seed--

## --seed-contents--

```js
function numberOfWaysToExpress() {

  return true;
}

numberOfWaysToExpress();
```

# --solutions--

```js
// solution required
```
