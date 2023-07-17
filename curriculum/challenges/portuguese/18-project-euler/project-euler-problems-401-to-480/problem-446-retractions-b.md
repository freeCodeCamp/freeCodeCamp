---
id: 5900f52c1000cf542c51003d
title: 'Problema 446: Retrações B'
challengeType: 1
forumTopicId: 302118
dashedName: problem-446-retractions-b
---

# --description--

Para cada número inteiro $n > 1$, a família de funções $f_{n, a, b}$ é definida por:

$f_{n, a, b}(x) ≡ ax + b\bmod n$ para $a, b, x$ sendo números inteiros e $0 \lt a \lt n$, $0 \le b \lt n$, $0 \le x \lt n$.

Chamaremos $f_{n, a, b}$ de retração se $f_{n, a, b}(f_{n, a, b}(x)) \equiv f_{n, a, b}(x)\bmod n$ para cada $0 \le x \lt n$.

Considere $R(n)$ como o número de retrações para $n$.

$F(N) = \displaystyle\sum_{n = 1}^N R(n^4 + 4)$.

$F(1024) = 77.532.377.300.600$.

Encontre $F({10}^7)$. Dê a sua resposta modulo $1.000.000.007$.

# --hints--

`retractionsB()` deve retornar `907803852`.

```js
assert.strictEqual(retractionsB(), 907803852);
```

# --seed--

## --seed-contents--

```js
function retractionsB() {

  return true;
}

retractionsB();
```

# --solutions--

```js
// solution required
```
