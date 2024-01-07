---
id: 587d7fa9367417b2b2512bcf
title: Alterar dinamicamente a altura de cada barra
challengeType: 6
forumTopicId: 301486
dashedName: dynamically-change-the-height-of-each-bar
---

# --description--

A altura de cada barra pode ser definida como o valor do ponto de dados no array, de modo semelhante a como o valor de `x` foi definido dinamicamente.

```js
selection.attr("property", (d, i) => {

})
```

Aqui, `d` seria o valor do ponto de dados, enquanto `i` seria o índice do ponto de dados no array.

# --instructions--

Altere a função de callback para o atributo `height` para que retorne o valor dos dados vezes 3.

**Observação:** lembre-se de que multiplicar todos os dados redimensiona os dados (como se déssemos um zoom). Neste exemplo, ajuda a ver as diferenças entre os valores da barra.

# --hints--

O primeiro `rect` deve ter uma `height` de `36`.

```js
assert($('rect').eq(0).attr('height') == '36');
```

O segundo `rect` deve ter uma `height` de `93`.

```js
assert($('rect').eq(1).attr('height') == '93');
```

O terceiro `rect` deve ter uma `height` de `66`.

```js
assert($('rect').eq(2).attr('height') == '66');
```

O quarto `rect` deve ter uma `height` de `51`.

```js
assert($('rect').eq(3).attr('height') == '51');
```

O quinto `rect` deve ter uma `height` de `75`.

```js
assert($('rect').eq(4).attr('height') == '75');
```

O sexto `rect` deve ter uma `height` de `54`.

```js
assert($('rect').eq(5).attr('height') == '54');
```

O sétimo `rect` deve ter uma `height` de `87`.

```js
assert($('rect').eq(6).attr('height') == '87');
```

O oitavo `rect` deve ter uma `height` de `42`.

```js
assert($('rect').eq(7).attr('height') == '42');
```

O nono `rect` deve ter uma `height` de `27`.

```js
assert($('rect').eq(8).attr('height') == '27');
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
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       });
  </script>
</body>
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
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", (d, i) => {
         return d * 3
       });
  </script>
</body>
```
