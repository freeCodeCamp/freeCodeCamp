---
id: 5900f49b1000cf542c50ffad
title: 'Problema 302: Números de Aquiles fortes'
challengeType: 1
forumTopicId: 301956
dashedName: problem-302-strong-achilles-numbers
---

# --description--

Um número inteiro positivo $n$ é poderoso se $p^2$ é um divisor de $n$ para cada fator primo $p$ em $n$.

Um número inteiro positivo $n$ é uma potência perfeita se $n$ puder ser expresso como uma potência de outro número inteiro positivo.

Um número inteiro positivo $n$ é um número de Aquiles se $n$ for poderoso mas não for uma potência perfeita. Por exemplo, 864 e 1800 são números de Aquiles: $864 = 2^5 \times 3^3$ e $1800 = 2^3 \times 3^2 \times 5^2$.

Vamos chamar um número inteiro positivo $S$ de número de Aquiles forte se $S$ e $φ(S)$ forem números de Aquiles. $φ$ é a função totiente de Euler.

Por exemplo, 864 é um número de Aquiles forte: $φ(864) = 288 = 2^5 \times 3^2$. No entanto, 1800 não é um número de Aquiles forte porque: $φ(1800) = 480 = 2^5 \times 3^1 \times 5^1$.

Há 7 números de Aquiles fortes abaixo de ${10}^4$ e 656 abaixo de ${10}^8$.

Quantos números de Aquiles fortes existem abaixo de ${10}^{18}$?

# --hints--

`strongAchillesNumbers()` deve retornar `1170060`.

```js
assert.strictEqual(strongAchillesNumbers(), 1170060);
```

# --seed--

## --seed-contents--

```js
function strongAchillesNumbers() {

  return true;
}

strongAchillesNumbers();
```

# --solutions--

```js
// solution required
```
