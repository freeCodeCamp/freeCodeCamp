---
id: 5900f5071000cf542c510018
title: 'Problema 410: Cerchio e retta tangente'
challengeType: 1
forumTopicId: 302079
dashedName: problem-410-circle-and-tangent-line
---

# --description--

Sia $C$ il cerchio con raggio $r$, $x^2 + y^2 = r^2$. Scegliamo due punti, $P(a, b)$ e $Q(-a, c)$ affinché la retta che passa per $P$ e $Q$ è tangente a $C$.

Per esempio, il quartetto $(r, a, b, c) = (2, 6, 2, -7)$ soddisfa questa proprietà.

Sia $F(R, X)$ il numero di quartetti di numeri interi $(r, a, b, c)$ con questa proprietà e con 0 &lt; r ≤ R$ e $0 &lt; a ≤ X$.

Possiamo verificare che $F(1, 5) = 10$, $F(2, 10) = 52$ e $F(10, 100) = 3384$.

Trova $F({10}^8, {10}^9) + F({10}^9, {10}^8)$.

# --hints--

`circleAndTangentLine()` dovrebbe restituire `799999783589946600`.

```js
assert.strictEqual(circleAndTangentLine(), 799999783589946600);
```

# --seed--

## --seed-contents--

```js
function circleAndTangentLine() {

  return true;
}

circleAndTangentLine();
```

# --solutions--

```js
// solution required
```
