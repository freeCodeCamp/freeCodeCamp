---
id: 5900f45d1000cf542c50ff70
title: 'Problema 241: Quociente de perfeição'
challengeType: 1
forumTopicId: 301888
dashedName: problem-241-perfection-quotients
---

# --description--

Para um inteiro positivo $n$, considere $σ(n)$ como a soma de todos os divisores de $n$, por exemplo $σ(6) = 1 + 2 + 3 + 6 = 12$.

Um número perfeito, como você provavelmente já sabe, é um número com $σ(n) = 2n$.

Vamos definir o quociente de perfeição de um inteiro positivo como $p(n) = \frac{σ(n)}{n}$.

Encontre a soma de todos os números inteiros positivos $n ≤ {10}^{18}$ para os quais $p(n)$ tem o formato $k + \frac{1}{2}$, onde $k$ é um número inteiro.

# --hints--

`perfectionQuotients()` deve retornar `482316491800641150`.

```js
assert.strictEqual(perfectionQuotients(), 482316491800641150);
```

# --seed--

## --seed-contents--

```js
function perfectionQuotients() {

  return true;
}

perfectionQuotients();
```

# --solutions--

```js
// solution required
```
