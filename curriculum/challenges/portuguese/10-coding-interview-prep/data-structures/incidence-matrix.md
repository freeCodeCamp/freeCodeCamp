---
id: 587d8256367417b2b2512c79
title: Matriz de incidência
challengeType: 1
forumTopicId: 301644
dashedName: incidence-matrix
---

# --description--

Outra forma de representar um grafo é colocá-lo em uma <dfn>matriz de incidência</dfn>

Uma <dfn>matriz de incidência</dfn> é um array bidimensional (2D). Em geral, uma matriz de incidência relaciona duas classes diferentes de objetos entre suas duas dimensões. Esse tipo de matriz é semelhante a uma matriz de adjacência. No entanto, as linhas e as colunas significam algo mais neste caso.

Nos grafos, temos arestas e nós. Estas serão as nossas "duas classes diferentes de objetos". Esta matriz terá as linhas representando os nós e as colunas representando as arestas. Isto significa que podemos ter um número desigual de linhas e colunas.

Cada coluna representará uma única aresta. Além disso, cada aresta conectará dois nós. Para mostrar que há uma aresta entre dois nós, você colocará um 1 nas duas linhas de uma coluna específica. Abaixo vemos um grafo de 3 nós com uma aresta entre o nó 1 e o nó 3.

<blockquote>    1<br>   ---<br>1 | 1<br>2 | 0<br>3 | 1</blockquote>

Aqui está um exemplo de uma incidence matrix (matriz de incidência) com 4 arestas e 4 nós. Lembre-se, as colunas são as arestas e as linhas são os próprios nós.

<blockquote>    1 2 3 4<br>   --------<br>1 | 0 1 1 1<br>2 | 1 1 0 0<br>3 | 1 0 0 1<br>4 | 0 0 1 0</blockquote>

Abaixo, vemos uma implementação em JavaScript da mesma coisa.

```js
var incMat = [
  [0, 1, 1, 1],
  [1, 1, 0, 0],
  [1, 0, 0, 1],
  [0, 0, 1, 0]
];
```

Para criar um grafo direcionado, use `-1` para uma aresta que saia de um nó específico e `1` para uma aresta que chegue a um nó.

```js
var incMatDirected = [
  [ 0, -1,  1, -1],
  [-1,  1,  0,  0],
  [ 1,  0,  0,  1],
  [ 0,  0, -1,  0]
];
```

Grafos também podem ter <dfn>pesos</dfn> nas arestas. Até agora, tivemos arestas <dfn>sem peso</dfn>, onde apenas a presença e a falta de aresta é binária (`0` ou `1`). Você pode ter pesos diferentes, dependendo da aplicação. Um peso diferente é representado como números maiores que 1.

# --instructions--

Crie uma matriz de incidência de um grafo não direcionado com cinco nós e quatro arestas. Esta matriz deve estar em um array multidimensional.

Estes cinco nós têm as seguintes relações. A primeira aresta está entre o primeiro e o segundo nó. A segunda aresta está entre o segundo e o terceiro nó. A terceira aresta entre o terceiro e o quinto nó. A quarta aresta está entre o quarto e o segundo nó. Todos os pesos das arestas são um e a ordem das arestas importa.

# --hints--

`incMatUndirected` deve conter apenas cinco nós.

```js
assert(
  incMatUndirected.length === 5 &&
    incMatUndirected
      .map(function (x) {
        return x.length === 4;
      })
      .reduce(function (a, b) {
        return a && b;
      })
);
```

Deve haver uma primeira aresta entre o primeiro e o segundo nó.

```js
assert(incMatUndirected[0][0] === 1 && incMatUndirected[1][0] === 1);
```

Deve haver uma segunda aresta entre o segundo e o terceiro nó.

```js
assert(incMatUndirected[1][1] === 1 && incMatUndirected[2][1] === 1);
```

Deve haver uma terceira aresta entre o terceiro e o quinto nó.

```js
assert(incMatUndirected[2][2] === 1 && incMatUndirected[4][2] === 1);
```

Deve haver uma quarta aresta entre o segundo e o quarto nó.

```js
assert(incMatUndirected[1][3] === 1 && incMatUndirected[3][3] === 1);
```

# --seed--

## --seed-contents--

```js
var incMatUndirected = [

];
```

# --solutions--

```js
var incMatUndirected = [[1, 0, 0, 0],[1, 1, 0, 1],[0, 1, 1, 0],[0, 0, 0, 1],[0, 0, 1, 0]];
```
