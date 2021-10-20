---
id: 587d7fa9367417b2b2512bd1
title: Alterar a cor de um elemento do SVG
challengeType: 6
forumTopicId: 301480
dashedName: change-the-color-of-an-svg-element
---

# --description--

As barras estão na posição certa, mas são todas iguais, da cor preta. O SVG tem uma forma de alterar a cor das barras.

No SVG, uma forma `rect` é colorida com o atributo `fill`. Esse atributo tem suporte de código hexadecimal, nomes de cores e valores rgb, bem como opções mais complexas, como gradientes e transparência.

# --instructions--

Adicione um método `attr()` para definir a propriedade `fill` de todas as barras com a cor "navy" (azul-marinho).

# --hints--

As barras devem ter a propriedade `fill` com a cor "navy".

```js
assert($('rect').css('fill') == 'rgb(0, 0, 128)');
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
       // Add your code below this line



       // Add your code above this line
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
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy");

  </script>
</body>
```
