---
id: 587d7fa9367417b2b2512bce
title: Dynamically Set the Coordinates for Each Bar
challengeType: 6
videoUrl: ''
localeTitle: Definir dinamicamente as coordenadas para cada barra
---

## Description
<section id="description"> O último desafio criou e anexou um retângulo ao elemento <code>svg</code> para cada ponto no <code>dataset</code> para representar uma barra. Infelizmente, eles estavam todos empilhados uns sobre os outros. O posicionamento de um retângulo é manipulado pelos atributos <code>x</code> e <code>y</code> . Eles dizem ao D3 onde começar a desenhar a forma na área <code>svg</code> . O último desafio definiu cada um deles para 0, então cada barra foi colocada no canto superior esquerdo. Para um gráfico de barras, todas as barras devem ficar no mesmo nível vertical, o que significa que o valor <code>y</code> permanece o mesmo (em 0) para todas as barras. O valor <code>x</code> , no entanto, precisa ser alterado à medida que você adiciona novas barras. Lembre-se de que valores <code>x</code> maiores empurram os itens mais para a direita. Conforme você percorre os elementos da matriz no <code>dataset</code> , o valor x deve aumentar. O método <code>attr()</code> em D3 aceita uma função de retorno de chamada para definir dinamicamente esse atributo. A função de retorno de chamada leva dois argumentos, um para o próprio ponto de dados (geralmente <code>d</code> ) e um para o índice do ponto de dados na matriz. O segundo argumento para o índice é opcional. Aqui está o formato: <blockquote> selection.attr (&quot;propriedade&quot;, (d, i) =&gt; { <br> / * <br> * d é o valor do ponto de dados <br> * i é o índice do ponto de dados na matriz <br> * / <br> }) </blockquote> É importante observar que você NÃO precisa gravar um loop <code>for</code> ou usar <code>forEach()</code> para iterar os itens no conjunto de dados. Lembre-se de que o método <code>data()</code> analisa o conjunto de dados e qualquer método vinculado após <code>data()</code> ser executado uma vez para cada item no conjunto de dados. </section>

## Instructions
<section id="instructions"> Altere a função de retorno de chamada do atributo <code>x</code> para que ele retorne os tempos de índice 30. <strong>Nota</strong> <br> Cada barra tem uma largura de 25, aumentando assim cada valor <code>x</code> em 30 acrescenta algum espaço entre as barras. Qualquer valor maior que 25 funcionaria neste exemplo. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O primeiro <code>rect</code> deve ter um valor <code>x</code> de 0.
    testString: 'assert($("rect").eq(0).attr("x") == "0", "The first <code>rect</code> should have an <code>x</code> value of 0.");'
  - text: O segundo <code>rect</code> deve ter um valor <code>x</code> de 30.
    testString: 'assert($("rect").eq(1).attr("x") == "30", "The second <code>rect</code> should have an <code>x</code> value of 30.");'
  - text: O terceiro <code>rect</code> deve ter um valor <code>x</code> de 60.
    testString: 'assert($("rect").eq(2).attr("x") == "60", "The third <code>rect</code> should have an <code>x</code> value of 60.");'
  - text: O quarto <code>rect</code> deve ter um valor <code>x</code> de 90.
    testString: 'assert($("rect").eq(3).attr("x") == "90", "The fourth <code>rect</code> should have an <code>x</code> value of 90.");'
  - text: O quinto <code>rect</code> deve ter um valor <code>x</code> de 120.
    testString: 'assert($("rect").eq(4).attr("x") == "120", "The fifth <code>rect</code> should have an <code>x</code> value of 120.");'
  - text: O sexto <code>rect</code> deve ter um valor <code>x</code> de 150.
    testString: 'assert($("rect").eq(5).attr("x") == "150", "The sixth <code>rect</code> should have an <code>x</code> value of 150.");'
  - text: O sétimo <code>rect</code> deve ter um valor <code>x</code> de 180.
    testString: 'assert($("rect").eq(6).attr("x") == "180", "The seventh <code>rect</code> should have an <code>x</code> value of 180.");'
  - text: O oitavo <code>rect</code> deve ter um valor <code>x</code> de 210.
    testString: 'assert($("rect").eq(7).attr("x") == "210", "The eighth <code>rect</code> should have an <code>x</code> value of 210.");'
  - text: O nono <code>rect</code> deve ter um valor <code>x</code> de 240.
    testString: 'assert($("rect").eq(8).attr("x") == "240", "The ninth <code>rect</code> should have an <code>x</code> value of 240.");'

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
       .attr("x", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       })
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
