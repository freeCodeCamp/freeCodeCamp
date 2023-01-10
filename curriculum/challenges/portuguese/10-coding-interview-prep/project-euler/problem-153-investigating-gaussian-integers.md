---
id: 5900f4051000cf542c50ff18
title: 'Problema 153: Investigação de números inteiros gaussianos'
challengeType: 1
forumTopicId: 301784
dashedName: problem-153-investigating-gaussian-integers
---

# --description--

Como todos sabemos, a equação $x^2 = -1$ não tem soluções para $x$ real.

Se, no entanto, introduzirmos o número imaginário $i$, esta equação tem duas soluções: $x = i$ e $x = -i$.

Se formos mais longe, a equação ${(x - 3)}^2 = -4$ tem duas soluções complexas: $x = 3 + 2i$ e $x = 3 - 2i$, que são chamados de complexos conjugados um do outro.

Os números na forma $a + bi$ são chamados de números complexos.

Em geral, $a + bi$ e $a - bi$ são os conjugados complexos um do outro. Um número inteiro gaussiano é um número complexo $a + bi$, tal que $a$ e $b$ são números inteiros.

Os números inteiros regulares também são números inteiros gaussianos (com $b = 0$).

Para distingui-los de números inteiros gaussianos com $b ≠ 0$ chamamos esses inteiros de "inteiros racionais".

Um número inteiro gaussiano é chamado de divisor de um número inteiro racional $n$ se o resultado também for um número inteiro gaussiano.

Se, por exemplo, dividirmos 5 por $1 + 2i$, podemos simplificar da seguinte maneira:

Multiplicar o numerador e o denominador pelo conjugado complexo de $1 + 2i$, ou seja, $1 - 2i$.

O resultado é:

$$\frac{5}{1 + 2i} = \frac{5}{1 + 2i} \frac{1 - 2i}{1 - 2i} = \frac{5(1 - 2i)}{1 - {(2i)}^2} = \frac{5(1 - 2i)}{1 - (-4)} = \frac{5(1 - 2i)}{5} = 1 - 2i$$

Assim sendo, $1 + 2i$ é um divisor de 5.

Observe que $1 + i$ não é um divisor de 5, pois:

$$\frac{5}{1 + i} = \frac{5}{2} - \frac{5}{2}i$$

Observe também que se o número inteiro gaussiano ($a + bi$) for um divisor de um número inteiro racional $n$, então seu conjugado complexo ($a - bi$) também será um divisor de $n$. De fato, 5 tem seis divisores, sendo que a parte real é positiva: {1, 1 + 2i, 1 - 2i, 2 + i, 2 - i, 5}.

A seguir, vemos uma tabela de todos os divisores para os primeiros cinco números inteiros racionais positivos:

| n | Números inteiros gaussianos divisores com parte real positiva | Soma s(n) destes divisores |
| - | ------------------------------------------------------------- | -------------------------- |
| 1 | 1                                                             | 1                          |
| 2 | 1, 1 + i, 1 - i, 2                                            | 5                          |
| 3 | 1, 3                                                          | 4                          |
| 4 | 1, 1 + i, 1 - i, 2, 2 + 2i, 2 - 2i, 4                         | 13                         |
| 5 | 1, 1 + 2i, 1 - 2i, 2 + i, 2 - i, 5                            | 12                         |

Para divisores com partes reais positivas, então, temos: $\displaystyle\sum_{n=1}^5 s(n) = 35$.

Para $1 ≤ n ≤ {10}^5$, $\displaystyle\sum_{n = 1}^{{10}^5} s(n) = 17924657155$.

Qual é $\displaystyle\sum_{n=1}^{{10}^8} s(n)$?

# --hints--

`sumGaussianIntegers()` deve retornar `17971254122360636`.

```js
assert.strictEqual(sumGaussianIntegers(), 17971254122360636);
```

# --seed--

## --seed-contents--

```js
function sumGaussianIntegers() {

  return true;
}

sumGaussianIntegers();
```

# --solutions--

```js
// solution required
```
