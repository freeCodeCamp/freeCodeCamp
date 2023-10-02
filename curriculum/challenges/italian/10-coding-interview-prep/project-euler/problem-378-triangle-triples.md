---
id: 5900f4e61000cf542c50fff9
title: 'Problema 378: tripli triangoli'
challengeType: 1
forumTopicId: 302040
dashedName: problem-378-triangle-triples
---

# --description--

Sia $T(n)$ l'$n$-simo numero triangolare, quindi $T(n) = \frac{n(n + 1)}{2}$.

Sia $dT(n)$ il numero di divisori di $T(n)$. Esempio: $T(7) = 28$ e $dT(7) = 6$.

Sia $Tr(n)$ il numero di triplette ($i$, $j$, $k$) per cui $1 ≤ i &lt; j &lt; k ≤ n$ e $dT(i) > dT(j) > dT(k)$. $Tr(20) = 14$, $Tr(100) = 5\\,772$ e $Tr(1000) = 11\\,174\\,776$.

Trova $Tr(60\\,000\\,000)$. Dai le ultime 18 cifre della tua risposta.

# --hints--

`triangleTriples()` dovrebbe restituire `147534623725724700`.

```js
assert.strictEqual(triangleTriples(), 147534623725724700);
```

# --seed--

## --seed-contents--

```js
function triangleTriples() {

  return true;
}

triangleTriples();
```

# --solutions--

```js
// solution required
```
