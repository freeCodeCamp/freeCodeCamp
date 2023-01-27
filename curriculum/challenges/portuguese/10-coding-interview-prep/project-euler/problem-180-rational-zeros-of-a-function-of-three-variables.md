---
id: 5900f4201000cf542c50ff33
title: 'Problema 180: Zeros racionais de uma função de três variáveis'
challengeType: 1
forumTopicId: 301816
dashedName: problem-180-rational-zeros-of-a-function-of-three-variables
---

# --description--

Para qualquer número inteiro $n$, considere as três funções

$$\begin{align}   & f_{1,n}(x,y,z) = x^{n + 1} + y^{n + 1} − z^{n + 1}\\\\
  & f_{2,n}(x,y,z) = (xy + yz + zx) \times (x^{n - 1} + y^{n - 1} − z^{n - 1})\\\\ & f_{3,n}(x,y,z) = xyz \times (x^{n - 2} + y^{n - 2} − z^{n - 2}) \end{align}$$

e suas combinações

$$\begin{align} & f_n(x,y,z) = f_{1,n}(x,y,z) + f_{2,n}(x,y,z) − f_{3,n}(x,y,z) \end{align}$$

Chamaremos $(x,y,z)$ de um trio dourado de ordem $k$ se $x$, $y$ e $z$ forem todos números racionais na forma $\frac{a}{b}$, com $0 &lt; a &lt; b ≤ k$, e se houver (pelo menos) um número inteiro $n$, de modo que $f_n(x,y,z) = 0$.

Considere $s(x,y,z) = x + y + z$.

Considere $t = \frac{u}{v}$ como a soma de todos os $s(x,y,z)$ distintos para todos os trios dourados $(x,y,z)$ de ordem 35. Todos os $s(x,y,z)$ e $t$ devem estar na forma reduzida.

Encontre $u + v$.

# --hints--

`rationalZeros()` deve retornar `285196020571078980`.

```js
assert.strictEqual(rationalZeros(), 285196020571078980);
```

# --seed--

## --seed-contents--

```js
function rationalZeros() {

  return true;
}

rationalZeros();
```

# --solutions--

```js
// solution required
```
