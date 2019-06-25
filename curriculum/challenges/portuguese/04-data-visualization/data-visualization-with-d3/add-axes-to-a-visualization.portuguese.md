---
id: 587d7fad367417b2b2512bdf
title: Add Axes to a Visualization
challengeType: 6
videoUrl: ''
localeTitle: Adicionar eixos a uma visualização
---

## Description
<section id="description"> Outra maneira de melhorar o gráfico de dispersão é adicionar um eixo xe um eixo y. D3 tem dois métodos <code>axisLeft()</code> e <code>axisBottom()</code> para renderizar os eixos y e x, respectivamente. (Axes é a forma plural do eixo). Aqui está um exemplo para criar o eixo x baseado no <code>xScale</code> nos desafios anteriores: <code>const xAxis = d3.axisBottom(xScale);</code> O próximo passo é renderizar o eixo na tela do SVG. Para fazer isso, você pode usar um componente SVG geral, o elemento <code>g</code> . O <code>g</code> representa o grupo. Ao contrário de <code>rect</code> , <code>circle</code> e <code>text</code> , um eixo é apenas uma linha reta quando é renderizado. Porque é uma forma simples, usando <code>g</code> obras. A última etapa é aplicar um atributo <code>transform</code> para posicionar o eixo na tela do SVG no lugar certo. Caso contrário, a linha seria renderizada ao longo da borda da tela do SVG e não seria visível. O SVG suporta diferentes tipos de <code>transforms</code> , mas o posicionamento de um eixo precisa ser <code>translate</code> . Quando é aplicado ao elemento <code>g</code> , ele move todo o grupo para cima e para baixo pelos valores dados. Aqui está um exemplo: <blockquote> const xAxis = d3.axisBottom (xScale); <br><br> svg.append (&quot;g&quot;) <br> .attr (&quot;transformar&quot;, &quot;traduzir (0,&quot; + (h - preenchimento) + &quot;)&quot;) <br> .call (xAxis); </blockquote> O código acima coloca o eixo x na parte inferior da tela do SVG. Então é passado como um argumento para o método <code>call()</code> . O eixo y funciona da mesma maneira, exceto que o argumento de <code>translate</code> está no formato (x, 0). Como <code>translate</code> é uma string no método <code>attr()</code> acima, você pode usar a concatenação para incluir valores de variáveis ​​para seus argumentos. </section>

## Instructions
<section id="instructions"> O gráfico de dispersão agora possui um eixo x. Crie um eixo y em uma variável chamada <code>yAxis</code> usando o método <code>axisLeft()</code> . Em seguida, renderize o eixo usando um elemento <code>g</code> . Certifique-se de usar um atributo <code>transform</code> para converter o eixo pela quantidade de unidades de preenchimento à direita e 0 unidades abaixo. Lembre-se de <code>call()</code> o eixo. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve usar o método <code>axisLeft()</code> com <code>yScale</code> passado como argumento.
    testString: 'assert(code.match(/\.axisLeft\(yScale\)/g), "Your code should use the <code>axisLeft()</code> method with <code>yScale</code> passed as the argument.");'
  - text: 'O elemento y-axis <code>g</code> deve ter um atributo <code>transform</code> para converter o eixo por (60, 0).'
    testString: 'assert($("g").eq(1).attr("transform").match(/translate\(60\s*?,\s*?0\)/g), "The y-axis <code>g</code> element should have a <code>transform</code> attribute to translate the axis by (60, 0).");'
  - text: Seu código deve chamar o <code>yAxis</code> .
    testString: 'assert(code.match(/\.call\(yAxis\)/g), "Your code should call the <code>yAxis</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const dataset = [
                  [ 34,     78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,   411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,    333 ],
                  [ 78,    320 ],
                  [ 21,   123 ]
                ];

    const w = 500;
    const h = 500;
    const padding = 60;

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
                     .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d) => xScale(d[0]))
       .attr("cy",(d) => yScale(d[1]))
       .attr("r", (d) => 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + "," + d[1]))
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))

    const xAxis = d3.axisBottom(xScale);
    // Add your code below this line
    const yAxis = undefined;
    // Add your code above this line

    svg.append("g")
       .attr("transform", "translate(0," + (h - padding) + ")")
       .call(xAxis);

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
