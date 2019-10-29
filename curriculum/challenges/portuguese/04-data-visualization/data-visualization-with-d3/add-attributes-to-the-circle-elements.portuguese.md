---
id: 587d7fab367417b2b2512bd8
title: Add Attributes to the Circle Elements
challengeType: 6
videoUrl: ''
localeTitle: Adicionar atributos aos elementos do círculo
---

## Description
<section id="description"> O último desafio criou os elementos do <code>circle</code> para cada ponto no <code>dataset</code> e os anexou à tela do SVG. Mas o D3 precisa de mais informações sobre a posição e o tamanho de cada <code>circle</code> para exibi-los corretamente. Um <code>circle</code> no SVG tem três atributos principais. Os atributos <code>cx</code> e <code>cy</code> são as coordenadas. Eles dizem ao D3 onde posicionar o <em>centro</em> da forma na tela do SVG. O raio (atributo <code>r</code> ) fornece o tamanho do <code>circle</code> . Assim como o <code>rect</code> <code>y</code> coordenar, o <code>cy</code> atributo para um <code>circle</code> é medido a partir do topo da tela SVG, não de baixo. Todos os três atributos podem usar uma função de retorno de chamada para definir seus valores dinamicamente. Lembre-se de que todos os métodos encadeados após <code>data(dataset)</code> executados uma vez por item no <code>dataset</code> . O parâmetro <code>d</code> na função de retorno de chamada se refere ao item atual no <code>dataset</code> , que é uma matriz para cada ponto. Você usa a notação de colchetes, como <code>d[0]</code> , para acessar os valores nessa matriz. </section>

## Instructions
<section id="instructions"> Adicione os atributos <code>cx</code> , <code>cy</code> e <code>r</code> aos elementos do <code>circle</code> . O valor <code>cx</code> deve ser o primeiro número da matriz para cada item no <code>dataset</code> . O valor <code>cy</code> deve ser baseado no segundo número do array, mas certifique-se de mostrar o gráfico com o lado direito para cima e não invertido. O valor de <code>r</code> deve ser 5 para todos os círculos. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve ter 10 elementos de <code>circle</code> .
    testString: 'assert($("circle").length == 10, "Your code should have 10 <code>circle</code> elements.");'
  - text: 'O primeiro elemento de <code>circle</code> deve ter um valor de <code>cx</code> de 34, um valor de <code>cy</code> de 422 e um valor de <code>r</code> de 5.'
    testString: 'assert($("circle").eq(0).attr("cx") == "34" && $("circle").eq(0).attr("cy") == "422" && $("circle").eq(0).attr("r") == "5", "The first <code>circle</code> element should have a <code>cx</code> value of 34, a <code>cy</code> value of 422, and an <code>r</code> value of 5.");'
  - text: 'O segundo elemento <code>circle</code> deve ter um valor de <code>cx</code> de 109, um valor de <code>cy</code> de 220 e um valor de <code>r</code> de 5.'
    testString: 'assert($("circle").eq(1).attr("cx") == "109" && $("circle").eq(1).attr("cy") == "220" && $("circle").eq(1).attr("r") == "5", "The second <code>circle</code> element should have a <code>cx</code> value of 109, a <code>cy</code> value of 220, and an <code>r</code> value of 5.");'
  - text: 'O terceiro elemento de <code>circle</code> deve ter um valor de <code>cx</code> de 310, um valor de <code>cy</code> de 380 e um valor de <code>r</code> de 5.'
    testString: 'assert($("circle").eq(2).attr("cx") == "310" && $("circle").eq(2).attr("cy") == "380" && $("circle").eq(2).attr("r") == "5", "The third <code>circle</code> element should have a <code>cx</code> value of 310, a <code>cy</code> value of 380, and an <code>r</code> value of 5.");'
  - text: 'O quarto elemento <code>circle</code> deve ter um valor <code>cx</code> de 79, um valor <code>cy</code> de 89 e um valor <code>r</code> de 5.'
    testString: 'assert($("circle").eq(3).attr("cx") == "79" && $("circle").eq(3).attr("cy") == "89" && $("circle").eq(3).attr("r") == "5", "The fourth <code>circle</code> element should have a <code>cx</code> value of 79, a <code>cy</code> value of 89, and an <code>r</code> value of 5.");'
  - text: 'O quinto elemento <code>circle</code> deve ter um valor <code>cx</code> de 420, um valor <code>cy</code> de 280 e um valor <code>r</code> de 5.'
    testString: 'assert($("circle").eq(4).attr("cx") == "420" && $("circle").eq(4).attr("cy") == "280" && $("circle").eq(4).attr("r") == "5", "The fifth <code>circle</code> element should have a <code>cx</code> value of 420, a <code>cy</code> value of 280, and an <code>r</code> value of 5.");'
  - text: 'O sexto elemento <code>circle</code> deve ter um valor <code>cx</code> de 233, um valor <code>cy</code> de 355 e um valor <code>r</code> de 5.'
    testString: 'assert($("circle").eq(5).attr("cx") == "233" && $("circle").eq(5).attr("cy") == "355" && $("circle").eq(5).attr("r") == "5", "The sixth <code>circle</code> element should have a <code>cx</code> value of 233, a <code>cy</code> value of 355, and an <code>r</code> value of 5.");'
  - text: 'O sétimo elemento <code>circle</code> deve ter um valor <code>cx</code> de 333, um valor <code>cy</code> de 404 e um valor <code>r</code> de 5.'
    testString: 'assert($("circle").eq(6).attr("cx") == "333" && $("circle").eq(6).attr("cy") == "404" && $("circle").eq(6).attr("r") == "5", "The seventh <code>circle</code> element should have a <code>cx</code> value of 333, a <code>cy</code> value of 404, and an <code>r</code> value of 5.");'
  - text: 'O oitavo elemento de <code>circle</code> deve ter um valor de <code>cx</code> de 222, um valor de <code>cy</code> de 167 e um valor de <code>r</code> de 5.'
    testString: 'assert($("circle").eq(7).attr("cx") == "222" && $("circle").eq(7).attr("cy") == "167" && $("circle").eq(7).attr("r") == "5", "The eighth <code>circle</code> element should have a <code>cx</code> value of 222, a <code>cy</code> value of 167, and an <code>r</code> value of 5.");'
  - text: 'O nono elemento <code>circle</code> deve ter um valor de <code>cx</code> de 78, um valor de <code>cy</code> de 180 e um valor de <code>r</code> de 5.'
    testString: 'assert($("circle").eq(8).attr("cx") == "78" && $("circle").eq(8).attr("cy") == "180" && $("circle").eq(8).attr("r") == "5", "The ninth <code>circle</code> element should have a <code>cx</code> value of 78, a <code>cy</code> value of 180, and an <code>r</code> value of 5.");'
  - text: 'O décimo elemento de <code>circle</code> deve ter um valor de <code>cx</code> de 21, um valor de <code>cy</code> de 377 e um valor de <code>r</code> de 5.'
    testString: 'assert($("circle").eq(9).attr("cx") == "21" && $("circle").eq(9).attr("cy") == "377" && $("circle").eq(9).attr("r") == "5", "The tenth <code>circle</code> element should have a <code>cx</code> value of 21, a <code>cy</code> value of 377, and an <code>r</code> value of 5.");'

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
