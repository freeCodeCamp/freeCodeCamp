---
id: 5900f4ed1000cf542c50ffff
title: 'Problema 383: comparazione di divisibilità tra fattoriali'
challengeType: 1
forumTopicId: 302047
dashedName: problem-383-divisibility-comparison-between-factorials
---

# --description--

Sia $f_5(n)$ il numero intero più grande $x$ per cui $5^x$ divide $n$.

Per esempio, $f_5(625\\,000) = 7$.

Sia $T_5(n)$ il numero di numeri interi $i$ che soddisfano $f_5((2 \times i - 1)!) &lt; 2 \times f_5(i!)$ e $1 ≤ i ≤ n$.

Si può verificare che $T_5({10}^3) = 68$ e $T_5({10}^9) = 2\\,408\\,210$.

Trova $T_5({10}^{18})$.

# --hints--

`factorialDivisibilityComparison()` dovrebbe restituire `22173624649806`.

```js
assert.strictEqual(factorialDivisibilityComparison(), 22173624649806);
```

# --seed--

## --seed-contents--

```js
function factorialDivisibilityComparison() {

  return true;
}

factorialDivisibilityComparison();
```

# --solutions--

```js
// solution required
```
