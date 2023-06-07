---
id: 5900f54b1000cf542c51005d
title: 'Problema 479: Radici in crescita'
challengeType: 1
forumTopicId: 302156
dashedName: problem-479-roots-on-the-rise
---

# --description--

Siano $a_k$, $b_k$, e $c_k$ le tre soluzioni (numeri reali o complessi) dell'espressione $\frac{1}{x} = {\left(\frac{k}{x} \right)}^2 (k + x^2) - kx$.

Per esempio, per $k = 5$, vediamo che $\\{a_5, b_5, c_5\\}$ è approssimativamente $\\{5.727244, -0.363622 + 2.057397i, -0.363622 - 2.057397i\\}$.

Sia $S(n) = \displaystyle\sum_{p = 1}^n \sum_{k = 1}^n {(a_k + b_k)}^p {(b_k + c_k)}^p {(c_k + a_k)}^p$ per tutti i numeri interi $p$, $k$ per cui $1 ≤ p, k ≤ n$.

È interessante notare che $S(n)$ è sempre un numero intero. Per esempio, $S(4) = 51\\,160$.

Trova $S({10}^6) \text{ modulo } 1\\,000\\,000\\,007$.

# --hints--

`rootsOnTheRise()` dovrebbe restituire `191541795`.

```js
assert.strictEqual(rootsOnTheRise(), 191541795);
```

# --seed--

## --seed-contents--

```js
function rootsOnTheRise() {

  return true;
}

rootsOnTheRise();
```

# --solutions--

```js
// solution required
```
