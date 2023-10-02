---
id: 587d7fad367417b2b2512bdf
title: Adicionar eixos a uma visualização
challengeType: 6
forumTopicId: 301472
dashedName: add-axes-to-a-visualization
---

# --description--

Outra maneira de melhorar o diagrama de dispersão é adicionar um eixo x e um eixo y.

O D3 tem dois métodos, `axisLeft()` e `axisBottom()`, para renderizar o eixo y e o eixo x, respectivamente. Aqui temos um exemplo para criar o eixo x com base na `xScale` dos desafios anteriores:

```js
const xAxis = d3.axisBottom(xScale);
```

O próximo passo é renderizar o eixo no SVG. Para fazer isso, você pode usar um componente SVG geral, o elemento `g`. O `g` representa o grupo. Ao contrário de `rect`, `circle` e `text`, um eixo é apenas uma linha reta quando é renderizado. Por ser uma forma simples, usar `g` funciona. O último passo é aplicar um atributo `transform` para posicionar o eixo no lugar certo no SVG. Caso contrário, a linha seria renderizada ao longo da borda do SVG e não seria visível. O SVG suporta diferentes tipos de `transforms`, mas posicionar um eixo precisa de `translate`. Quando aplicado ao elemento `g`, ele move o grupo inteiro para cima e para baixo pelos valores indicados. Exemplo:

```js
const xAxis = d3.axisBottom(xScale);

svg.append("g")
   .attr("transform", "translate(0, " + (h - padding) + ")")
   .call(xAxis);
```

O código acima coloca o eixo x na parte inferior do SVG. Então, ele é passado como um argumento para o método `call()`. O eixo y funciona da mesma forma, exceto pelo fato de o argumento `translate` estar no formato `(x, 0)`. Como `translate` é uma string no método `attr()` acima, você pode usar a concatenação para incluir valores de variáveis para seus argumentos.

# --instructions--

O diagrama de dispersão agora tem um eixo x. Crie um eixo y em uma variável chamada `yAxis` usando o método `axisLeft()`. Em seguida, renderize o eixo usando um elemento `g`. Certifique-se de usar o atributo `transform` para mover o eixo pela quantidade de unidades de preenchimento à direita, e `0` unidades para baixo. Lembre-se de usar `call()` para o eixo.

# --hints--

O código deve usar o método `axisLeft()` com `yScale` passado para o argumento.

```js
assert(code.match(/\.axisLeft\(yScale\)/g));
```

O elemento `g` do eixo y deve ter um atributo `transform` para mover o eixo por `(60, 0)`.

```js
assert(
  $('g')
    .eq(10)
    .attr('transform')
    .match(/translate\(60\s*?,\s*?0\)/g)
);
```

O código deve ter uma tag `yAxis`.

```js
assert(code.match(/\.call\(\s*yAxis\s*\)/g));
```

# --seed--

## --seed-contents--

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

# --solutions--

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

    const yAxis = d3.axisLeft(yScale);


    svg.append("g")
       .attr("transform", "translate(0," + (h - padding) + ")")
       .call(xAxis);

    svg.append("g")
       .attr("transform", "translate(" + padding + ",0)")
       .call(yAxis)

  </script>
</body>
```
