---
id: 587d7fac367417b2b2512bdd
title: Use Dynamic Scales
challengeType: 6
videoUrl: ''
localeTitle: Use escalas dinâmicas
---

## Description
<section id="description"> Os métodos D3 <code>min()</code> e <code>max()</code> são úteis para ajudar a definir a escala. Dado um conjunto de dados complexo, uma prioridade é definir a escala para que a visualização se ajuste à largura e altura do contêiner do SVG. Você deseja que todos os dados sejam plotados na tela do SVG para que fiquem visíveis na página da web. O exemplo abaixo define a escala do eixo x para os dados do gráfico de dispersão. O método <code>domain()</code> passa informações para a escala sobre os valores de dados brutos para o gráfico. O método <code>range()</code> fornece informações sobre o espaço real na página da web para a visualização. No exemplo, o domínio vai de 0 ao máximo no conjunto. Ele usa o método <code>max()</code> com uma função de retorno de chamada com base nos valores x nas matrizes. O intervalo usa a largura da tela do SVG ( <code>w</code> ), mas também inclui alguns preenchimentos. Isso coloca espaço entre os pontos do gráfico de dispersão e a borda da tela do SVG. <blockquote> conjunto de dados const = [ <br> [34, 78], <br> [109, 280], <br> [310, 120] <br> [79, 411] <br> [420, 220] <br> [233, 145], <br> [333, 96], <br> [222, 333] <br> [78, 320], <br> [21, 123] <br> ]; <br> const w = 500; <br> const h = 500; <br><br> // Preenchimento entre o limite de tela do SVG e o enredo <br> preenchimento const = 30; <br> const xScale = d3.scaleLinear () <br> .domain ([0, d3.max (dataset, (d) =&gt; d [0])]) <br> .range ([padding, w - padding]); </blockquote> O preenchimento pode ser confuso no início. Imagine o eixo x como uma linha horizontal de 0 a 500 (o valor da largura para a tela do SVG). Incluir o preenchimento no método <code>range()</code> força o gráfico a iniciar em 30 ao longo dessa linha (em vez de 0) e terminar em 470 (em vez de 500). </section>

## Instructions
<section id="instructions"> Use a variável <code>yScale</code> para criar uma escala linear no eixo y. O domínio deve começar em zero e ir para o valor máximo y no conjunto. O intervalo deve usar a altura do SVG ( <code>h</code> ) e incluir preenchimento. <strong>Nota</strong> <br> Lembre-se de manter o enredo com o lado direito para cima. Quando você define o intervalo para as coordenadas y, o valor mais alto (altura menos preenchimento) é o primeiro argumento e o valor inferior é o segundo argumento. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O texto no <code>h2</code> deve ser 30.
    testString: 'assert(output == 30 && $("h2").text() == "30", "The text in the <code>h2</code> should be 30.");'
  - text: 'O <code>domain()</code> de yScale deve ser equivalente a <code>[0, 411]</code> .'
    testString: 'assert(JSON.stringify(yScale.domain()) == JSON.stringify([0, 411]), "The <code>domain()</code> of yScale should be equivalent to <code>[0, 411]</code>.");'
  - text: 'O <code>range()</code> de yScale deve ser equivalente a <code>[470, 30]</code> .'
    testString: 'assert(JSON.stringify(yScale.range()) == JSON.stringify([470, 30]), "The <code>range()</code> of yScale should be equivalent to <code>[470, 30]</code>.");'

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

    // Padding between the SVG canvas boundary and the plot
    const padding = 30;

    // Create an x and y scale

    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[0])])
                    .range([padding, w - padding]);

    // Add your code below this line

    const yScale = undefined;


    // Add your code above this line

    const output = yScale(411); // Returns 30
    d3.select("body")
      .append("h2")
      .text(output)
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
