---
id: 587d7fab367417b2b2512bd8
title: Add Attributes to the Circle Elements
challengeType: 6
videoUrl: ''
localeTitle: Añadir atributos a los elementos del círculo
---

## Description
<section id="description"> El último desafío creó los elementos del <code>circle</code> para cada punto en el <code>dataset</code> y los anexó al lienzo de SVG. Pero D3 necesita más información sobre la posición y el tamaño de cada <code>circle</code> para mostrarlos correctamente. Un <code>circle</code> en SVG tiene tres atributos principales. Los atributos <code>cx</code> y <code>cy</code> son las coordenadas. Le dicen a D3 dónde colocar el <em>centro</em> de la forma en el lienzo de SVG. El radio (atributo <code>r</code> ) da el tamaño del <code>circle</code> . Al igual que el <code>rect</code> <code>y</code> coordinar, el <code>cy</code> atributo para un <code>circle</code> se mide desde la parte superior del lienzo SVG, no de abajo. Los tres atributos pueden usar una función de devolución de llamada para establecer sus valores dinámicamente. Recuerde que todos los métodos encadenados después de los <code>data(dataset)</code> ejecutan una vez por elemento en el <code>dataset</code> de <code>dataset</code> . El parámetro <code>d</code> en la función de devolución de llamada se refiere al elemento actual en el <code>dataset</code> de <code>dataset</code> , que es una matriz para cada punto. Utiliza la notación de corchete, como <code>d[0]</code> , para acceder a los valores de esa matriz. </section>

## Instructions
<section id="instructions"> Agregue los atributos <code>cx</code> , <code>cy</code> y <code>r</code> a los elementos del <code>circle</code> . El valor <code>cx</code> debe ser el primer número en la matriz para cada elemento en el <code>dataset</code> de <code>dataset</code> . El valor <code>cy</code> debe basarse en el segundo número de la matriz, pero asegúrese de mostrar el gráfico hacia arriba y no invertido. El valor <code>r</code> debe ser 5 para todos los círculos. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Tu código debe tener 10 elementos <code>circle</code> .
    testString: 'assert($("circle").length == 10, "Your code should have 10 <code>circle</code> elements.");'
  - text: 'El primer elemento del <code>circle</code> debe tener un valor <code>cx</code> de 34, un valor <code>cy</code> de 422 y un valor <code>r</code> de 5.'
    testString: 'assert($("circle").eq(0).attr("cx") == "34" && $("circle").eq(0).attr("cy") == "422" && $("circle").eq(0).attr("r") == "5", "The first <code>circle</code> element should have a <code>cx</code> value of 34, a <code>cy</code> value of 422, and an <code>r</code> value of 5.");'
  - text: 'El segundo elemento del <code>circle</code> debe tener un valor de <code>cx</code> de 109, un valor de <code>cy</code> de 220 y un valor de <code>r</code> de 5.'
    testString: 'assert($("circle").eq(1).attr("cx") == "109" && $("circle").eq(1).attr("cy") == "220" && $("circle").eq(1).attr("r") == "5", "The second <code>circle</code> element should have a <code>cx</code> value of 109, a <code>cy</code> value of 220, and an <code>r</code> value of 5.");'
  - text: 'El tercer elemento del <code>circle</code> debe tener un valor <code>cx</code> de 310, un valor <code>cy</code> de 380 y un valor <code>r</code> de 5.'
    testString: 'assert($("circle").eq(2).attr("cx") == "310" && $("circle").eq(2).attr("cy") == "380" && $("circle").eq(2).attr("r") == "5", "The third <code>circle</code> element should have a <code>cx</code> value of 310, a <code>cy</code> value of 380, and an <code>r</code> value of 5.");'
  - text: 'El cuarto elemento del <code>circle</code> debe tener un valor <code>cx</code> de 79, un valor <code>cy</code> de 89 y un valor <code>r</code> de 5.'
    testString: 'assert($("circle").eq(3).attr("cx") == "79" && $("circle").eq(3).attr("cy") == "89" && $("circle").eq(3).attr("r") == "5", "The fourth <code>circle</code> element should have a <code>cx</code> value of 79, a <code>cy</code> value of 89, and an <code>r</code> value of 5.");'
  - text: 'El quinto elemento del <code>circle</code> debe tener un valor <code>cx</code> de 420, un valor <code>cy</code> de 280 y un valor <code>r</code> de 5.'
    testString: 'assert($("circle").eq(4).attr("cx") == "420" && $("circle").eq(4).attr("cy") == "280" && $("circle").eq(4).attr("r") == "5", "The fifth <code>circle</code> element should have a <code>cx</code> value of 420, a <code>cy</code> value of 280, and an <code>r</code> value of 5.");'
  - text: 'El elemento del sexto <code>circle</code> debe tener un valor <code>cx</code> de 233, un valor <code>cy</code> de 355 y un valor <code>r</code> de 5.'
    testString: 'assert($("circle").eq(5).attr("cx") == "233" && $("circle").eq(5).attr("cy") == "355" && $("circle").eq(5).attr("r") == "5", "The sixth <code>circle</code> element should have a <code>cx</code> value of 233, a <code>cy</code> value of 355, and an <code>r</code> value of 5.");'
  - text: 'El elemento del séptimo <code>circle</code> debe tener un valor <code>cx</code> de 333, un valor <code>cy</code> de 404 y un valor <code>r</code> de 5.'
    testString: 'assert($("circle").eq(6).attr("cx") == "333" && $("circle").eq(6).attr("cy") == "404" && $("circle").eq(6).attr("r") == "5", "The seventh <code>circle</code> element should have a <code>cx</code> value of 333, a <code>cy</code> value of 404, and an <code>r</code> value of 5.");'
  - text: 'El elemento del octavo <code>circle</code> debe tener un valor <code>cx</code> de 222, un valor <code>cy</code> de 167 y un valor <code>r</code> de 5.'
    testString: 'assert($("circle").eq(7).attr("cx") == "222" && $("circle").eq(7).attr("cy") == "167" && $("circle").eq(7).attr("r") == "5", "The eighth <code>circle</code> element should have a <code>cx</code> value of 222, a <code>cy</code> value of 167, and an <code>r</code> value of 5.");'
  - text: 'El noveno elemento del <code>circle</code> debe tener un valor <code>cx</code> de 78, un valor <code>cy</code> de 180 y un valor <code>r</code> de 5.'
    testString: 'assert($("circle").eq(8).attr("cx") == "78" && $("circle").eq(8).attr("cy") == "180" && $("circle").eq(8).attr("r") == "5", "The ninth <code>circle</code> element should have a <code>cx</code> value of 78, a <code>cy</code> value of 180, and an <code>r</code> value of 5.");'
  - text: 'El elemento del décimo <code>circle</code> debe tener un valor <code>cx</code> de 21, un valor <code>cy</code> de 377 y un valor <code>r</code> de 5.'
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
