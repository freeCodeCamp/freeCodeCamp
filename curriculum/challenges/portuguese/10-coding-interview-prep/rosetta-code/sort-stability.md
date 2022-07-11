---
id: 5a23c84252665b21eecc8014
title: Estabilidade de ordenação
challengeType: 1
forumTopicId: 302308
dashedName: sort-stability
---

# --description--

Ao ordenar registros em uma tabela por uma coluna ou campo específico, uma <a href="https://www.freecodecamp.org/news/stability-in-sorting-algorithms-a-treatment-of-equality-fa3140a5a539/" target="_blank" rel="noopener noreferrer nofollow">ordenação estável</a> sempre manterá a ordem relativa dos registros que têm a mesma chave.

Por exemplo, nesta tabela de países e cidades, uma organização estável na **segunda** coluna, a das cidades, manteria US Birmingham acima de UK Birmingham. (Embora uma ordenação instável *possa*, neste caso, colocar US Birmingham acima de UK Birmingham, uma ordenação estável *garantiria* que isso ocorresse).

<pre>UK  London
US  New York
US  Birmingham
UK  Birmingham
</pre>

Da mesma forma, uma ordenação estável na primeira coluna geraria "UK London" como o primeiro item e "US Birmingham" como o último (já que a ordem dos elementos que têm a mesma palavra – "UK" ou "US" – seria mantida).

# --instructions--

Escreva uma função que receba um array bidimensional como parâmetro. Cada elemento tem 2 elementos semelhantes ao exemplo acima. A função deve ordenar o array conforme mencionado anteriormente e retornar o array ordenado.

# --hints--

`stableSort` deve ser uma função.

```js
assert(typeof stableSort == 'function');
```

`stableSort([["UK", "London"], ["US", "New York"], ["US", "Birmingham"], ["UK", "Birmingham"]])` deve retornar um array.

```js
assert(
  Array.isArray(
    stableSort([
      ['UK', 'London'],
      ['US', 'New York'],
      ['US', 'Birmingham'],
      ['UK', 'Birmingham']
    ])
  )
);
```

`stableSort([["UK", "London"], ["US", "New York"], ["US", "Birmingham"], ["UK", "Birmingham"]])` deve retornar `[["US", "Birmingham"], ["UK", "Birmingham"], ["UK", "London"], ["US", "New York"]]`.

```js
assert.deepEqual(
  stableSort([
    ['UK', 'London'],
    ['US', 'New York'],
    ['US', 'Birmingham'],
    ['UK', 'Birmingham']
  ]),
  [
    ['US', 'Birmingham'],
    ['UK', 'Birmingham'],
    ['UK', 'London'],
    ['US', 'New York']
  ]
);
```

`stableSort([[2, 2], [1, 2], [1, 4], [1, 5]])` deve retornar `[[2, 2], [1, 2], [1, 4], [1, 5]]`.

```js
assert.deepEqual(
  stableSort([
    [2, 2],
    [1, 2],
    [1, 4],
    [1, 5]
  ]),
  [
    [2, 2],
    [1, 2],
    [1, 4],
    [1, 5]
  ]
);
```

`stableSort([[11, 55], [12, 45], [11, 45], [32, 45]])` deve retornar `[[12, 45], [11, 45], [32, 45], [11, 55]]`.

```js
assert.deepEqual(
  stableSort([
    [11, 55],
    [12, 45],
    [11, 45],
    [32, 45]
  ]),
  [
    [12, 45],
    [11, 45],
    [32, 45],
    [11, 55]
  ]
);
```

`stableSort([[10, 22], [1, 2], [1, 4], [1, 5], [10, 9]])` deve retornar `[[1, 2], [1, 4], [1, 5], [10, 9], [10, 22]]`.

```js
assert.deepEqual(
  stableSort([
    [10, 22],
    [1, 2],
    [1, 4],
    [1, 5],
    [10, 9]
  ]),
  [
    [1, 2],
    [1, 4],
    [1, 5],
    [10, 9],
    [10, 22]
  ]
);
```

`stableSort([[55, 54], [12, 22], [31, 43], [31, 54], [10, 49]])` deve retornar `[[12, 22], [31, 43], [10, 49], [55, 54], [31, 54]]`.

```js
assert.deepEqual(
  stableSort([
    [55, 54],
    [12, 22],
    [31, 43],
    [31, 54],
    [10, 49]
  ]),
  [
    [12, 22],
    [31, 43],
    [10, 49],
    [55, 54],
    [31, 54]
  ]
);
```

# --seed--

## --seed-contents--

```js
function stableSort(arr) {

}
```

# --solutions--

```js
function stableSort(arr) {
  arr.sort(function(a, b) {
    return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0;
  });
  return arr;
}
```
