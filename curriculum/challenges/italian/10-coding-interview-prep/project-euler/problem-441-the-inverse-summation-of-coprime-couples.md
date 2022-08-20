---
id: 5900f5261000cf542c510038
title: 'Problema 441: La somma inversa di coppie coprime'
challengeType: 1
forumTopicId: 302113
dashedName: problem-441-the-inverse-summation-of-coprime-couples
---

# --description--

Per un intero $M$, definiamo $R(M)$ come la somma di $\frac{1}{p·q}$ per tutte le coppie intere $p$ e $q$ che soddisfano tutte queste condizioni:

- $1 ≤ p &lt; q ≤ M$
- $p + q ≥ M$
- $p$ e $q$ sono coprimi.

Definiamo anche $S(N)$ come la somma di $R(i)$ per $2 ≤ i ≤ N$.

Possiamo verificare che $S(2) = R(2) = \frac{1}{2}$, $S(10) ≈ 6.9147$ and $S(100) ≈ 58.2962$.

Trova $S({10}^7)$. Dare la risposta arrotondata a quattro decimali.

# --hints--

`inverseSummationCoprimeCouples()` dovrebbe restituire `5000088.8395`.

```js
assert.strictEqual(inverseSummationCoprimeCouples(), 5000088.8395);
```

# --seed--

## --seed-contents--

```js
function inverseSummationCoprimeCouples() {

  return true;
}

inverseSummationCoprimeCouples();
```

# --solutions--

```js
// solution required
```
