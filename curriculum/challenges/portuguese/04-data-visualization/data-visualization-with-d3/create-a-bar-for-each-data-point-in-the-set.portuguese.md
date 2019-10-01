---
id: 587d7fa8367417b2b2512bcd
title: Create a Bar for Each Data Point in the Set
challengeType: 6
videoUrl: ''
localeTitle: Crie uma barra para cada ponto de dados no conjunto
---

## Description
<section id="description"> O último desafio adicionou apenas um retângulo ao elemento <code>svg</code> para representar uma barra. Aqui, você combinará o que aprendeu até agora sobre formas <code>data()</code> , <code>enter()</code> e SVG para criar e anexar um retângulo para cada ponto de dados no <code>dataset</code> . Um desafio anterior mostrou o formato de como criar e anexar um <code>div</code> para cada item no <code>dataset</code> : <blockquote> d3.select (&quot;body&quot;). selectAll (&quot;div&quot;) <br> .data (conjunto de dados) <br> .entrar() <br> .append (&quot;div&quot;) </blockquote> Existem algumas diferenças trabalhando com elementos <code>rect</code> vez de <code>divs</code> . Os <code>rects</code> devem ser anexados a um elemento <code>svg</code> , não diretamente ao <code>body</code> . Além disso, você precisa dizer ao D3 onde colocar cada <code>rect</code> dentro da área <code>svg</code> . O posicionamento da barra será coberto no próximo desafio. </section>

## Instructions
<section id="instructions"> Use os métodos <code>data()</code> , <code>enter()</code> e <code>append()</code> para criar e anexar um <code>rect</code> para cada item no <code>dataset</code> . As barras devem exibir todas em cima umas das outras, isso será corrigido no próximo desafio. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu documento deve ter 9 elementos <code>rect</code> .
    testString: 'assert($("rect").length == 9, "Your document should have 9 <code>rect</code> elements.");'
  - text: Seu código deve usar o método <code>data()</code> .
    testString: 'assert(code.match(/\.data/g), "Your code should use the <code>data()</code> method.");'
  - text: Seu código deve usar o método <code>enter()</code> .
    testString: 'assert(code.match(/\.enter/g), "Your code should use the <code>enter()</code> method.");'
  - text: Seu código deve usar o método <code>append()</code> .
    testString: 'assert(code.match(/\.append/g), "Your code should use the <code>append()</code> method.");'

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
       // Add your code below this line



       // Add your code above this line
       .attr("x", 0)
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
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
