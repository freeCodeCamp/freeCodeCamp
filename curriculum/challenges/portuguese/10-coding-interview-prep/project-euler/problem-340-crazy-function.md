---
id: 5900f4c21000cf542c50ffd4
title: 'Problema 340: Função maluca'
challengeType: 1
forumTopicId: 301999
dashedName: problem-340-crazy-function
---

# --description--

Para números inteiros fixos $a$, $b$, $c$, defina a função maluca $F(n)$ da seguinte forma:

$$\begin{align}   & F(n) = n - c \\;\text{ para todo } n > b \\\\
  & F(n) = F(a + F(a + F(a + F(a + n)))) \\;\text{ para todo } n ≤ b. \end{align}$$

Além disso, defina $S(a, b, c) = \displaystyle\sum_{n = 0}^b F(n)$.

Por exemplo, se $a = 50$, $b = 2000$ e $c = 40$, então $F(0) = 3240$ e $F(2000) = 2040$. Além disso, $S(50, 2000, 40) = 5.204.240$.

Encontre os últimos 9 algarismos de $S({21}^7, 7^{21}, {12}^7)$.

# --hints--

`crazyFunction()` deve retornar `291504964`.

```js
assert.strictEqual(crazyFunction(), 291504964);
```

# --seed--

## --seed-contents--

```js
function crazyFunction() {

  return true;
}

crazyFunction();
```

# --solutions--

```js
// solution required
```
