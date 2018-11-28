---
id: 587d7fab367417b2b2512bd7
title: Create a Scatterplot with SVG Circles
challengeType: 6
videoUrl: ''
localeTitle: Criar um gráfico de dispersão com círculos SVG
---

## Description
<section id="description"> Um gráfico de dispersão é outro tipo de visualização. Geralmente, ele usa círculos para mapear pontos de dados, que possuem dois valores cada. Estes valores amarrar à <code>x</code> e <code>y</code> eixos, e são utilizados para posicionar o círculo na visualização. O SVG tem uma marca <code>circle</code> para criar a forma do círculo. Funciona muito parecido com os elementos <code>rect</code> que você usou para o gráfico de barras. </section>

## Instructions
<section id="instructions"> Use os métodos <code>data()</code> , <code>enter()</code> e <code>append()</code> para vincular o <code>dataset</code> de <code>dataset</code> a novos elementos de <code>circle</code> que são anexados à tela do SVG. <strong>Nota</strong> <br> Os círculos não estarão visíveis porque ainda não definimos os atributos deles. Nós vamos fazer isso no próximo desafio. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve ter 10 elementos de <code>circle</code> .
    testString: 'assert($("circle").length == 10, "Your code should have 10 <code>circle</code> elements.");'

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
