---
id: 5900f50f1000cf542c510021
title: 'Problema 418: Trios de fatoração'
challengeType: 1
forumTopicId: 302087
dashedName: problem-418-factorisation-triples
---

# --description--

Considere $n$ um inteiro positivo. Um trio de números inteiros ($a$, $b$, $c$) é chamado de trio de fatoração de $n$ se:

- $1 ≤ a ≤ b ≤ c$
- $a \times b \times c = n$.

Defina $f(n)$ como $a + b + c$ para o trio da fatoração ($a$, $b$, $c$) de $n$ que minimiza $\frac{c}{a}$. Podemos mostrar que esse trio é único.

Por exemplo, $f(165) = 19$, $f(100.100) = 142$ e $f(20!) = 4.034.872$.

Encontre $f(43!)$.

# --hints--

`factorisationTriples()` deve retornar `1177163565297340400`.

```js
assert.strictEqual(factorisationTriples(), 1177163565297340400);
```

# --seed--

## --seed-contents--

```js
function factorisationTriples() {

  return true;
}

factorisationTriples();
```

# --solutions--

```js
// solution required
```
