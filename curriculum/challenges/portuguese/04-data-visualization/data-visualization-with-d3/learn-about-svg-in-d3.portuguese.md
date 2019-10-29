---
id: 587d7fa8367417b2b2512bcb
title: Learn About SVG in D3
challengeType: 6
videoUrl: ''
localeTitle: Aprenda sobre o SVG no D3
---

## Description
<section id="description"> SVG significa <code>Scalable Vector Graphics</code> . Aqui, &quot;escalável&quot; significa que, se você aumentar ou diminuir o zoom em um objeto, ele não aparecerá pixelizado. Ele é escalável com o sistema de exibição, seja em uma pequena tela móvel ou em um grande monitor de TV. O SVG é usado para fazer formas geométricas comuns. Como o D3 mapeia dados em uma representação visual, ele usa SVG para criar as formas para a visualização. Formas SVG para uma página da web devem ir dentro de uma tag <code>svg</code> HTML. O CSS pode ser escalonável quando os estilos usam unidades relativas (como <code>vh</code> , <code>vw</code> ou porcentagens), mas o uso de SVG é mais flexível para criar visualizações de dados. </section>

## Instructions
<section id="instructions"> Adicione um nó <code>svg</code> ao <code>body</code> usando <code>append()</code> . Dê a ele um atributo de <code>width</code> definido para a constante <code>w</code> fornecida e um atributo <code>height</code> definido para a constante <code>h</code> fornecida usando o método <code>attr()</code> para cada um. Você verá na saída porque há uma <code>background-color</code> de fundo rosa aplicada a ela na tag de <code>style</code> . <strong>Nota</strong> <br> Os atributos de largura e altura não possuem unidades. Este é o bloco de construção do escalonamento - o elemento sempre terá uma relação largura / altura de 5: 1, independentemente do nível de zoom. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu documento deve ter um elemento <code>svg</code> .
    testString: 'assert($("svg").length == 1, "Your document should have 1 <code>svg</code> element.");'
  - text: O elemento <code>svg</code> deve ter um atributo de <code>width</code> definido como 500.
    testString: 'assert($("svg").attr("width") == "500", "The <code>svg</code> element should have a <code>width</code> attribute set to 500.");'
  - text: O elemento <code>svg</code> deve ter um atributo <code>height</code> definido como 100.
    testString: 'assert($("svg").attr("height") == "100", "The <code>svg</code> element should have a <code>height</code> attribute set to 100.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  svg {
    background-color: pink;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
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
