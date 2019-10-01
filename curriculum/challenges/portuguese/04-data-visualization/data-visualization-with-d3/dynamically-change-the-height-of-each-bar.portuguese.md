---
id: 587d7fa9367417b2b2512bcf
title: Dynamically Change the Height of Each Bar
challengeType: 6
videoUrl: ''
localeTitle: Alterar dinamicamente a altura de cada barra
---

## Description
<section id="description"> A altura de cada barra pode ser definida para o valor do ponto de dados na matriz, semelhante a como o valor <code>x</code> foi definido dinamicamente. <blockquote> selection.attr (&quot;propriedade&quot;, (d, i) =&gt; { <br> / * <br> * d é o valor do ponto de dados <br> * i é o índice do ponto de dados na matriz <br> * / <br> }) </blockquote></section>

## Instructions
<section id="instructions"> Altere a função de retorno de chamada para o atributo <code>height</code> para retornar os tempos de valor de dados 3. <strong>Nota</strong> <br> Lembre-se de que multiplicar todos os pontos de dados pela mesma constante escala os dados (como aumentar o zoom). Isso ajuda a ver as diferenças entre os valores das barras neste exemplo. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O primeiro <code>rect</code> deve ter uma <code>height</code> de 36.
    testString: 'assert($("rect").eq(0).attr("height") == "36", "The first <code>rect</code> should have a <code>height</code> of 36.");'
  - text: O segundo <code>rect</code> deve ter uma <code>height</code> de 93.
    testString: 'assert($("rect").eq(1).attr("height") == "93", "The second <code>rect</code> should have a <code>height</code> of 93.");'
  - text: O terceiro <code>rect</code> deve ter uma <code>height</code> de 66.
    testString: 'assert($("rect").eq(2).attr("height") == "66", "The third <code>rect</code> should have a <code>height</code> of 66.");'
  - text: O quarto <code>rect</code> deve ter uma <code>height</code> de 51.
    testString: 'assert($("rect").eq(3).attr("height") == "51", "The fourth <code>rect</code> should have a <code>height</code> of 51.");'
  - text: O quinto <code>rect</code> deve ter uma <code>height</code> de 75.
    testString: 'assert($("rect").eq(4).attr("height") == "75", "The fifth <code>rect</code> should have a <code>height</code> of 75.");'
  - text: O sexto <code>rect</code> deve ter uma <code>height</code> de 54.
    testString: 'assert($("rect").eq(5).attr("height") == "54", "The sixth <code>rect</code> should have a <code>height</code> of 54.");'
  - text: O sétimo <code>rect</code> deve ter uma <code>height</code> de 87.
    testString: 'assert($("rect").eq(6).attr("height") == "87", "The seventh <code>rect</code> should have a <code>height</code> of 87.");'
  - text: O oitavo <code>rect</code> deve ter uma <code>height</code> de 42.
    testString: 'assert($("rect").eq(7).attr("height") == "42", "The eighth <code>rect</code> should have a <code>height</code> of 42.");'
  - text: O nono <code>rect</code> deve ter uma <code>height</code> de 27.
    testString: 'assert($("rect").eq(8).attr("height") == "27", "The ninth <code>rect</code> should have a <code>height</code> of 27.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       });
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
