---
id: 587d7faa367417b2b2512bd4
title: Add a Hover Effect to a D3 Element
challengeType: 6
videoUrl: ''
localeTitle: Adicionar um efeito de foco a um elemento D3
---

## Description
<section id="description"> É possível adicionar efeitos que destacam uma barra quando o usuário passa sobre ela com o mouse. Até agora, o estilo dos retângulos é aplicado com os métodos internos D3 e SVG, mas você também pode usar CSS. Você define a classe CSS nos elementos SVG com o método <code>attr()</code> . Em seguida, a pseudo-classe <code>:hover</code> para sua nova classe contém as regras de estilo para qualquer efeito de foco. </section>

## Instructions
<section id="instructions"> Use o método <code>attr()</code> para adicionar uma classe de <code>bar</code> a todos os elementos <code>rect</code> . Isso altera a cor de <code>fill</code> da barra para marrom quando você passa o mouse sobre ela. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seus elementos <code>rect</code> devem ter uma classe de <code>bar</code> .
    testString: 'assert($("rect").attr("class") == "bar", "Your <code>rect</code> elements should have a class of <code>bar</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .bar:hover {
    fill: brown;
  }
</style>
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
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy")
       // Add your code below this line



       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3);

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
