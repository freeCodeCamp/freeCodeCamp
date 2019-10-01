---
id: 587d7fab367417b2b2512bda
title: Create a Linear Scale with D3
challengeType: 6
videoUrl: ''
localeTitle: Crie uma escala linear com D3
---

## Description
<section id="description"> A barra e o gráfico de dispersão mapeiam os dados plotados diretamente na tela do SVG. No entanto, se a altura de uma barra ou um dos pontos de dados fosse maior que os valores de altura ou largura do SVG, ela sairia da área SVG. Na D3, existem escalas para ajudar a traçar dados. <code>Scales</code> são funções que informam ao programa como mapear um conjunto de pontos de dados brutos para os pixels da tela do SVG. Por exemplo, digamos que você tenha uma tela SVG de tamanho 100x500 e deseja plotar o Produto Interno Bruto (PIB) para vários países. O conjunto de números estaria na faixa de bilhões ou trilhões de dólares. Você fornece a D3 um tipo de escala para informar como colocar os grandes valores do PIB nessa área de 100 x 500. É improvável que você planeje dados brutos como estão. Antes de plotar, você define a escala para todo o seu conjunto de dados, de modo que os valores <code>x</code> e <code>y</code> ajustem à largura e altura da tela. O D3 possui vários tipos de escala. Para uma escala linear (geralmente usada com dados quantitativos), existe o método D3 <code>scaleLinear()</code> : <code>const scale = d3.scaleLinear()</code> Por padrão, uma escala usa o relacionamento de identidade. O valor da entrada é o mesmo que o valor da saída. Um desafio separado cobre como mudar isso. </section>

## Instructions
<section id="instructions"> Altere a variável de <code>scale</code> para criar uma escala linear. Em seguida, defina a variável de <code>output</code> para a escala chamada com um argumento de entrada de 50. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O texto no <code>h2</code> deve ser 50.
    testString: 'assert($("h2").text() == "50", "The text in the <code>h2</code> should be 50.");'
  - text: Seu código deve usar o método <code>scaleLinear()</code> .
    testString: 'assert(code.match(/\.scaleLinear/g), "Your code should use the <code>scaleLinear()</code> method.");'
  - text: A variável de <code>output</code> deve chamar <code>scale</code> com um argumento de 50.
    testString: 'assert(output == 50 && code.match(/scale\(\s*?50\s*?\)/g), "The <code>output</code> variable should call <code>scale</code> with an argument of 50.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    // Add your code below this line

    const scale = undefined; // Create the scale here
    const output = scale(); // Call the scale with an argument here

    // Add your code above this line

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
