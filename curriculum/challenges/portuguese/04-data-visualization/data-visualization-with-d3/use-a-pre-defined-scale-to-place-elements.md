---
id: 587d7fac367417b2b2512bde
title: Usar uma escala predefinida para definir o local dos elementos
challengeType: 6
forumTopicId: 301494
dashedName: use-a-pre-defined-scale-to-place-elements
---

# --description--

Com as escalas configuradas, é hora de mapear novamente o diagrama de dispersão. As escalas são como funções de processamento que transformam os valores `x` e `y` dos dados brutos em valores que se ajustem e que sejam renderizados corretamente no SVG. Eles mantêm os dados dentro da área de plotagem da tela.

Você define os valores dos atributos das coordenadas para uma forma do SVG com a função de dimensionamento. Isso inclui os atributos `x` e `y` para `rect`, elementos `text`, ou `cx` e `cy` para `circles`. Exemplo:

```js
shape
  .attr("x", (d) => xScale(d[0]))
```

As escalas definem atributos de coordenadas de forma a colocar os pontos de dados no SVG. Você não precisa aplicar as escalas quando exibir o valor real dos dados, por exemplo, no método `text()` para uma dica ou etiqueta.

# --instructions--

Use `xScale` e `yScale` para posicionar ambas as formas, `circle` e `text`, no SVG. Para os `circles`, aplique as escalas para definir os atributos `cx` e `cy`. Dê a elas um raio de `5` unidades, também.

Para os elementos `text`, aplique as escalas para definir os atributos `x` e `y`. As etiquetas devem ser deslocadas para a direita dos pontos. Para fazer isso, adicione `10` unidades ao valor de `x` dos dados antes de passá-lo para `xScale`.

# --hints--

O código deve ter 10 elementos `circle`.

```js
assert($('circle').length == 10);
```

O primeiro elemento `circle` deve ter um valor de `cx` de aproximadamente `91` e um valor de `cy` de aproximadamente `368` após a aplicação das escalas. Ele também deve ter um valor `r` de `5`.

```js
assert(
  Math.round($('circle').eq(0).attr('cx')) == '91' &&
    Math.round($('circle').eq(0).attr('cy')) == '368' &&
    $('circle').eq(0).attr('r') == '5'
);
```

O segundo elemento `circle` deve ter um valor de `cx` de aproximadamente `159` e um valor de `cy` de aproximadamente `181` após a aplicação das escalas. Ele também deve ter um valor `r` de `5`.

```js
assert(
  Math.round($('circle').eq(1).attr('cx')) == '159' &&
    Math.round($('circle').eq(1).attr('cy')) == '181' &&
    $('circle').eq(1).attr('r') == '5'
);
```

O terceiro elemento `circle` deve ter um valor de `cx` de aproximadamente `340` e um valor de `cy` de aproximadamente `329` após a aplicação das escalas. Ele também deve ter um valor `r` de `5`.

```js
assert(
  Math.round($('circle').eq(2).attr('cx')) == '340' &&
    Math.round($('circle').eq(2).attr('cy')) == '329' &&
    $('circle').eq(2).attr('r') == '5'
);
```

O quarto elemento `circle` deve ter um valor de `cx` de aproximadamente `131` e um valor de `cy` de aproximadamente `60` após a aplicação das escalas. Ele também deve ter um valor `r` de `5`.

```js
assert(
  Math.round($('circle').eq(3).attr('cx')) == '131' &&
    Math.round($('circle').eq(3).attr('cy')) == '60' &&
    $('circle').eq(3).attr('r') == '5'
);
```

O quinto elemento `circle` deve ter um valor de `cx` de aproximadamente `440` e um valor de `cy` de aproximadamente `237` após a aplicação das escalas. Ele também deve ter um valor `r` de `5`.

```js
assert(
  Math.round($('circle').eq(4).attr('cx')) == '440' &&
    Math.round($('circle').eq(4).attr('cy')) == '237' &&
    $('circle').eq(4).attr('r') == '5'
);
```

O sexto elemento `circle` deve ter um valor de `cx` de aproximadamente `271` e um valor de `cy` de aproximadamente `306` após a aplicação das escalas. Ele também deve ter um valor `r` de `5`.

```js
assert(
  Math.round($('circle').eq(5).attr('cx')) == '271' &&
    Math.round($('circle').eq(5).attr('cy')) == '306' &&
    $('circle').eq(5).attr('r') == '5'
);
```

O sétimo elemento `circle` deve ter um valor de `cx` de aproximadamente `361` e um valor de `cy` de aproximadamente `351` após a aplicação das escalas. Ele também deve ter um valor `r` de `5`.

```js
assert(
  Math.round($('circle').eq(6).attr('cx')) == '361' &&
    Math.round($('circle').eq(6).attr('cy')) == '351' &&
    $('circle').eq(6).attr('r') == '5'
);
```

O oitavo elemento `circle` deve ter um valor de `cx` de aproximadamente `261` e um valor de `cy` de aproximadamente `132` após a aplicação das escalas. Ele também deve ter um valor `r` de `5`.

```js
assert(
  Math.round($('circle').eq(7).attr('cx')) == '261' &&
    Math.round($('circle').eq(7).attr('cy')) == '132' &&
    $('circle').eq(7).attr('r') == '5'
);
```

O nono elemento `circle` deve ter um valor de `cx` de aproximadamente `131` e um valor de `cy` de aproximadamente `144` após a aplicação das escalas. Ele também deve ter um valor `r` de `5`.

```js
assert(
  Math.round($('circle').eq(8).attr('cx')) == '131' &&
    Math.round($('circle').eq(8).attr('cy')) == '144' &&
    $('circle').eq(8).attr('r') == '5'
);
```

O décimo elemento `circle` deve ter um valor de `cx` de aproximadamente `79` e um valor de `cy` de aproximadamente `326` após a aplicação das escalas. Ele também deve ter um valor `r` de `5`.

```js
assert(
  Math.round($('circle').eq(9).attr('cx')) == '79' &&
    Math.round($('circle').eq(9).attr('cy')) == '326' &&
    $('circle').eq(9).attr('r') == '5'
);
```

O código deve ter 10 elementos `text`.

```js
assert($('text').length == 10);
```

A primeira etiqueta deve ter um valor de `x` de aproximadamente `100` e um valor de `y` de aproximadamente `368` após aplicar as escalas.

```js
assert(
  Math.round($('text').eq(0).attr('x')) == '100' &&
    Math.round($('text').eq(0).attr('y')) == '368'
);
```

A segunda etiqueta deve ter um valor de `x` de aproximadamente `168` e um valor de `y` de aproximadamente `181` após aplicar as escalas.

```js
assert(
  Math.round($('text').eq(1).attr('x')) == '168' &&
    Math.round($('text').eq(1).attr('y')) == '181'
);
```

A terceira etiqueta deve ter um valor de `x` de aproximadamente `350` e um valor de `y` de aproximadamente `329` após aplicar as escalas.

```js
assert(
  Math.round($('text').eq(2).attr('x')) == '350' &&
    Math.round($('text').eq(2).attr('y')) == '329'
);
```

A quarta etiqueta deve ter um valor de `x` de aproximadamente `141` e um valor de `y` de aproximadamente `60` após aplicar as escalas.

```js
assert(
  Math.round($('text').eq(3).attr('x')) == '141' &&
    Math.round($('text').eq(3).attr('y')) == '60'
);
```

A quinta etiqueta deve ter um valor de `x` de aproximadamente `449` e um valor de `y` de aproximadamente `237` após aplicar as escalas.

```js
assert(
  Math.round($('text').eq(4).attr('x')) == '449' &&
    Math.round($('text').eq(4).attr('y')) == '237'
);
```

A sexta etiqueta deve ter um valor de `x` de aproximadamente `280` e um valor de `y` de aproximadamente `306` após aplicar as escalas.

```js
assert(
  Math.round($('text').eq(5).attr('x')) == '280' &&
    Math.round($('text').eq(5).attr('y')) == '306'
);
```

A sétima etiqueta deve ter um valor de `x` de aproximadamente `370` e um valor de `y` de aproximadamente `351` após aplicar as escalas.

```js
assert(
  Math.round($('text').eq(6).attr('x')) == '370' &&
    Math.round($('text').eq(6).attr('y')) == '351'
);
```

A oitava etiqueta deve ter um valor de `x` de aproximadamente `270` e um valor de `y` de aproximadamente `132` após aplicar as escalas.

```js
assert(
  Math.round($('text').eq(7).attr('x')) == '270' &&
    Math.round($('text').eq(7).attr('y')) == '132'
);
```

A nona etiqueta deve ter um valor de `x` de aproximadamente `140` e um valor de `y` de aproximadamente `144` após aplicar as escalas.

```js
assert(
  Math.round($('text').eq(8).attr('x')) == '140' &&
    Math.round($('text').eq(8).attr('y')) == '144'
);
```

A décima etiqueta deve ter um valor de `x` de aproximadamente `88` e um valor de `y` de aproximadamente `326` após aplicar as escalas.

```js
assert(
  Math.round($('text').eq(9).attr('x')) == '88' &&
    Math.round($('text').eq(9).attr('y')) == '326'
);
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
       // Add your code below this line



       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + ", "
 + d[1]))
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
       .attr("cy", (d) => yScale(d[1]))
       .attr("r", 5)

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + ", "
 + d[1]))
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))
  </script>
</body>
```
