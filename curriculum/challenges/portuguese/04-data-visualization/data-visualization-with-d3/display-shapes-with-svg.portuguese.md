---
id: 587d7fa8367417b2b2512bcc
title: Display Shapes with SVG
challengeType: 6
videoUrl: ''
localeTitle: Exibir formas com SVG
---

## Description
<section id="description"> O último desafio criou um elemento <code>svg</code> com uma determinada largura e altura, que era visível porque tinha uma <code>background-color</code> aplicada a ele na tag de <code>style</code> . O código criou espaço para a largura e a altura especificadas. O próximo passo é criar uma forma para colocar na área <code>svg</code> . Há várias formas suportadas no SVG, como retângulos e círculos. Eles são usados ​​para exibir dados. Por exemplo, uma forma SVG retangular ( <code>&lt;rect&gt;</code> ) poderia criar uma barra em um gráfico de barras. Quando você coloca uma forma na área <code>svg</code> , você pode especificar onde ela vai com as coordenadas <code>x</code> e <code>y</code> . O ponto de origem de (0, 0) está no canto superior esquerdo. Valores positivos para <code>x</code> empurram a forma para a direita e valores positivos para <code>y</code> empurram a forma para baixo a partir do ponto de origem. Para colocar uma forma no meio dos 500 (largura) x 100 (altura) <code>svg</code> do último desafio, a coordenada <code>x</code> seria 250 e a coordenada <code>y</code> seria 50. Um <code>rect</code> SVG tem quatro atributos. Existem os <code>x</code> e <code>y</code> coordenadas para onde ele é colocado no <code>svg</code> área. Também possui <code>height</code> e <code>width</code> para especificar o tamanho. </section>

## Instructions
<section id="instructions"> Adicionar um <code>rect</code> forma para o <code>svg</code> usando <code>append()</code> , e dar-lhe uma <code>width</code> atributo de 25 e <code>height</code> atributo de 100. Além disso, dar a <code>rect</code> <code>x</code> e <code>y</code> atributos de cada conjunto para 0. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu documento deve ter um elemento <code>rect</code> .
    testString: 'assert($("rect").length == 1, "Your document should have 1 <code>rect</code> element.");'
  - text: O elemento <code>rect</code> deve ter um atributo <code>width</code> definido como 25.
    testString: 'assert($("rect").attr("width") == "25", "The <code>rect</code> element should have a <code>width</code> attribute set to 25.");'
  - text: O elemento <code>rect</code> deve ter um atributo <code>height</code> definido como 100.
    testString: 'assert($("rect").attr("height") == "100", "The <code>rect</code> element should have a <code>height</code> attribute set to 100.");'
  - text: O elemento <code>rect</code> deve ter um atributo <code>x</code> definido como 0.
    testString: 'assert($("rect").attr("x") == "0", "The <code>rect</code> element should have an <code>x</code> attribute set to 0.");'
  - text: O elemento <code>rect</code> deve ter um atributo <code>y</code> definido como 0.
    testString: 'assert($("rect").attr("y") == "0", "The <code>rect</code> element should have a <code>y</code> attribute set to 0.");'

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
                  .attr("height", h)
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
