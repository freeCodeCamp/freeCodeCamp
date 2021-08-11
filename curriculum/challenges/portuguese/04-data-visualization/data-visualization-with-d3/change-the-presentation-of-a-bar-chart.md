---
id: 587d7fa8367417b2b2512bca
title: Alterar a apresentação de um gráfico de barras
challengeType: 6
forumTopicId: 301481
dashedName: change-the-presentation-of-a-bar-chart
---

# --description--

No último desafio, criamos um gráfico de barras, mas há algumas mudanças de formatação que poderiam melhorá-lo:

1) Adicione espaço entre cada barra para separá-las visualmente. Isso é feito adicionando uma margem ao CSS para a classe `bar`

2) Aumente a altura das barras para mostrar melhor a diferença dos valores. Isso é feito multiplicando o valor por um número para dimensionar a altura

# --instructions--

Primeiro, adicione uma `margin` de `2px` à classe `bar` na tag `style`. Depois, altere a função de callback no método `style()` para que retorne um valor `10` vezes maior que o valor original dos dados (e a expressão `px`).

**Observação:** multiplicar cada ponto dos dados pela *mesma* constante somente altera a escala. É como fazer um zoom. Isso não altera o significado dos dados subjacentes.

# --hints--

A primeira `div` deve ter uma `height` de `120` pixels e uma `margin` de `2` pixels.

```js
assert(
  $('div').eq(0).css('height') == '120px' &&
    $('div').eq(0).css('margin-right') == '2px'
);
```

A segunda `div` deve ter uma `height` de `310` pixels e uma `margin` de `2` pixels.

```js
assert(
  $('div').eq(1).css('height') == '310px' &&
    $('div').eq(1).css('margin-right') == '2px'
);
```

A terceira `div` deve ter uma `height` de `220` pixels e uma `margin` de `2` pixels.

```js
assert(
  $('div').eq(2).css('height') == '220px' &&
    $('div').eq(2).css('margin-right') == '2px'
);
```

A quarta `div` deve ter uma `height` de `170` pixels e uma `margin` de `2` pixels.

```js
assert(
  $('div').eq(3).css('height') == '170px' &&
    $('div').eq(3).css('margin-right') == '2px'
);
```

A quinta `div` deve ter uma `height` de `250` pixels e uma `margin` de `2` pixels.

```js
assert(
  $('div').eq(4).css('height') == '250px' &&
    $('div').eq(4).css('margin-right') == '2px'
);
```

A sexta `div` deve ter uma `height` de `180` pixels e uma `margin` de `2` pixels.

```js
assert(
  $('div').eq(5).css('height') == '180px' &&
    $('div').eq(5).css('margin-right') == '2px'
);
```

A sétima `div` deve ter uma `height` de `290` pixels e uma `margin` de `2` pixels.

```js
assert(
  $('div').eq(6).css('height') == '290px' &&
    $('div').eq(6).css('margin-right') == '2px'
);
```

A oitava `div` deve ter uma `height` de `140` pixels e uma `margin` de `2` pixels.

```js
assert(
  $('div').eq(7).css('height') == '140px' &&
    $('div').eq(7).css('margin-right') == '2px'
);
```

A nona `div` deve ter uma `height` de `90` pixels e uma `margin` de `2` pixels.

```js
assert(
  $('div').eq(8).css('height') == '90px' &&
    $('div').eq(8).css('margin-right') == '2px'
);
```

# --seed--

## --seed-contents--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    /* Add your code below this line */


    /* Add your code above this line */
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", (d) => (d + "px")) // Change this line
  </script>
</body>
```

# --solutions--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    margin: 2px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", (d) => (d * 10 + "px"))
  </script>
</body>
```
