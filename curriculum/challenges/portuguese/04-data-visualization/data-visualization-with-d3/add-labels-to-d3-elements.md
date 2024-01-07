---
id: 587d7faa367417b2b2512bd2
title: Adicionar etiquetas aos elementos D3
challengeType: 6
forumTopicId: 301476
dashedName: add-labels-to-d3-elements
---

# --description--

O D3 permite adicionar etiquetas a um elemento gráfico, como uma barra, usando o elemento `text` do SVG.

Assim como o elemento `rect`, um elemento `text` precisa ter atributos `x` e `y` para ser inserido no SVG. Ele também precisa de ter acesso aos dados para exibir esses valores.

O D3 dá a você um alto nível de controle sobre como você etiqueta suas barras.

# --instructions--

O código no editor já vincula os dados a cada novo elemento `text`. Primeiro, insira nós `text` no `svg`. Em seguida, adicione atributos às coordenadas `x` e `y`. Eles devem ser calculados da mesma forma que os atributos de `rect`, exceto pelo fato de que o valor de `y` para `text` fará com que a etiqueta fique 3 unidades acima da barra. Por fim, use o método `text()` do D3 para definir a nova etiqueta como o valor do ponto de dados.

**Observação:** para a etiqueta ficar mais alta do que a barra, decida se o valor de `y` para o `text` deve ser 3 a mais ou 3 a menos do que o valor de `y` da barra.

# --hints--

O primeiro elemento `text` deve ter uma etiqueta com o valor `12` e um `y` com o valor de `61`.

```js
assert($('text').eq(0).text() == '12' && $('text').eq(0).attr('y') == '61');
```

O segundo elemento `text` deve ter uma etiqueta com o valor `31` e um `y` com o valor de `4`.

```js
assert($('text').eq(1).text() == '31' && $('text').eq(1).attr('y') == '4');
```

O terceiro elemento `text` deve ter uma etiqueta com o valor `22` e um `y` com o valor de `31`.

```js
assert($('text').eq(2).text() == '22' && $('text').eq(2).attr('y') == '31');
```

O quarto elemento `text` deve ter uma etiqueta com o valor `17` e um `y` com o valor de `46`.

```js
assert($('text').eq(3).text() == '17' && $('text').eq(3).attr('y') == '46');
```

O quinto elemento `text` deve ter uma etiqueta com o valor `25` e um `y` com o valor de `22`.

```js
assert($('text').eq(4).text() == '25' && $('text').eq(4).attr('y') == '22');
```

O sexto elemento `text` deve ter uma etiqueta com o valor `18` e um `y` com o valor de `43`.

```js
assert($('text').eq(5).text() == '18' && $('text').eq(5).attr('y') == '43');
```

O sétimo elemento `text` deve ter uma etiqueta com o valor `29` e um `y` com o valor de `10`.

```js
assert($('text').eq(6).text() == '29' && $('text').eq(6).attr('y') == '10');
```

O oitavo elemento `text` deve ter uma etiqueta com o valor `14` e um `y` com o valor de `55`.

```js
assert($('text').eq(7).text() == '14' && $('text').eq(7).attr('y') == '55');
```

O nono elemento `text` deve ter uma etiqueta com o valor `9` e um `y` com o valor de `70`.

```js
assert($('text').eq(8).text() == '9' && $('text').eq(8).attr('y') == '70');
```

# --seed--

## --seed-contents--

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
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       // Add your code below this line




       // Add your code above this line
  </script>
<body>
```

# --solutions--

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
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3)
       .text((d) => d)
  </script>
<body>
```
