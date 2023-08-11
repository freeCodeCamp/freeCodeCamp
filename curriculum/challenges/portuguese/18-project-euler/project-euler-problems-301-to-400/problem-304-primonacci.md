---
id: 5900f49d1000cf542c50ffaf
title: 'Problema 304: Primonacci'
challengeType: 1
forumTopicId: 301958
dashedName: problem-304-primonacci
---

# --description--

Para qualquer número inteiro positivo $n$, a função $\text{next_prime}(n)$ retorna o menor número primo $p$, tal que $p > n$.

A sequência $a(n)$ é definida por: $a(1) = \text{next_prime}({10}^{14})$ e $a(n) = \text{next_prime}(a(n - 1))$ para $n > 1$.

A sequência de Fibonacci $f(n)$ é definida por: $f(0) = 0$, $f(1) = 1$ e $f(n) = f(n - 1) + f(n - 2)$ para $n > 1$.

A sequência $b(n)$ é definida como $f(a(n))$.

Encontre $\sum b(n)$ para $1≤n≤100.000$. Dê a sua resposta $\bmod 1.234.567.891.011$.

# --hints--

`primonacci()` deve retornar `283988410192`.

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
