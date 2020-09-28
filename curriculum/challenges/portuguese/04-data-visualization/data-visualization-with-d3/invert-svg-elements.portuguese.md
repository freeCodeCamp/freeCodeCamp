---
id: 587d7fa9367417b2b2512bd0
title: Invert SVG Elements
challengeType: 6
videoUrl: ''
localeTitle: Inverter elementos SVG
---

## Description
<section id="description"> Você deve ter notado que o gráfico de barras estava de cabeça para baixo ou invertido. Isso ocorre porque o SVG usa coordenadas (x, y). No SVG, o ponto de origem das coordenadas está no canto superior esquerdo. Uma coordenada <code>x</code> de 0 coloca uma forma na borda esquerda da área SVG. Uma coordenada <code>y</code> de 0 coloca uma forma na borda superior da área SVG. Valores <code>x</code> altos empurram o retângulo para a direita. Valores maiores <code>y</code> empurram o retângulo para baixo. Para tornar as barras com o lado direito para cima, você precisa mudar a maneira como a coordenada <code>y</code> é calculada. Ele precisa considerar tanto a altura da barra quanto a altura total da área SVG. A altura da área SVG é 100. Se você tiver um ponto de dados de 0 no conjunto, você deseja que a barra inicie na parte inferior da área SVG (não no topo). Para fazer isso, a coordenada <code>y</code> precisa de um valor de 100. Se o valor do ponto de dados fosse 1, você começaria com uma coordenada <code>y</code> de 100 para definir a barra na parte inferior. Então você precisa considerar a altura da barra de 1, então a coordenada <code>y</code> final seria 99. A coordenada <code>y</code> que é <code>y = heightOfSVG - heightOfBar</code> colocaria as barras com o lado direito para cima. </section>

## Instructions
<section id="instructions"> Altere a função de retorno de chamada para o atributo <code>y</code> para definir as barras com o lado direito para cima. Lembre-se que a <code>height</code> da barra é 3 vezes o valor de dados <code>d</code> . <strong>Nota</strong> <br> Em geral, a relação é <code>y = h - m * d</code> , onde <code>m</code> é a constante que escala os pontos de dados. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O primeiro <code>rect</code> deve ter um valor de <code>y</code> de 64.
    testString: 'assert($("rect").eq(0).attr("y") == h - (dataset[0] * 3), "The first <code>rect</code> should have a <code>y</code> value of 64.");'
  - text: O segundo <code>rect</code> deve ter um valor de <code>y</code> de 7.
    testString: 'assert($("rect").eq(1).attr("y") == h - (dataset[1] * 3), "The second <code>rect</code> should have a <code>y</code> value of 7.");'
  - text: O terceiro <code>rect</code> deve ter um valor de <code>y</code> de 34.
    testString: 'assert($("rect").eq(2).attr("y") == h - (dataset[2] * 3), "The third <code>rect</code> should have a <code>y</code> value of 34.");'
  - text: O quarto <code>rect</code> deve ter um valor de <code>y</code> de 49.
    testString: 'assert($("rect").eq(3).attr("y") == h - (dataset[3] * 3), "The fourth <code>rect</code> should have a <code>y</code> value of 49.");'
  - text: O quinto <code>rect</code> deve ter um valor de <code>y</code> de 25.
    testString: 'assert($("rect").eq(4).attr("y") == h - (dataset[4] * 3), "The fifth <code>rect</code> should have a <code>y</code> value of 25.");'
  - text: O sexto <code>rect</code> deve ter um valor de <code>y</code> de 46.
    testString: 'assert($("rect").eq(5).attr("y") == h - (dataset[5] * 3), "The sixth <code>rect</code> should have a <code>y</code> value of 46.");'
  - text: O sétimo <code>rect</code> deve ter um valor <code>y</code> de 13.
    testString: 'assert($("rect").eq(6).attr("y") == h - (dataset[6] * 3), "The seventh <code>rect</code> should have a <code>y</code> value of 13.");'
  - text: O oitavo <code>rect</code> deve ter um valor de <code>y</code> de 58.
    testString: 'assert($("rect").eq(7).attr("y") == h - (dataset[7] * 3), "The eighth <code>rect</code> should have a <code>y</code> value of 58.");'
  - text: O nono <code>rect</code> deve ter um valor de <code>y</code> de 73.
    testString: 'assert($("rect").eq(8).attr("y") == h - (dataset[8] * 3), "The ninth <code>rect</code> should have a <code>y</code> value of 73.");'

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
       .attr("y", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       })
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d);
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
