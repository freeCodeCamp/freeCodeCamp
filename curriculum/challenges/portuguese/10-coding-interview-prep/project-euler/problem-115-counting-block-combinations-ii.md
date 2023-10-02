---
id: 5900f3df1000cf542c50fef1
title: 'Problema 115: Contando combinações de blocos II'
challengeType: 1
forumTopicId: 301741
dashedName: problem-115-counting-block-combinations-ii
---

# --description--

Uma linha medindo `n` unidades de comprimento tem blocos vermelhos com um comprimento mínimo de `m` unidades colocadas nele, de tal forma que dois blocos vermelhos (que podem ter comprimentos diferentes) são separados por pelo menos um quadrado preto.

Deixe a função de preenchimento, $F(m, n)$, representar o número de formas que uma fila pode ser preenchida.

Por exemplo, $F(3, 29) = 673135$ e $F(3, 30) = 1089155$.

Ou seja, para m = 3, pode ser visto que n = 30 é o menor valor para o qual a função de contagem de preenchimento excede primeiro um milhão.

Da mesma maneira, para m = 10, pode ser verificado que $F(10, 56) = 880711$ e $F(10, 57) = 1148904$, então n = 57 é o menor valor para o qual a função de contagem de preenchimento excede primeiro um milhão.

Para m = 50, encontre o menor valor de `n` para o qual a função de contagem de preenchimento excede primeiro um milhão.

**Observação:** esta é uma versão mais difícil do Problema 114.

# --hints--

`countingBlockTwo()` deve retornar `168`.

```js
assert.strictEqual(countingBlockTwo(), 168);
```

# --seed--

## --seed-contents--

```js
function countingBlockTwo() {

  return true;
}

countingBlockTwo();
```

# --solutions--

```js
// solution required
```
