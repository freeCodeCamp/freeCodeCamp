---
id: 587d7b86367417b2b2512b3c
title: Use Caution When Reinitializing Variables Inside a Loop
challengeType: 1
videoUrl: ''
localeTitle: Tenha cuidado ao reinicializar variáveis ​​dentro de um loop
---

## Description
<section id="description"> Às vezes é necessário salvar informações, incrementar contadores ou redefinir variáveis ​​dentro de um loop. Uma questão potencial é quando as variáveis ​​devem ser reinicializadas e não são, ou vice-versa. Isso é particularmente perigoso se você acidentalmente redefinir a variável que está sendo usada para a condição do terminal, causando um loop infinito. A impressão de valores de variáveis ​​em cada ciclo do loop usando <code>console.log()</code> pode revelar o comportamento de bugs relacionado à redefinição ou ao não redefinir uma variável. </section>

## Instructions
<section id="instructions"> A seguinte função deve criar um array bidimensional com <code>m</code> linhas e <code>n</code> colunas de zeros. Infelizmente, ele não está produzindo a saída esperada porque a variável de <code>row</code> não está sendo reinicializada (definida para uma matriz vazia) no loop externo. Corrigir o código para que ele retorne uma matriz de zeros 3x2 correta, que se parece com <code>[[0, 0], [0, 0], [0, 0]]</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve definir a variável <code>matrix</code> para um array contendo 3 linhas de 2 colunas de zeros cada.
    testString: 'assert(JSON.stringify(matrix) == "[[0,0],[0,0],[0,0]]", "Your code should set the <code>matrix</code> variable to an array holding 3 rows of 2 columns of zeroes each.");'
  - text: A variável da <code>matrix</code> deve ter 3 linhas.
    testString: 'assert(matrix.length == 3, "The <code>matrix</code> variable should have 3 rows.");'
  - text: A variável da <code>matrix</code> deve ter 2 colunas em cada linha.
    testString: 'assert(matrix[0].length == 2 && matrix[1].length === 2 && matrix[2].length === 2, "The <code>matrix</code> variable should have 2 columns in each row.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
