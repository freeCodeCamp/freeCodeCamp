---
id: 5900f50b1000cf542c51001d
title: 'Problema 414: Constante de Kaprekar'
challengeType: 1
forumTopicId: 302083
dashedName: problem-414-kaprekar-constant
---

# --description--

6174 é um número incrível. Se ordenarmos seus algarismos em ordem crescente e subtrairmos esse número do número obtido ao ordenar os algarismos em ordem decrescente, temos $7641 - 1467 = 6174$.

Ainda mais incrível é o fato de que, se começarmos com qualquer número de 4 algarismos e repetirmos esse processo de ordenação e subtração, em algum momento chegaremos a 6174 ou imediatamente a 0 se todos os algarismos forem iguais.

Isso também funciona com números que têm menos de 4 algarismos se colocarmos zeros à esquerda do número até chegarmos a 4 algarismos.

Ex: vamos começar com o número 0837:

$$\begin{align}   & 8730 - 0378 = 8352 \\\\
  & 8532 - 2358 = 6174 \end{align}$$

6174 é chamado de constante de Kaprekar. O processo de ordenar e subtrair e repetir isso até chegar a 0 ou à constante de Kaprekar é chamado de rotina de Kaprekar.

Podemos considerar a rotina de Kaprekar para outras bases e quantidades de algarismos. Infelizmente, não é garantido que uma constante de Kaprekar exista em todos os casos; ou a rotina pode terminar em um ciclo para alguns números de entrada ou a constante a qual a rotina chega pode diferir para números de entrada diversos. Podemos, no entanto, mostrar que, para 5 algarismos e uma base $b = 6t + 3 ≠ 9$, existe uma constante de Kaprekar.

Ex: base 15: ${(10, 4, 14, 9, 5)}\_{15}$ base 21: $(14, 6, 20, 13, 7)\_{21}$

Defina $C_b$ como a constante de Kaprekar na base $b$ para 5 algarismos. Defina a função $sb(i)$ como:

- 0 se $i = C_b$ ou se $i$ escrito na base $b$ consiste em 5 algarismos idênticos
- o número de iterações necessário para que a rotina de Kaprekar na base $b$ chegue a $C_b$, em outros casos

Observe que podemos definir $sb(i)$ para todos os números inteiros $i &lt; b^5$. Se $i$ escrito na base $b$ tiver menos de 5 algarismos, o número recebe algarismos zero à esquerda até chegar a 5 algarismos antes de aplicar a rotina de Kaprekar.

Defina $S(b)$ como a soma de $sb(i)$ para $0 &lt; i &lt; b^5$. Ex: $S(15) = 5.274.369$ $S(111) = 400.668.930.299$

Encontre a soma de $S(6k + 3)$ para $2 ≤ k ≤ 300$. Dê os últimos 18 algarismos da sua resposta.

# --hints--

`kaprekarConstant()` deve retornar `552506775824935500`.

```js
assert.strictEqual(kaprekarConstant(), 552506775824935500);
```

# --seed--

## --seed-contents--

```js
function kaprekarConstant() {

  return true;
}

kaprekarConstant();
```

# --solutions--

```js
// solution required
```
