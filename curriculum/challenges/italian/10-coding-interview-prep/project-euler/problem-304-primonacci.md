---
id: 5900f49d1000cf542c50ffaf
title: 'Problema 304: Primonacci'
challengeType: 1
forumTopicId: 301958
dashedName: problem-304-primonacci
---

# --description--

Per qualsiasi numero intero positivo $n$ la funzione $\text{next_prime}(n)$ restituisce il più piccolo $p$ tale che $p > n$.

La sequenza $a(n)$ è definita da: $a(1) = \text{next_prime}({10}^{14})$ e $a(n) = \text{next_prime}(a(n - 1))$ per $n > 1$.

La sequenza di fibonacci $f(n)$ è definita da: $f(0) = 0$, $f(1) = 1$ e $f(n) = f(n - 1) + f(n - 2)$ per $n > 1$.

La sequenza $b(n)$ è definita come $f(a(n))$.

Trova $\sum b(n)$ per $1≤n≤100\\,000$. Dai la tua risposta $\bmod 1\\,234\\,567\\,891\\,011$.

# --hints--

`primonacci()` dovrebbe restituire `283988410192`.

```js
assert.strictEqual(primonacci(), 283988410192);
```

# --seed--

## --seed-contents--

```js
function primonacci() {

  return true;
}

primonacci();
```

# --solutions--

```js
// solution required
```
