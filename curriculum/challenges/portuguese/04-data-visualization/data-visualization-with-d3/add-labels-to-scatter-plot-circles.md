---
id: 587d7fab367417b2b2512bd9
title: Adicionar etiquetas aos círculos do diagrama de dispersão
challengeType: 6
forumTopicId: 301477
dashedName: add-labels-to-scatter-plot-circles
---

# --description--

Você pode adicionar texto para criar etiquetas para os pontos em um diagrama de dispersão.

O objetivo é exibir os valores separados por vírgula para o primeiro (`x`) e para o segundo (`y`) campo de cada item do `dataset`.

Os nós de `text` precisam de atributos `x` e `y` para posicioná-los no SVG. Neste desafio, o valor de `y` (que determina a altura) pode usar o mesmo valor que `circle` usa para o seu atributo `cy`. O valor de `x` pode ser ligeiramente maior que do que o valor de `cx` de `circle`. Assim, a etiqueta estará visível. Isto empurrará a etiqueta para a direita do ponto traçado.

# --instructions--

Dê uma etiqueta a cada ponto no diagrama de dispersão usando o elemento `text`. O texto da etiqueta deve ter os dois valores separados por uma vírgula e um espaço. Por exemplo, a etiqueta para o primeiro ponto será `34, 78`. Defina o atributo `x` para que seja de `5` unidades a mais do que o valor usado para o atributo `cx` em `circle`. Defina o atributo `y` para que seja igual ao valor de `cy` em `circle`.

# --hints--

O código deve ter 10 elementos `text`.

```js
assert($('text').length == 10);
```

A primeira etiqueta deve ter o texto `34, 78`, um valor de `x` de `39` e um valor de `y` de `422`.

```js
assert(
  $('text').eq(0).text() == '34, 78' &&
    $('text').eq(0).attr('x') == '39' &&
    $('text').eq(0).attr('y') == '422'
);
```

A segunda etiqueta deve ter o texto `109, 280`, um valor de `x` de `114` e um valor de `y` de `220`.

```js
assert(
  $('text').eq(1).text() == '109, 280' &&
    $('text').eq(1).attr('x') == '114' &&
    $('text').eq(1).attr('y') == '220'
);
```

A terceira etiqueta deve ter o texto `310, 120`, um valor de `x` de `315` e um valor de `y` de `380`.

```js
assert(
  $('text').eq(2).text() == '310, 120' &&
    $('text').eq(2).attr('x') == '315' &&
    $('text').eq(2).attr('y') == '380'
);
```

A quarta etiqueta deve ter o texto `79, 411`, um valor de `x` de `84` e um valor de `y` de `89`.

```js
assert(
  $('text').eq(3).text() == '79, 411' &&
    $('text').eq(3).attr('x') == '84' &&
    $('text').eq(3).attr('y') == '89'
);
```

A quinta etiqueta deve ter o texto `420, 220`, um valor de `x` de `425` e um valor de `y` de `280`.

```js
assert(
  $('text').eq(4).text() == '420, 220' &&
    $('text').eq(4).attr('x') == '425' &&
    $('text').eq(4).attr('y') == '280'
);
```

A sexta etiqueta deve ter o texto `233, 145`, um valor de `x` de `238` e um valor de `y` de `355`.

```js
assert(
  $('text').eq(5).text() == '233, 145' &&
    $('text').eq(5).attr('x') == '238' &&
    $('text').eq(5).attr('y') == '355'
);
```

A sétima etiqueta deve ter o texto `333, 96`, um valor de `x` de `338` e um valor de `y` de `404`.

```js
assert(
  $('text').eq(6).text() == '333, 96' &&
    $('text').eq(6).attr('x') == '338' &&
    $('text').eq(6).attr('y') == '404'
);
```

A oitava etiqueta deve ter o texto `222, 333`, um valor de `x` de `227` e um valor de `y` de `167`.

```js
assert(
  $('text').eq(7).text() == '222, 333' &&
    $('text').eq(7).attr('x') == '227' &&
    $('text').eq(7).attr('y') == '167'
);
```

A nona etiqueta deve ter o texto `78, 320`, um valor de `x` de `83` e um valor de `y` de `180`.

```js
assert(
  $('text').eq(8).text() == '78, 320' &&
    $('text').eq(8).attr('x') == '83' &&
    $('text').eq(8).attr('y') == '180'
);
```

A décima etiqueta deve ter o texto `21, 123`, um valor de `x` de `26` e um valor de `y` de `377`.

```js
assert(
  $('text').eq(9).text() == '21, 123' &&
    $('text').eq(9).attr('x') == '26' &&
    $('text').eq(9).attr('y') == '377'
);
```

# --seed--

## --seed-contents--

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

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d, i) => d[0])
       .attr("cy", (d, i) => h - d[1])
       .attr("r", 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
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

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d, i) => d[0])
       .attr("cy", (d, i) => h - d[1])
       .attr("r", 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .attr("x", (d) => d[0] + 5)
       .attr("y", (d) => h - d[1])
       .text((d) => (d[0] + ", " + d[1]))

  </script>
</body>
```
