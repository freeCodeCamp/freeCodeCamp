---
id: 587d7fa8367417b2b2512bca
title: Change the Presentation of a Bar Chart
challengeType: 6
videoUrl: ''
localeTitle: Alterar a apresentação de um gráfico de barras
---

## Description
<section id="description"> O último desafio criou um gráfico de barras, mas há algumas alterações de formatação que podem melhorá-lo: 1) Adicione espaço entre cada barra para separá-las visualmente, o que é feito adicionando uma margem ao CSS para a classe de <code>bar</code> 2) Aumentar a altura das barras para melhor mostrar a diferença de valores, o que é feito multiplicando o valor por um número para dimensionar a altura </section>

## Instructions
<section id="instructions"> Primeiro, adicione uma <code>margin</code> de 2px à classe de <code>bar</code> na tag de <code>style</code> . Em seguida, altere a função de retorno de chamada no método <code>style()</code> para que ele retorne um valor 10 vezes o valor dos dados originais (mais o &quot;px&quot;). <strong>Nota</strong> <br> Multiplicar cada ponto de dados pela <em>mesma</em> constante apenas altera a escala. É como aumentar o zoom e isso não altera o significado dos dados subjacentes. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O primeiro <code>div</code> deve ter uma <code>height</code> de 120 pixels e uma <code>margin</code> de 2 pixels.
    testString: 'assert($("div").eq(0).css("height") == "120px" && $("div").eq(0).css("margin-right") == "2px", "The first <code>div</code> should have a <code>height</code> of 120 pixels and a <code>margin</code> of 2 pixels.");'
  - text: O segundo <code>div</code> deve ter uma <code>height</code> de 310 pixels e uma <code>margin</code> de 2 pixels.
    testString: 'assert($("div").eq(1).css("height") == "310px" && $("div").eq(1).css("margin-right") == "2px", "The second <code>div</code> should have a <code>height</code> of 310 pixels and a <code>margin</code> of 2 pixels.");'
  - text: O terceiro <code>div</code> deve ter uma <code>height</code> de 220 pixels e uma <code>margin</code> de 2 pixels.
    testString: 'assert($("div").eq(2).css("height") == "220px" && $("div").eq(2).css("margin-right") == "2px", "The third <code>div</code> should have a <code>height</code> of 220 pixels and a <code>margin</code> of 2 pixels.");'
  - text: O quarto <code>div</code> deve ter uma <code>height</code> de 170 pixels e uma <code>margin</code> de 2 pixels.
    testString: 'assert($("div").eq(3).css("height") == "170px" && $("div").eq(3).css("margin-right") == "2px", "The fourth <code>div</code> should have a <code>height</code> of 170 pixels and a <code>margin</code> of 2 pixels.");'
  - text: O quinto <code>div</code> deve ter uma <code>height</code> de 250 pixels e uma <code>margin</code> de 2 pixels.
    testString: 'assert($("div").eq(4).css("height") == "250px" && $("div").eq(4).css("margin-right") == "2px", "The fifth <code>div</code> should have a <code>height</code> of 250 pixels and a <code>margin</code> of 2 pixels.");'
  - text: O sexto <code>div</code> deve ter uma <code>height</code> de 180 pixels e uma <code>margin</code> de 2 pixels.
    testString: 'assert($("div").eq(5).css("height") == "180px" && $("div").eq(5).css("margin-right") == "2px", "The sixth <code>div</code> should have a <code>height</code> of 180 pixels and a <code>margin</code> of 2 pixels.");'
  - text: O sétimo <code>div</code> deve ter uma <code>height</code> de 290 pixels e uma <code>margin</code> de 2 pixels.
    testString: 'assert($("div").eq(6).css("height") == "290px" && $("div").eq(6).css("margin-right") == "2px", "The seventh <code>div</code> should have a <code>height</code> of 290 pixels and a <code>margin</code> of 2 pixels.");'
  - text: O oitavo <code>div</code> deve ter uma <code>height</code> de 140 pixels e uma <code>margin</code> de 2 pixels.
    testString: 'assert($("div").eq(7).css("height") == "140px" && $("div").eq(7).css("margin-right") == "2px", "The eighth <code>div</code> should have a <code>height</code> of 140 pixels and a <code>margin</code> of 2 pixels.");'
  - text: O nono <code>div</code> deve ter uma <code>height</code> de 90 pixels e uma <code>margin</code> de 2 pixels.
    testString: 'assert($("div").eq(8).css("height") == "90px" && $("div").eq(8).css("margin-right") == "2px", "The ninth <code>div</code> should have a <code>height</code> of 90 pixels and a <code>margin</code> of 2 pixels.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    /* Add your code below this line */

    /* Add your code above this line */
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      // Add your code below this line
      .style("height", (d) => (d + "px"))

      // Add your code above this line
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
