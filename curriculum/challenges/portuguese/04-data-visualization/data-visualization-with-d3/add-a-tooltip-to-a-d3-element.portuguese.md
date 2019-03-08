---
id: 587d7faa367417b2b2512bd6
title: Add a Tooltip to a D3 Element
challengeType: 6
videoUrl: ''
localeTitle: Adicionar uma dica de ferramenta a um elemento D3
---

## Description
<section id="description"> Uma dica de ferramenta mostra mais informações sobre um item em uma página quando o usuário passa o mouse sobre esse item. Existem várias maneiras de adicionar uma dica de ferramenta a uma visualização. Esse desafio usa o elemento de <code>title</code> SVG. pares de <code>title</code> com o método <code>text()</code> para adicionar dinamicamente dados às barras. </section>

## Instructions
<section id="instructions"> Anexe um elemento de <code>title</code> sob cada nó <code>rect</code> . Em seguida, chame o método <code>text()</code> com uma função de retorno de chamada para que o texto exiba o valor dos dados. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve ter 9 elementos de <code>title</code> .
    testString: 'assert($("title").length == 9, "Your code should have 9 <code>title</code> elements.");'
  - text: O primeiro elemento do <code>title</code> deve ter um texto de dica de ferramenta de 12.
    testString: 'assert($("title").eq(0).text() == "12", "The first <code>title</code> element should have tooltip text of 12.");'
  - text: O segundo elemento do <code>title</code> deve ter o texto da dica de ferramenta de 31.
    testString: 'assert($("title").eq(1).text() == "31", "The second <code>title</code> element should have tooltip text of 31.");'
  - text: O terceiro elemento do <code>title</code> deve ter o texto da dica de ferramenta de 22.
    testString: 'assert($("title").eq(2).text() == "22", "The third <code>title</code> element should have tooltip text of 22.");'
  - text: O quarto elemento do <code>title</code> deve ter um texto de dica de ferramenta de 17.
    testString: 'assert($("title").eq(3).text() == "17", "The fourth <code>title</code> element should have tooltip text of 17.");'
  - text: O quinto elemento do <code>title</code> deve ter um texto de dica de ferramenta de 25.
    testString: 'assert($("title").eq(4).text() == "25", "The fifth <code>title</code> element should have tooltip text of 25.");'
  - text: O sexto elemento do <code>title</code> deve ter um texto de dica de ferramenta de 18.
    testString: 'assert($("title").eq(5).text() == "18", "The sixth <code>title</code> element should have tooltip text of 18.");'
  - text: O sétimo elemento de <code>title</code> deve ter um texto de dica de ferramenta de 29.
    testString: 'assert($("title").eq(6).text() == "29", "The seventh <code>title</code> element should have tooltip text of 29.");'
  - text: O oitavo elemento de <code>title</code> deve ter um texto de dica de ferramenta de 14.
    testString: 'assert($("title").eq(7).text() == "14", "The eighth <code>title</code> element should have tooltip text of 14.");'
  - text: O nono elemento de <code>title</code> deve ter um texto de dica de ferramenta de 9.
    testString: 'assert($("title").eq(8).text() == "9", "The ninth <code>title</code> element should have tooltip text of 9.");'

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
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy")
       .attr("class", "bar")
       // Add your code below this line



       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (d * 3 + 3))

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
