---
id: 587d7fac367417b2b2512bde
title: Use a Pre-Defined Scale to Place Elements
challengeType: 6
videoUrl: ''
localeTitle: Use uma escala pré-definida para colocar elementos
---

## Description
<section id="description"> Com as escalas configuradas, é hora de mapear o gráfico de dispersão novamente. As escalas são como funções de processamento que transformam os dados x e y em valores que se ajustam e renderizam corretamente na tela do SVG. Eles mantêm os dados dentro da área de plotagem da tela. Você define os valores de atributo de coordenadas para uma forma SVG com a função de dimensionamento. Isso inclui os atributos <code>x</code> e <code>y</code> para elementos <code>rect</code> ou <code>text</code> , ou <code>cx</code> e <code>cy</code> para <code>circles</code> . Aqui está um exemplo: <blockquote> forma <br> .attr (&quot;x&quot;, (d) =&gt; xScale (d [0])) </blockquote> Escalas definem atributos de coordenadas de forma para colocar os pontos de dados na tela do SVG. Você não precisa aplicar escalas quando exibir o valor dos dados reais, por exemplo, no método <code>text()</code> para uma dica de ferramenta ou um rótulo. </section>

## Instructions
<section id="instructions"> Use <code>xScale</code> e <code>yScale</code> para posicionar as formas de <code>circle</code> e <code>text</code> na tela do SVG. Para os <code>circles</code> , aplique as escalas para definir os atributos <code>cx</code> e <code>cy</code> . Dê-lhes um raio de 5 unidades também. Para os elementos de <code>text</code> , aplique as escalas para definir os atributos <code>x</code> e <code>y</code> . As etiquetas devem ser deslocadas para a direita dos pontos. Para fazer isso, adicione 10 unidades ao valor de dados x antes de passá-lo para o <code>xScale</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve ter 10 elementos de <code>circle</code> .
    testString: 'assert($("circle").length == 10, "Your code should have 10 <code>circle</code> elements.");'
  - text: O primeiro elemento <code>circle</code> deve ter um valor <code>cx</code> de aproximadamente 91 e um valor <code>cy</code> de aproximadamente 368 após a aplicação das escalas. Deve também ter um valor de <code>r</code> de 5.
    testString: 'assert(Math.round($("circle").eq(0).attr("cx")) == "91" && Math.round($("circle").eq(0).attr("cy")) == "368" && $("circle").eq(0).attr("r") == "5", "The first <code>circle</code> element should have a <code>cx</code> value of approximately 91 and a <code>cy</code> value of approximately 368 after applying the scales. It should also have an <code>r</code> value of 5.");'
  - text: O segundo elemento <code>circle</code> deve ter um valor <code>cx</code> de aproximadamente 159 e um valor <code>cy</code> de aproximadamente 181 após a aplicação das escalas. Deve também ter um valor de <code>r</code> de 5.
    testString: 'assert(Math.round($("circle").eq(1).attr("cx")) == "159" && Math.round($("circle").eq(1).attr("cy")) == "181" && $("circle").eq(1).attr("r") == "5", "The second <code>circle</code> element should have a <code>cx</code> value of approximately 159 and a <code>cy</code> value of approximately 181 after applying the scales. It should also have an <code>r</code> value of 5.");'
  - text: O terceiro elemento <code>circle</code> deve ter um valor <code>cx</code> de aproximadamente 340 e um valor <code>cy</code> de aproximadamente 329 após a aplicação das escalas. Deve também ter um valor de <code>r</code> de 5.
    testString: 'assert(Math.round($("circle").eq(2).attr("cx")) == "340" && Math.round($("circle").eq(2).attr("cy")) == "329" && $("circle").eq(2).attr("r") == "5", "The third <code>circle</code> element should have a <code>cx</code> value of approximately 340 and a <code>cy</code> value of approximately 329 after applying the scales. It should also have an <code>r</code> value of 5.");'
  - text: O quarto elemento <code>circle</code> deve ter um valor <code>cx</code> de aproximadamente 131 e um valor <code>cy</code> de aproximadamente 60 após a aplicação da balança. Deve também ter um valor de <code>r</code> de 5.
    testString: 'assert(Math.round($("circle").eq(3).attr("cx")) == "131" && Math.round($("circle").eq(3).attr("cy")) == "60" && $("circle").eq(3).attr("r") == "5", "The fourth <code>circle</code> element should have a <code>cx</code> value of approximately 131 and a <code>cy</code> value of approximately 60 after applying the scales. It should also have an <code>r</code> value of 5.");'
  - text: O quinto elemento <code>circle</code> deve ter um valor <code>cx</code> de aproximadamente 440 e um valor <code>cy</code> de aproximadamente 237 após a aplicação das escalas. Deve também ter um valor de <code>r</code> de 5.
    testString: 'assert(Math.round($("circle").eq(4).attr("cx")) == "440" && Math.round($("circle").eq(4).attr("cy")) == "237" && $("circle").eq(4).attr("r") == "5", "The fifth <code>circle</code> element should have a <code>cx</code> value of approximately 440 and a <code>cy</code> value of approximately 237 after applying the scales. It should also have an <code>r</code> value of 5.");'
  - text: O sexto elemento <code>circle</code> deve ter um valor <code>cx</code> de aproximadamente 271 e um valor <code>cy</code> de aproximadamente 306 após a aplicação das escalas. Deve também ter um valor de <code>r</code> de 5.
    testString: 'assert(Math.round($("circle").eq(5).attr("cx")) == "271" && Math.round($("circle").eq(5).attr("cy")) == "306" && $("circle").eq(5).attr("r") == "5", "The sixth <code>circle</code> element should have a <code>cx</code> value of approximately 271 and a <code>cy</code> value of approximately 306 after applying the scales. It should also have an <code>r</code> value of 5.");'
  - text: O sétimo elemento <code>circle</code> deve ter um valor <code>cx</code> de aproximadamente 361 e um valor <code>cy</code> de aproximadamente 351 após a aplicação das escalas. Deve também ter um valor de <code>r</code> de 5.
    testString: 'assert(Math.round($("circle").eq(6).attr("cx")) == "361" && Math.round($("circle").eq(6).attr("cy")) == "351" && $("circle").eq(6).attr("r") == "5", "The seventh <code>circle</code> element should have a <code>cx</code> value of approximately 361 and a <code>cy</code> value of approximately 351 after applying the scales. It should also have an <code>r</code> value of 5.");'
  - text: O oitavo elemento <code>circle</code> deve ter um valor <code>cx</code> de aproximadamente 261 e um valor <code>cy</code> de aproximadamente 132 depois de aplicar as escalas. Deve também ter um valor de <code>r</code> de 5.
    testString: 'assert(Math.round($("circle").eq(7).attr("cx")) == "261" && Math.round($("circle").eq(7).attr("cy")) == "132" && $("circle").eq(7).attr("r") == "5", "The eighth <code>circle</code> element should have a <code>cx</code> value of approximately 261 and a <code>cy</code> value of approximately 132 after applying the scales. It should also have an <code>r</code> value of 5.");'
  - text: O nono elemento <code>circle</code> deve ter um valor <code>cx</code> de aproximadamente 131 e um valor <code>cy</code> de aproximadamente 144 após a aplicação da balança. Deve também ter um valor de <code>r</code> de 5.
    testString: 'assert(Math.round($("circle").eq(8).attr("cx")) == "131" && Math.round($("circle").eq(8).attr("cy")) == "144" && $("circle").eq(8).attr("r") == "5", "The ninth <code>circle</code> element should have a <code>cx</code> value of approximately 131 and a <code>cy</code> value of approximately 144 after applying the scales. It should also have an <code>r</code> value of 5.");'
  - text: O décimo elemento <code>circle</code> deve ter um valor <code>cx</code> de aproximadamente 79 e um valor <code>cy</code> de aproximadamente 326 após a aplicação da balança. Deve também ter um valor de <code>r</code> de 5.
    testString: 'assert(Math.round($("circle").eq(9).attr("cx")) == "79" && Math.round($("circle").eq(9).attr("cy")) == "326" && $("circle").eq(9).attr("r") == "5", "The tenth <code>circle</code> element should have a <code>cx</code> value of approximately 79 and a <code>cy</code> value of approximately 326 after applying the scales. It should also have an <code>r</code> value of 5.");'
  - text: Seu código deve ter 10 elementos de <code>text</code> .
    testString: 'assert($("text").length == 10, "Your code should have 10 <code>text</code> elements.");'
  - text: O primeiro rótulo deve ter um valor <code>x</code> de aproximadamente 100 e um valor de <code>y</code> de aproximadamente 368 após a aplicação das escalas.
    testString: 'assert(Math.round($("text").eq(0).attr("x")) == "100" && Math.round($("text").eq(0).attr("y")) == "368", "The first label should have an <code>x</code> value of approximately 100 and a <code>y</code> value of approximately 368 after applying the scales.");'
  - text: O segundo rótulo deve ter um valor <code>x</code> de aproximadamente 168 e um valor de <code>y</code> de aproximadamente 181 após a aplicação das escalas.
    testString: 'assert(Math.round($("text").eq(1).attr("x")) == "168" && Math.round($("text").eq(1).attr("y")) == "181", "The second label should have an <code>x</code> value of approximately 168 and a <code>y</code> value of approximately 181 after applying the scales.");'
  - text: O terceiro rótulo deve ter um valor <code>x</code> de aproximadamente 350 e um valor <code>y</code> de aproximadamente 329 após a aplicação das escalas.
    testString: 'assert(Math.round($("text").eq(2).attr("x")) == "350" && Math.round($("text").eq(2).attr("y")) == "329", "The third label should have an <code>x</code> value of approximately 350 and a <code>y</code> value of approximately 329 after applying the scales.");'
  - text: O quarto rótulo deve ter um valor <code>x</code> de aproximadamente 141 e um valor de <code>y</code> de aproximadamente 60 após a aplicação das escalas.
    testString: 'assert(Math.round($("text").eq(3).attr("x")) == "141" && Math.round($("text").eq(3).attr("y")) == "60", "The fourth label should have an <code>x</code> value of approximately 141 and a <code>y</code> value of approximately 60 after applying the scales.");'
  - text: O quinto rótulo deve ter um valor de <code>x</code> de aproximadamente 449 e um valor de <code>y</code> de aproximadamente 237 após a aplicação das escalas.
    testString: 'assert(Math.round($("text").eq(4).attr("x")) == "449" && Math.round($("text").eq(4).attr("y")) == "237", "The fifth label should have an <code>x</code> value of approximately 449 and a <code>y</code> value of approximately 237 after applying the scales.");'
  - text: O sexto rótulo deve ter um valor <code>x</code> de aproximadamente 280 e um valor de <code>y</code> de aproximadamente 306 após a aplicação das escalas.
    testString: 'assert(Math.round($("text").eq(5).attr("x")) == "280" && Math.round($("text").eq(5).attr("y")) == "306", "The sixth label should have an <code>x</code> value of approximately 280 and a <code>y</code> value of approximately 306 after applying the scales.");'
  - text: O sétimo rótulo deve ter um valor <code>x</code> de aproximadamente 370 e um valor de <code>y</code> de aproximadamente 351 após a aplicação das escalas.
    testString: 'assert(Math.round($("text").eq(6).attr("x")) == "370" && Math.round($("text").eq(6).attr("y")) == "351", "The seventh label should have an <code>x</code> value of approximately 370 and a <code>y</code> value of approximately 351 after applying the scales.");'
  - text: O oitavo rótulo deve ter um valor <code>x</code> de aproximadamente 270 e um valor de <code>y</code> de aproximadamente 132 após a aplicação das escalas.
    testString: 'assert(Math.round($("text").eq(7).attr("x")) == "270" && Math.round($("text").eq(7).attr("y")) == "132", "The eighth label should have an <code>x</code> value of approximately 270 and a <code>y</code> value of approximately 132 after applying the scales.");'
  - text: O nono rótulo deve ter um valor <code>x</code> de aproximadamente 140 e um valor de <code>y</code> de aproximadamente 144 após a aplicação das escalas.
    testString: 'assert(Math.round($("text").eq(8).attr("x")) == "140" && Math.round($("text").eq(8).attr("y")) == "144", "The ninth label should have an <code>x</code> value of approximately 140 and a <code>y</code> value of approximately 144 after applying the scales.");'
  - text: O décimo rótulo deve ter um valor de <code>x</code> de aproximadamente 88 e um valor de <code>y</code> de aproximadamente 326 após a aplicação das escalas.
    testString: 'assert(Math.round($("text").eq(9).attr("x")) == "88" && Math.round($("text").eq(9).attr("y")) == "326", "The tenth label should have an <code>x</code> value of approximately 88 and a <code>y</code> value of approximately 326 after applying the scales.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const dataset = [
                  [ 34,     78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,   411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,    333 ],
                  [ 78,    320 ],
                  [ 21,   123 ]
                ];

    const w = 500;
    const h = 500;
    const padding = 60;

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
                     .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       // Add your code below this line



       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + ", "
 + d[1]))
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
