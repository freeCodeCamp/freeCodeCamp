---
id: 5900f4a81000cf542c50ffbb
title: 'Problema 316: Números em expansões decimais'
challengeType: 1
forumTopicId: 301972
dashedName: problem-316-numbers-in-decimal-expansions
---

# --description--

Considere $p = p_1 p_2 p_3 \ldots$ como uma sequência infinita de algarismos aleatórios, selecionada a partir de {0,1,2,3,4,5, 6.7.7.8,9} com igual probabilidade.

Pode-se ver que $p$ corresponde ao número real $0.p_1 p_2 p_3 \ldots$.

Também pode-se ver que escolher um número aleatório real no intervalo [0, 1) equivale a escolher uma sequência infinita de algarismos aleatórios selecionados a partir de {0,1, 2, 3,4,5, 6,7,8,9} com igual probabilidade.

Para qualquer número inteiro positivo $n$ com $d$ algarismos decimais, considere $k$ como o menor índice de tal forma que $p_k, p_{k + 1}, \ldots p_{k + d - 1}$ são os algarismos decimais de $n$, na mesma ordem.

Além disso, considere $g(n)$ como o valor esperado de $k$; pode-se provar que $g(n)$ é sempre finito e, curiosamente, sempre um número inteiro.

Por exemplo, se $n = 535$, então

para $p = 31415926\mathbf{535}897\ldots$, temos que $k = 9$

para $p = 35528714365004956000049084876408468\mathbf{535}4\ldots$, temos que $k = 36$

etc. e vemos que $g(535) = 1008$.

Dado que $\displaystyle\sum_{n = 2}^{999} g\left(\left\lfloor\frac{{10}^6}{n}\right\rfloor\right) = 27280188$, find $\displaystyle\sum_{n = 2}^{999.999} g\left(\left\lfloor\frac{{10}^{16}}{n}\right\rfloor\right)$.

**Observação:** $\lfloor x\rfloor$ representa a função piso.

# --hints--

`numbersInDecimalExpansion()` deve retornar `542934735751917760`.

```js
assert.strictEqual(numbersInDecimalExpansion(), 542934735751917760);
```

# --seed--

## --seed-contents--

```js
function numbersInDecimalExpansion() {

  return true;
}

numbersInDecimalExpansion();
```

# --solutions--

```js
// solution required
```
