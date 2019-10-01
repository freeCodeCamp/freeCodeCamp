---
id: 587d7fac367417b2b2512bdb
title: Set a Domain and a Range on a Scale
challengeType: 6
videoUrl: ''
localeTitle: Definir um domínio e um intervalo em escala
---

## Description
<section id="description"> Por padrão, as escalas usam o relacionamento de identidade - o valor de entrada é mapeado para o valor de saída. Mas as escalas podem ser muito mais flexíveis e interessantes. Digamos que um conjunto de dados tenha valores que variam de 50 a 480. Essa é a informação de entrada para uma escala e também é conhecida como o domínio. Você deseja mapear esses pontos ao longo do eixo <code>x</code> na tela do SVG, entre 10 unidades e 500 unidades. Esta é a informação de saída, que também é conhecida como o intervalo. Os métodos <code>domain()</code> e <code>range()</code> definem esses valores para a escala. Ambos os métodos usam uma matriz de pelo menos dois elementos como argumento. Aqui está um exemplo: <blockquote> // Definir um domínio <br> // O domínio abrange o conjunto de valores de entrada <br> scale.domain ([50, 480]); <br> // Definir um intervalo <br> // O intervalo abrange o conjunto de valores de saída <br> escala.range ([10, 500]); <br> escala (50) // Retorna 10 <br> escala (480) // Retorna 500 <br> escala (325) // Retorna 323,37 <br> escala (750) // Retorna 807,67 <br> d3.scaleLinear () </blockquote> Observe que a escala usa o relacionamento linear entre os valores de domínio e intervalo para descobrir qual deve ser a saída para um determinado número. O valor mínimo no domínio (50) é mapeado para o valor mínimo (10) no intervalo. </section>

## Instructions
<section id="instructions"> Crie uma escala e defina seu domínio para <code>[250, 500]</code> e alcance para <code>[10, 150]</code> . <strong>Nota</strong> <br> Você pode encadear os métodos <code>domain()</code> e <code>range()</code> na variável de <code>scale</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve usar o método <code>domain()</code> .
    testString: 'assert(code.match(/\.domain/g), "Your code should use the <code>domain()</code> method.");'
  - text: 'O <code>domain()</code> da escala deve ser definido para <code>[250, 500]</code> .'
    testString: 'assert(JSON.stringify(scale.domain()) == JSON.stringify([250, 500]), "The <code>domain()</code> of the scale should be set to <code>[250, 500]</code>.");'
  - text: Seu código deve usar o método <code>range()</code> .
    testString: 'assert(code.match(/\.range/g), "Your code should use the <code>range()</code> method.");'
  - text: 'O <code>range()</code> da escala deve ser definido como <code>[10, 150]</code> .'
    testString: 'assert(JSON.stringify(scale.range()) == JSON.stringify([10, 150]), "The <code>range()</code> of the scale should be set to <code>[10, 150]</code>.");'
  - text: O texto no <code>h2</code> deve ser -102.
    testString: 'assert($("h2").text() == "-102", "The text in the <code>h2</code> should be -102.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    // Add your code below this line
    const scale = d3.scaleLinear();



    // Add your code above this line
    const output = scale(50);
    d3.select("body")
      .append("h2")
      .text(output);
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
