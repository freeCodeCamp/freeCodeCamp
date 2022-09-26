---
id: 5900f4ff1000cf542c510011
title: 'Problema 402: Polinomi a valore intero'
challengeType: 1
forumTopicId: 302070
dashedName: problem-402-integer-valued-polynomials
---

# --description--

Si può dimostrare che il polinomio $n^4 + 4n^3 + 2n^2 + 5n$ è un multiplo di 6 per ogni intero $n$. Può anche essere dimostrato che 6 è il numero intero più grande che soddisfa questa proprietà.

Definisci $M(a, b, c)$ come il massimo $m$ tale che $n^4 + un^3 + bn^2 + cn$ è un multiplo di $m$ per tutti gli interi $n$. Per esempio, $M(4, 2, 5) = 6$.

Inoltre, definisci $S(N)$ come la somma di $M(a, b, c)$ per tutti $0 &lt; a, b, c ≤ N$.

Possiamo verificare che $S(10) = 1\\,972$ e $S(10\\,000) = 2\\,024\\,258\\,331\\,114$.

Sia $F_k$ la sequenza di Fibonacci:

- $F_0 = 0$, $F_1 = 1$ e
- $F_k = F_{k - 1} + F_{k - 2}$ per $k ≥ 2$.

Trova le ultime 9 cifre di $\sum S(F_k)$ per $2 ≤ k ≤ 1\\,234\\,567\\,890\\,123$.

# --hints--

`integerValuedPolynomials()` dovrebbe restituire `356019862`.

```js
assert.strictEqual(integerValuedPolynomials(), 356019862);
```

# --seed--

## --seed-contents--

```js
function integerValuedPolynomials() {

  return true;
}

integerValuedPolynomials();
```

# --solutions--

```js
// solution required
```
