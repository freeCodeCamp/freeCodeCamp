---
id: 587d7fab367417b2b2512bd9
title: Add Labels to Scatter Plot Circles
challengeType: 6
videoUrl: ''
localeTitle: Adicionar rótulos aos círculos de plotagem de dispersão
---

## Description
<section id="description"> Você pode adicionar texto para criar rótulos para os pontos em um gráfico de dispersão. O objetivo é exibir os valores separados por vírgulas dos primeiros campos ( <code>x</code> ) e segundos ( <code>y</code> ) de cada item no <code>dataset</code> . As <code>text</code> nós precisamos <code>x</code> e <code>y</code> atributos para posicioná-la na tela SVG. Nesse desafio, o valor <code>y</code> (que determina a altura) pode usar o mesmo valor que o <code>circle</code> usa para seu atributo <code>cy</code> . O valor <code>x</code> pode ser um pouco maior que o valor <code>cx</code> do <code>circle</code> , portanto, o rótulo fica visível. Isso empurrará o rótulo para a direita do ponto plotado. </section>

## Instructions
<section id="instructions"> Rotule cada ponto no gráfico de dispersão usando os elementos de <code>text</code> . O texto do rótulo deve ser os dois valores separados por uma vírgula e um espaço. Por exemplo, o rótulo para o primeiro ponto é &quot;34, 78&quot;. Defina o atributo <code>x</code> para que ele seja 5 unidades a mais que o valor usado para o atributo <code>cx</code> no <code>circle</code> . Defina o atributo <code>y</code> da mesma maneira que é usado para o valor de <code>cy</code> no <code>circle</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve ter 10 elementos de <code>text</code> .
    testString: 'assert($("text").length == 10, "Your code should have 10 <code>text</code> elements.");'
  - text: 'A primeira etiqueta deve ter o texto &quot;34, 78&quot;, um valor <code>x</code> de 39 e um valor <code>y</code> de 422.'
    testString: 'assert($("text").eq(0).text() == "34, 78" && $("text").eq(0).attr("x") == "39" && $("text").eq(0).attr("y") == "422", "The first label should have text of "34, 78", an <code>x</code> value of 39, and a <code>y</code> value of 422.");'
  - text: 'A segunda etiqueta deve ter texto de &quot;109, 280&quot;, um valor de <code>x</code> de 114 e um valor de <code>y</code> de 220.'
    testString: 'assert($("text").eq(1).text() == "109, 280" && $("text").eq(1).attr("x") == "114" && $("text").eq(1).attr("y") == "220", "The second label should have text of "109, 280", an <code>x</code> value of 114, and a <code>y</code> value of 220.");'
  - text: 'O terceiro rótulo deve ter o texto &quot;310, 120&quot;, um valor <code>x</code> de 315 e um valor <code>y</code> de 380.'
    testString: 'assert($("text").eq(2).text() == "310, 120" && $("text").eq(2).attr("x") == "315" && $("text").eq(2).attr("y") == "380", "The third label should have text of "310, 120", an <code>x</code> value of 315, and a <code>y</code> value of 380.");'
  - text: 'O quarto rótulo deve ter o texto &quot;79, 411&quot;, um valor <code>x</code> de 84 e um valor <code>y</code> de 89.'
    testString: 'assert($("text").eq(3).text() == "79, 411" && $("text").eq(3).attr("x") == "84" && $("text").eq(3).attr("y") == "89", "The fourth label should have text of "79, 411", an <code>x</code> value of 84, and a <code>y</code> value of 89.");'
  - text: 'O quinto rótulo deve ter texto de &quot;420, 220&quot;, um valor de <code>x</code> de 425 e um valor de <code>y</code> de 280.'
    testString: 'assert($("text").eq(4).text() == "420, 220" && $("text").eq(4).attr("x") == "425" && $("text").eq(4).attr("y") == "280", "The fifth label should have text of "420, 220", an <code>x</code> value of 425, and a <code>y</code> value of 280.");'
  - text: 'O sexto rótulo deve ter texto de &quot;233, 145&quot;, um valor de <code>x</code> de 238 e um valor de <code>y</code> de 355.'
    testString: 'assert($("text").eq(5).text() == "233, 145" && $("text").eq(5).attr("x") == "238" && $("text").eq(5).attr("y") == "355", "The sixth label should have text of "233, 145", an <code>x</code> value of 238, and a <code>y</code> value of 355.");'
  - text: 'O sétimo rótulo deve ter texto de &quot;333, 96&quot;, um valor de <code>x</code> de 338 e um valor de <code>y</code> de 404.'
    testString: 'assert($("text").eq(6).text() == "333, 96" && $("text").eq(6).attr("x") == "338" && $("text").eq(6).attr("y") == "404", "The seventh label should have text of "333, 96", an <code>x</code> value of 338, and a <code>y</code> value of 404.");'
  - text: 'O oitavo rótulo deve ter o texto &quot;222, 333&quot;, um valor <code>x</code> de 227 e um valor <code>y</code> de 167.'
    testString: 'assert($("text").eq(7).text() == "222, 333" && $("text").eq(7).attr("x") == "227" && $("text").eq(7).attr("y") == "167", "The eighth label should have text of "222, 333", an <code>x</code> value of 227, and a <code>y</code> value of 167.");'
  - text: 'O nono rótulo deve ter texto de &quot;78, 320&quot;, um valor de <code>x</code> de 83 e um valor de <code>y</code> de 180.'
    testString: 'assert($("text").eq(8).text() == "78, 320" && $("text").eq(8).attr("x") == "83" && $("text").eq(8).attr("y") == "180", "The ninth label should have text of "78, 320", an <code>x</code> value of 83, and a <code>y</code> value of 180.");'
  - text: 'O décimo rótulo deve ter texto de &quot;21, 123&quot;, um valor de <code>x</code> de 26 e um valor de <code>y</code> de 377.'
    testString: 'assert($("text").eq(9).text() == "21, 123" && $("text").eq(9).attr("x") == "26" && $("text").eq(9).attr("y") == "377", "The tenth label should have text of "21, 123", an <code>x</code> value of 26, and a <code>y</code> value of 377.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];


    const w = 500;
    const h = 500;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d, i) => d[0])
       .attr("cy", (d, i) => h - d[1])
       .attr("r", 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
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
