---
id: 587d7fac367417b2b2512bdc
title: Use the d3.max and d3.min Functions to Find Minimum and Maximum Values in a Dataset
challengeType: 6
videoUrl: ''
localeTitle: Use as funções d3.max e d3.min para localizar valores mínimos e máximos em um conjunto de dados
---

## Description
<section id="description"> O <code>domain()</code> métodos D3 <code>domain()</code> e <code>range()</code> definem essa informação para sua escala com base nos dados. Existem alguns métodos para tornar isso mais fácil. Muitas vezes, quando você define o domínio, você deseja usar os valores mínimo e máximo dentro do conjunto de dados. Tentar encontrar esses valores manualmente, especialmente em um grande conjunto de dados, pode causar erros. D3 tem dois métodos - <code>min()</code> e <code>max()</code> para retornar essa informação. Aqui está um exemplo: <blockquote> const exampleData = [34, 234, 73, 90, 6, 52]; <br> d3.min (exampleData) // Retorna 6 <br> d3.max (exampleData) // Retorna 234 </blockquote> Um conjunto de dados pode ter matrizes aninhadas, como os pares de coordenadas [x, y] que estavam no exemplo do gráfico de dispersão. Nesse caso, você precisa dizer ao D3 como calcular o máximo e o mínimo. Felizmente, os métodos <code>min()</code> e <code>max()</code> assumem uma função de retorno de chamada. Neste exemplo, o argumento <code>d</code> da função de retorno de chamada é para a matriz interna atual. O retorno de chamada precisa retornar o elemento da matriz interna (o valor x ou y) sobre o qual você deseja calcular o máximo ou o mínimo. Veja um exemplo de como encontrar os valores mínimo e máximo com uma matriz de matrizes: <blockquote> const locationData = [[1, 7], [6, 3], [8, 3]]; <br> // Retorna o menor número dos primeiros elementos <br> const minX = d3.min (locationData, (d) =&gt; d [0]); <br> // minX comparado 1, 6 e 8 e está definido como 1 </blockquote></section>

## Instructions
<section id="instructions"> A variável <code>positionData</code> contém um array tridimensional (3D). Use um método D3 para encontrar o valor máximo da coordenada z (o terceiro valor) das matrizes e salve-o na variável de <code>output</code> . <strong>Nota</strong> <br> Fato divertido - D3 pode traçar matrizes 3D. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O texto no <code>h2</code> deve ser 8.
    testString: 'assert(output == 8 && $("h2").text() == "8", "The text in the <code>h2</code> should be 8.");'
  - text: Seu código deve usar o método <code>max()</code> .
    testString: 'assert(code.match(/\.max/g), "Your code should use the <code>max()</code> method.")'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const positionData = [[1, 7, -4],[6, 3, 8],[2, 8, 3]]
    // Add your code below this line

    const output = undefined; // Change this line

    // Add your code above this line

    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
