---
id: 5900f4c31000cf542c50ffd5
title: 'Problema 342: Il toziente di un quadrato è un cubo'
challengeType: 1
forumTopicId: 302001
dashedName: problem-342-the-totient-of-a-square-is-a-cube
---

# --description--

Considera il numero 50.

${50}^2 = 2500 = 2^2 × 5^4$, so $φ(2500) = 2 × 4 × 5^3 = 8 × 5^3 = 2^3 × 5^3$. $φ$ denota la funzione toziente di Eulero.

Quindi 2500 è un quadrato e $φ(2500)$ è un cubo.

Trova la somma di tutti i numeri $n$, $1 &lt; n &lt; {10}^{10}$ in modo che $φ(n^2)$ sia un cubo.


# --hints--

`totientOfSquare()` dovrebbe restituire `5943040885644`.

```js
assert.strictEqual(totientOfSquare(), 5943040885644);
```

# --seed--

## --seed-contents--

```js
function totientOfSquare() {

  return true;
}

totientOfSquare();
```

# --solutions--

```js
// solution required
```
