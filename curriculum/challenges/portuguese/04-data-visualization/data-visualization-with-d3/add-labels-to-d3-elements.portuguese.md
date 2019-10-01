---
id: 587d7faa367417b2b2512bd2
title: Add Labels to D3 Elements
challengeType: 6
videoUrl: ''
localeTitle: Adicionar rótulos aos elementos D3
---

## Description
<section id="description"> O D3 permite rotular um elemento gráfico, como uma barra, usando o elemento de <code>text</code> SVG. Como o elemento <code>rect</code> , um elemento de <code>text</code> precisa ter os atributos <code>x</code> e <code>y</code> , para colocá-lo na tela do SVG. Também precisa acessar os dados para exibir esses valores. A D3 oferece um alto nível de controle sobre como você rotula suas barras. </section>

## Instructions
<section id="instructions"> O código no editor já vincula os dados a cada novo elemento de <code>text</code> . Primeiro, anexe os nós de <code>text</code> ao <code>svg</code> . Em seguida, adicione atributos para as coordenadas <code>x</code> e <code>y</code> . Eles devem ser calculados da mesma maneira que os <code>rect</code> , exceto que o valor <code>y</code> para o <code>text</code> deve fazer com que o rótulo fique 3 unidades acima da barra. Finalmente, use o método D3 <code>text()</code> para definir o rótulo igual ao valor do ponto de dados. <strong>Nota</strong> <br> Para o rótulo ficar mais alto que a barra, decida se o valor <code>y</code> do <code>text</code> deve ser 3 maior ou 3 menor que o valor <code>y</code> da barra. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O primeiro elemento de <code>text</code> deve ter um rótulo de 12 e um valor de <code>y</code> de 61.
    testString: 'assert($("text").eq(0).text() == "12" && $("text").eq(0).attr("y") == "61", "The first <code>text</code> element should have a label of 12 and a <code>y</code> value of 61.");'
  - text: O segundo elemento de <code>text</code> deve ter um rótulo de 31 e um valor de <code>y</code> de 4.
    testString: 'assert($("text").eq(1).text() == "31" && $("text").eq(1).attr("y") == "4", "The second <code>text</code> element should have a label of 31 and a <code>y</code> value of 4.");'
  - text: O terceiro elemento de <code>text</code> deve ter um rótulo de 22 e um valor de <code>y</code> de 31.
    testString: 'assert($("text").eq(2).text() == "22" && $("text").eq(2).attr("y") == "31", "The third <code>text</code> element should have a label of 22 and a <code>y</code> value of 31.");'
  - text: O quarto elemento de <code>text</code> deve ter um rótulo de 17 e um valor de <code>y</code> de 46.
    testString: 'assert($("text").eq(3).text() == "17" && $("text").eq(3).attr("y") == "46", "The fourth <code>text</code> element should have a label of 17 and a <code>y</code> value of 46.");'
  - text: O quinto elemento de <code>text</code> deve ter um rótulo de 25 e um valor de <code>y</code> de 22.
    testString: 'assert($("text").eq(4).text() == "25" && $("text").eq(4).attr("y") == "22", "The fifth <code>text</code> element should have a label of 25 and a <code>y</code> value of 22.");'
  - text: O sexto elemento de <code>text</code> deve ter um rótulo de 18 e um valor de <code>y</code> de 43.
    testString: 'assert($("text").eq(5).text() == "18" && $("text").eq(5).attr("y") == "43", "The sixth <code>text</code> element should have a label of 18 and a <code>y</code> value of 43.");'
  - text: O sétimo elemento de <code>text</code> deve ter um rótulo de 29 e um valor de <code>y</code> de 10.
    testString: 'assert($("text").eq(6).text() == "29" && $("text").eq(6).attr("y") == "10", "The seventh <code>text</code> element should have a label of 29 and a <code>y</code> value of 10.");'
  - text: O oitavo elemento de <code>text</code> deve ter um rótulo de 14 e um valor de <code>y</code> de 55.
    testString: 'assert($("text").eq(7).text() == "14" && $("text").eq(7).attr("y") == "55", "The eighth <code>text</code> element should have a label of 14 and a <code>y</code> value of 55.");'
  - text: O nono elemento de <code>text</code> deve ter um rótulo de 9 e um valor de <code>y</code> de 70.
    testString: 'assert($("text").eq(8).text() == "9" && $("text").eq(8).attr("y") == "70", "The ninth <code>text</code> element should have a label of 9 and a <code>y</code> value of 70.");'

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
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       // Add your code below this line




       // Add your code above this line
  </script>
<body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
