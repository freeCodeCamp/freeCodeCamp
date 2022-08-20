---
id: 5900f48d1000cf542c50ff9f
title: 'Problema 288: Um fatorial enorme'
challengeType: 1
forumTopicId: 301939
dashedName: problem-288-an-enormous-factorial
---

# --description--

Para qualquer número primo $p$, o número $N(p,q)$ é definido por $N(p,q) = \sum_{n=0}^q T_n \times p^n$ com $T_n$ gerado pelo seguinte gerador aleatório de números:

$$\begin{align}   & S_0 = 290797 \\\\
  & S_{n + 1} = {S_n}^2\bmod 50.515.093 \\\\ & T_n = S_n\bmod p \end{align}$$

Considere $Nfac(p,q)$ como o fatorial de $N(p,q)$.

Considere $NF(p,q)$ como o número de divisores $p$ em $Nfac(p,q)$.

Você é informado de que $NF(3,10000) \bmod 3^{20} = 624.955.285$.

Encontre $NF(61,{10}^7)\bmod {61}^{10}$.

# --hints--

`enormousFactorial()` deve retornar `605857431263982000`.

```js
assert.strictEqual(enormousFactorial(), 605857431263982000);
```

# --seed--

## --seed-contents--

```js
function enormousFactorial() {

  return true;
}

enormousFactorial();
```

# --solutions--

```js
// solution required
```
