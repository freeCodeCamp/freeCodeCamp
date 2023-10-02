---
id: 587d7b86367417b2b2512b3c
title: Ter cuidado quando reinicializar variáveis dentro de laços
challengeType: 1
forumTopicId: 301194
dashedName: use-caution-when-reinitializing-variables-inside-a-loop
---

# --description--

Às vezes é necessário salvar informações, incrementar contadores ou redefinir variáveis dentro de um laço. Um problema em potencial é quando variáveis deveriam ser reinicializadas e, não são, ou vice versa. Isso é particularmente perigoso se você acidentalmente redefinir a variável sendo usada para a condição de parada, causando um laço infinito.

Imprimir os valores das variáveis em cada ciclo do seu laço usando `console.log()` pode ajudar a descobrir comportamentos com bugs relacionados a reiniciar ou falhar ao reiniciar uma variável.

# --instructions--

A seguinte função deveria criar um array de duas dimensões com `m` linhas e `n` colunas de zeros. Infelizmente, não está produzindo a saída esperada porque a variável `row` não está sendo reiniciada (definida de volta para um array vazio) no laço mais externo. Corrija o código para que retorne o array de zeros correto (dimensão: 3x2), que se parece com `[[0, 0], [0, 0], [0, 0]]`.

# --hints--

O código deve definir a variável `matrix` para um array contendo 3 linhas de 2 colunas de zeros.

```js
assert(JSON.stringify(matrix) == '[[0,0],[0,0],[0,0]]');
```

A variável `matrix` deve ter 3 linhas.

```js
assert(matrix.length == 3);
```

A variável `matrix` deve ter 2 colunas em cada linha.

```js
assert(
  matrix[0].length == 2 && matrix[1].length === 2 && matrix[2].length === 2
);
```

`zeroArray(4,3)` deve retornar um array com 4 linhas de 3 colunas de zeros cada.

```js
assert(JSON.stringify(zeroArray(4,3)) == '[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]');
```

# --seed--

## --seed-contents--

```js
function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray

    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

```

# --solutions--

```js
function zeroArray(m, n) {
 // Creates a 2-D array with m rows and n columns of zeroes
 let newArray = [];
 for (let i = 0; i < m; i++) {
   let row = [];
   // Adds the m-th row into newArray

   for (let j = 0; j < n; j++) {
     // Pushes n zeroes into the current row to create the columns
     row.push(0);
   }
   // Pushes the current row, which now has n zeroes in it, to the array
   newArray.push(row);
 }
 return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

```
