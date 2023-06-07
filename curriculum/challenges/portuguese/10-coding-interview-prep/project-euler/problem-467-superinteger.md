---
id: 5900f5411000cf542c510052
title: 'Problema 467: Superinteiro'
challengeType: 1
forumTopicId: 302142
dashedName: problem-467-superinteger
---

# --description--

Um inteiro $s$ é chamado de superinteiro de outro inteiro $n$ se os algarismos de $n$ formarem uma subsequência dos algarismos de $s$.

Por exemplo, 2718281828 é um superinteiro de 18828, enquanto 314159 não é um superinteiro de 151.

Considere $p(n)$ como o número primo $n$ e $c(n)$ como o $n$º número composto. Por exemplo, $p(1) = 2$, $p(10) = 29$, $c(1) = 4$ e $c(10) = 18$.

$$\begin{align}   & \\{p(i) : i ≥ 1\\} = \\{2, 3, 5, 7, 11, 13, 17, 19, 23, 29, \ldots \\} \\\\
  & \\{c(i) : i ≥ 1\\} = \\{4, 6, 8, 9, 10, 12, 14, 15, 16, 18, \ldots \\} \end{align}$$

Considere $P^D$ como a sequência de raízes dos algarismos de $\\{p(i)\\}$ ($C^D$ é definido da mesma forma para $\\{c(i)\\}$):

$$\begin{align}   & P^D = \\{2, 3, 5, 7, 2, 4, 8, 1, 5, 2, \ldots \\} \\\\
  & C^D = \\{4, 6, 8, 9, 1, 3, 5, 6, 7, 9, \ldots \\} \end{align}$$

Considere $P_n$ como o número inteiro formado concatenando os primeiros $n$ elementos de $P^D$ ($C_n$ é definido de forma semelhante para $C^D$).

$$\begin{align}   & P_{10} = 2.357.248.152 \\\\
  & C_{10} = 4.689.135.679 \end{align}$$

Considere $f(n)$ como o menor número inteiro positivo que seja um superinteiro comum de $P_n$ e $C_n$. Por exemplo, $f(10) = 2.357.246.891.352.679$ e $f(100)\bmod 1.000.000.007 = 771.661.825$.

Encontre $f(10.000)\bmod 1.000.000.007$.

# --hints--

`superinteger()` deve retornar `775181359`.

```js
assert.strictEqual(superinteger(), 775181359);
```

# --seed--

## --seed-contents--

```js
function superinteger() {

  return true;
}

superinteger();
```

# --solutions--

```js
// solution required
```
