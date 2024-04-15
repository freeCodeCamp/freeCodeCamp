---
id: 5a23c84252665b21eecc7e03
title: Desvio padrão acumulado
challengeType: 1
forumTopicId: 302240
dashedName: cumulative-standard-deviation
---

# --description--

Suponha que a população de interesse sejam oito alunos em uma determinada sala de aula. Para um conjunto finito de números, o desvio-padrão da população é encontrado pegando a raiz quadrada da média dos desvios padrão ao quadrado dos valores subtraídos de seu valor médio. As notas de uma turma de oito alunos (ou seja, de uma população estatística) são os oito valores seguintes:

$2, 4, 4, 4, 5, 5, 7, 9$

Estes oito dados têm a média de 5:

$$\mu ={\frac {2+4+4+4+5+5+7+9}{8}}={\frac {40}{8}}=5$$

Primeiro, calcule os desvios de cada ponto de dados da média e calcule o quadrado do resultado de cada uma:

| Desvios de cada ponto  | Quadrado do resultado |
| ---------------------- | --------------------- |
| $(2-5)^{2}=(-3)^{2}=9$ | $(5-5)^{2}=0^{2}=0$   |
| $(4-5)^{2}=(-1)^{2}=1$ | $(5-5)^{2}=0^{2}=0$   |
| $(4-5)^{2}=(-1)^{2}=1$ | $(7-5)^{2}=2^{2}=4$   |
| $(4-5)^{2}=(-1)^{2}=1$ | $(9-5)^{2}=4^{2}=16$  |

A variância é a média desses valores:

$$\sigma ^{2}={\frac {9+1+1+1+0+0+4+16}{8}}={\frac {32}{8}}=4$$

e o desvio-padrão da população é igual à raiz quadrada da variância:

$$\sigma ={\sqrt {4}}=2$$

Escreva uma função que recebe um array de números como parâmetro e retorna o <a href="https://rosettacode.org/wiki/Standard_deviation" target="_blank" rel="noopener noreferrer nofollow">desvio padrão</a> da série.

# --hints--

`standardDeviation` deve ser uma função.

```js
assert(typeof standardDeviation == 'function');
```

`standardDeviation([2, 4, 4, 4, 5, 5, 7, 9])` deve retornar um número.

```js
assert(typeof standardDeviation([2, 4, 4, 4, 5, 5, 7, 9]) == 'number');
```

`standardDeviation([2, 4, 4, 4, 5, 5, 7, 9])` deve retornar `2`.

```js
assert.equal(standardDeviation([2, 4, 4, 4, 5, 5, 7, 9]), 2);
```

`standardDeviation([600, 470, 170, 430, 300])` deve retornar `147.323`.

```js
assert.equal(standardDeviation([600, 470, 170, 430, 300]), 147.323);
```

`standardDeviation([75, 83, 96, 100, 121, 125])` deve retornar `18.239`.

```js
assert.equal(standardDeviation([75, 83, 96, 100, 121, 125]), 18.239);
```

`standardDeviation([23, 37, 45, 49, 56, 63, 63, 70, 72, 82])` deve retornar `16.87`.

```js
assert.equal(
  standardDeviation([23, 37, 45, 49, 56, 63, 63, 70, 72, 82]),
  16.87
);
```

`standardDeviation([271, 354, 296, 301, 333, 326, 285, 298, 327, 316, 287, 314])` deve retornar `22.631`.

```js
assert.equal(
  standardDeviation([
    271,
    354,
    296,
    301,
    333,
    326,
    285,
    298,
    327,
    316,
    287,
    314
  ]),
  22.631
);
```

# --seed--

## --seed-contents--

```js
function standardDeviation(arr) {

}
```

# --solutions--

```js
function standardDeviation(arr) {
  var sum = 0,
    sum_sq = 0,
    n = arr.length;
  arr.forEach(function(e) {
    sum += e;
    sum_sq += e * e;
  });

  var std_dev = Math.sqrt(sum_sq / n - Math.pow(sum / n, 2));
  return Math.round(std_dev * 1000) / 1000;
}
```
