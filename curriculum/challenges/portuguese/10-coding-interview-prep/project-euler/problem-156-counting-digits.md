---
id: 5900f4091000cf542c50ff1b
title: 'Problema 156: Contagem de algarismos'
challengeType: 1
forumTopicId: 301787
dashedName: problem-156-counting-digits
---

# --description--

A partir de zero, os números naturais são escritos na base 10, assim:

0 1 2 3 4 5 6 7 8 9 10 11 12....

Considere o algarismo $d = 1$. Depois de anotarmos cada número, vamos atualizar o número de unidades que ocorreram e chamar esse número de $f(n, 1)$. Os primeiros valores para $f(n, 1)$, então, são os seguintes:

| $n$ | $f(n, 1)$ |
| --- | --------- |
| 0   | 0         |
| 1   | 1         |
| 2   | 1         |
| 3   | 1         |
| 4   | 1         |
| 5   | 1         |
| 6   | 1         |
| 7   | 1         |
| 8   | 1         |
| 9   | 1         |
| 10  | 2         |
| 11  | 4         |
| 12  | 5         |

Observe que $f(n, 1)$ nunca é igual a 3.

Portanto, as duas primeiras soluções da equação $f(n, 1) = n$ são $n = 0$ e $n = 1$. A próxima solução é $n = 199981$. Da mesma forma, a função $f(n, d)$ indica o número total de algarismos d que foram anotados após o número $n$ ter sido escrito.

De fato, para cada algarismo $d ≠ 0$, 0 é a primeira solução da equação $f(n, d) = n$. Considere $s(d)$ a soma de todas as soluções para as quais $f(n, d) = n$.

Você é informado de que $s(1) = 22786974071$. Encontre $\sum{s(d)}$ para $1 ≤ d ≤ 9$.

Observação: se, para alguns $n$, $f(n, d) = n$ para mais de um valor de $d$ este valor de $n$ é contado novamente para cada valor de $d$ para o qual $f(n, d) = n$.

# --hints--

`countingDigits()` deve retornar `21295121502550`.

```js
assert.strictEqual(countingDigits(), 21295121502550);
```

# --seed--

## --seed-contents--

```js
function countingDigits() {

  return true;
}

countingDigits();
```

# --solutions--

```js
// solution required
```
