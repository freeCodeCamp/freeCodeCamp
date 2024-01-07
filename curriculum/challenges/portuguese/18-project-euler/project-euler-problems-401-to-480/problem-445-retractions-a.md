---
id: 5900f52a1000cf542c51003c
title: 'Problema 445: Retrações A'
challengeType: 1
forumTopicId: 302117
dashedName: problem-445-retractions-a
---

# --description--

Para cada número inteiro $n > 1$, a família de funções $f_{n, a, b}$ é definida por:

$f_{n, a, b}(x) ≡ ax + b\bmod n$ para $a, b, x$ sendo números inteiros e $0 \lt a \lt n$, $0 \le b \lt n$, $0 \le x \lt n$.

Chamaremos $f_{n, a, b}$ de retração se $f_{n, a, b}(f_{n, a, b}(x)) \equiv f_{n, a, b}(x)\bmod n$ para cada $0 \le x \lt n$.

Considere $R(n)$ como o número de retrações para $n$.

Você é informado de que

$$\sum_{k = 1}^{99.999} R(\displaystyle\binom{100.000}{k}) \equiv 628.701.600\bmod 1.000.000.007$$

Encontre $$\sum_{k = 1}^{9.999.999} R(\displaystyle\binom{10.000.000}{k})$$ Dê sua resposta modulo $1.000.000.007$.

# --hints--

`retractionsA()` deve retornar `659104042`.

```js
assert.strictEqual(retractionsA(), 659104042);
```

# --seed--

## --seed-contents--

```js
function retractionsA() {

  return true;
}

retractionsA();
```

# --solutions--

```js
// solution required
```
