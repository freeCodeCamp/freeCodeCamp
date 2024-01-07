---
id: 5900f52c1000cf542c51003e
title: 'Problema 447: Retrações C'
challengeType: 1
forumTopicId: 302119
dashedName: problem-447-retractions-c
---

# --description--

Para cada número inteiro $n > 1$, a família de funções $f_{n, a, b}$ é definida por:

$f_{n, a, b}(x) ≡ ax + b\bmod n$ para $a, b, x$ sendo números inteiros e $0 \lt a \lt n$, $0 \le b \lt n$, $0 \le x \lt n$.

Chamaremos $f_{n, a, b}$ de retração se $f_{n, a, b}(f_{n, a, b}(x)) \equiv f_{n, a, b}(x)\bmod n$ para cada $0 \le x \lt n$.

Considere $R(n)$ como o número de retrações para $n$.

$F(N) = \displaystyle\sum_{n = 2}^N R(n)$.

$F({10}^7) ≡ 638.042.271\bmod 1.000.000.007$.

Encontre $F({10}^{14})$. Dê a sua resposta modulo $1.000.000.007$.

# --hints--

`retractionsC()` deve retornar `530553372`.

```js
assert.strictEqual(retractionsC(), 530553372);
```

# --seed--

## --seed-contents--

```js
function retractionsC() {

  return true;
}

retractionsC();
```

# --solutions--

```js
// solution required
```
