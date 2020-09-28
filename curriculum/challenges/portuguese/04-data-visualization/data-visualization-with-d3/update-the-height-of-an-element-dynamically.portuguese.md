---
id: 587d7fa8367417b2b2512bc9
title: Update the Height of an Element Dynamically
challengeType: 6
videoUrl: ''
localeTitle: Atualizar a Altura de um Elemento Dinamicamente
---

## Description
<section id="description"> Os desafios anteriores cobriam como exibir dados de uma matriz e como adicionar classes CSS. Você pode combinar essas lições para criar um gráfico de barras simples. Há duas etapas para isso: 1) Criar uma <code>div</code> para cada ponto de dados na matriz 2) Dar a cada <code>div</code> uma altura dinâmica, usando uma função de retorno de chamada no método <code>style()</code> que define a altura igual ao valor dos dados. definir um estilo usando uma função de retorno de chamada: <code>selection.style(&quot;cssProperty&quot;, (d) =&gt; d)</code> </section>

## Instructions
<section id="instructions"> Adicione o método <code>style()</code> ao código no editor para definir a propriedade <code>height</code> para cada elemento. Use uma função de retorno de chamada para retornar o valor do ponto de dados com a string &quot;px&quot; adicionada a ele. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O primeiro <code>div</code> deve ter uma <code>height</code> de 12 pixels.
    testString: 'assert($("div").eq(0).css("height") == "12px", "The first <code>div</code> should have a <code>height</code> of 12 pixels.");'
  - text: O segundo <code>div</code> deve ter uma <code>height</code> de 31 pixels.
    testString: 'assert($("div").eq(1).css("height") == "31px", "The second <code>div</code> should have a <code>height</code> of 31 pixels.");'
  - text: O terceiro <code>div</code> deve ter uma <code>height</code> de 22 pixels.
    testString: 'assert($("div").eq(2).css("height") == "22px", "The third <code>div</code> should have a <code>height</code> of 22 pixels.");'
  - text: O quarto <code>div</code> deve ter uma <code>height</code> de 17 pixels.
    testString: 'assert($("div").eq(3).css("height") == "17px", "The fourth <code>div</code> should have a <code>height</code> of 17 pixels.");'
  - text: O quinto <code>div</code> deve ter uma <code>height</code> de 25 pixels.
    testString: 'assert($("div").eq(4).css("height") == "25px", "The fifth <code>div</code> should have a <code>height</code> of 25 pixels.");'
  - text: O sexto <code>div</code> deve ter uma <code>height</code> de 18 pixels.
    testString: 'assert($("div").eq(5).css("height") == "18px", "The sixth <code>div</code> should have a <code>height</code> of 18 pixels.");'
  - text: O sétimo <code>div</code> deve ter uma <code>height</code> de 29 pixels.
    testString: 'assert($("div").eq(6).css("height") == "29px", "The seventh <code>div</code> should have a <code>height</code> of 29 pixels.");'
  - text: O oitavo <code>div</code> deve ter uma <code>height</code> de 14 pixels.
    testString: 'assert($("div").eq(7).css("height") == "14px", "The eighth <code>div</code> should have a <code>height</code> of 14 pixels.");'
  - text: O nono <code>div</code> deve ter uma <code>height</code> de 9 pixels.
    testString: 'assert($("div").eq(8).css("height") == "9px", "The ninth <code>div</code> should have a <code>height</code> of 9 pixels.");'

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
