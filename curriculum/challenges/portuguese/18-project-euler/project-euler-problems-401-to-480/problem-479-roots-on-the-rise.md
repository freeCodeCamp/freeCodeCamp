---
id: 5900f54b1000cf542c51005d
title: 'Problema 479: Raízes em ascensão'
challengeType: 1
forumTopicId: 302156
dashedName: problem-479-roots-on-the-rise
---

# --description--

Considere $a_k$, $b_k$ e $c_k$ como representando as três soluções (números reais ou complexos) para a expressão $\frac{1}{x} = {\left(\frac{k}{x} \right)}^2 (k + x^2) - kx$.

Por exemplo, no caso de $k = 5$, vemos que $\\{a_5, b_5, c_5\\}$ é aproximadamente $\\{5,727244, -0,363622 + 2,057397i, -0,363622 e - 2,057397i\\}$.

Considere $S(n) = \displaystyle\sum_{p = 1}^n \sum_{k = 1}^n {(a_k + b_k)}^p {(b_k + c_k)}^p {(c_k + a_k)}^p$ para todos os números inteiros $p$, $k$, tal que $1 ≤ p, k ≤ n$.

Curiosamente, $S(n)$ é sempre um número inteiro. Por exemplo, $S(4) = 51.160.$.

Encontre $S({10}^6) \text{ modulo } 1.000.000.007$.

# --hints--

`rootsOnTheRise()` deve retornar `191541795`.

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
