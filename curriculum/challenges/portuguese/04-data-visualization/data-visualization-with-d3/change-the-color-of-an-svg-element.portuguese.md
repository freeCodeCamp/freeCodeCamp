---
id: 587d7fa9367417b2b2512bd1
title: Change the Color of an SVG Element
challengeType: 6
videoUrl: ''
localeTitle: Alterar a cor de um elemento SVG
---

## Description
<section id="description"> As barras estão na posição correta, mas todas são da mesma cor preta. O SVG tem uma maneira de alterar a cor das barras. No SVG, uma forma <code>rect</code> é colorida com o atributo de <code>fill</code> . Ele suporta códigos hexadecimais, nomes de cores e valores de rgb, além de opções mais complexas, como gradientes e transparência. </section>

## Instructions
<section id="instructions"> Adicione um método <code>attr()</code> para definir o &quot;preenchimento&quot; de todas as barras para a cor &quot;navy&quot;. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: As barras devem ter uma cor de <code>fill</code> da Marinha.
    testString: 'assert($("rect").css("fill") == "rgb(0, 0, 128)", "The bars should all have a <code>fill</code> color of navy.");'

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
