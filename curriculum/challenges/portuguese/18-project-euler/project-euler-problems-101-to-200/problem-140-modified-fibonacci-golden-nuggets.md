---
id: 5900f3fa1000cf542c50ff0c
title: 'Problema 140: Pepitas de ouro de Fibonacci modificado'
challengeType: 1
forumTopicId: 301769
dashedName: problem-140-modified-fibonacci-golden-nuggets
---

# --description--

Considere a série polinomial infinita $A_G(x) = xG_1 + x^2G_2 + x^3G_3 + \cdots$, onde $G_k$ é o $k$º termo da relação de recorrência de segunda ordem $G_k = G_{k − 1} + G_{k − 2}, G_1 = 1$ e $G_2 = 4$; ou seja, $1, 4, 5, 9, 14, 23, \ldots$.

Para este problema, estaremos interessados nos valores de $x$ para os quais $A_G(x)$ é um número inteiro positivo.

Os valores correspondentes de $x$ para os primeiros cinco números naturais são mostrados abaixo.

| $x$                           | $A_G(x)$ |
| ----------------------------- | -------- |
| $\frac{\sqrt{5} − 1}{4}$    | $1$      |
| $\frac{2}{5}$                | $2$      |
| $\frac{\sqrt{22} − 2}{6}$   | $3$      |
| $\frac{\sqrt{137} − 5}{14}$ | $4$      |
| $\frac{1}{2}$                | $5$      |

Vamos chamar $A_G(x)$ de pepita de ouro se $x$ for racional, porque eles se tornam cada vez mais raros (por exemplo, a 20ª pepita de ouro é 211345365). Encontre a soma das primeiras trinta pepitas douradas.

# --hints--

`modifiedGoldenNuggets()` deve retornar `5673835352990`

```js
assert.strictEqual(modifiedGoldenNuggets(), 5673835352990);
```

# --seed--

## --seed-contents--

```js
function modifiedGoldenNuggets() {

  return true;
}

modifiedGoldenNuggets();
```

# --solutions--

```js
// solution required
```
