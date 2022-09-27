---
id: 5900f53b1000cf542c51004d
title: 'Problema 462: Permutação de números três harmoniosos'
challengeType: 1
forumTopicId: 302137
dashedName: problem-462-permutation-of-3-smooth-numbers
---

# --description--

Um número 3 harmonioso é um número inteiro que não tem fatores primos maiores que 3. Para um número inteiro $N$, definimos $S(N)$ como o conjunto de números 3 harmoniosos menores ou iguais a $N$. Por exemplo, $S(20) = \\{1, 2, 3, 4, 6, 8, 9, 12, 16, 18\\}$.

Definimos $F(N)$ como o número de permutações de $S(N)$ em que cada elemento vem depois de todos os seus divisores apropriados.

Esta é uma das permutações possíveis para $N = 20$.

-   1, 2, 4, 3, 9, 8, 16, 6, 18, 12.

Esta não é uma permutação válida porque 12 vem antes do seu divisor 6.

-   1, 2, 4, 3, 9, 8, 12, 16, 6, 18.

Podemos verificar que $F(6) = 5$, $F(8) = 9$, $F(20) = 450$ e $F(1000) ≈ 8.8521816557e.21$.

Encontre $F({10}^{18})$. Dê sua resposta como uma string em notação científica arredondada para dez algarismos depois da vírgula. Ao dar sua resposta, use letra minúscula `e` para separar a mantissa e o expoente. Ex: se a resposta é $112.233.445.566.778.899$, o formato da resposta seria `1.1223344557e17`.

# --hints--

`permutationOf3SmoothNumbers()` deve retornar uma string.

```js
assert.strictEqual(typeof permutationOf3SmoothNumbers() === 'string');
```

`permutationOf3SmoothNumbers()` deve retornar a string `5.5350769703e1512`.

```js
assert.strictEqual(permutationOf3SmoothNumbers(), '5.5350769703e1512');
```

# --seed--

## --seed-contents--

```js
function permutationOf3SmoothNumbers() {

  return true;
}

permutationOf3SmoothNumbers();
```

# --solutions--

```js
// solution required
```
