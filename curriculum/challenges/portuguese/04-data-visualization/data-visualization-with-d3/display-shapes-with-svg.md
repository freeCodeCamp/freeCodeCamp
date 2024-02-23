---
id: 587d7fa8367417b2b2512bcc
title: Exibir formas com o SVG
challengeType: 6
forumTopicId: 301485
dashedName: display-shapes-with-svg
---

# --description--

O último desafio criou um elemento `svg` com uma determinada largura e altura, que era visível porque tinha uma `background-color` aplicada a ele na tag `style`. O código criou espaço para a largura e altura fornecidas.

O próximo passo é criar uma forma para colocar na área do `svg`. Há várias formas suportadas no SVG, como retângulos e círculos. Elas são usadas para exibir dados. Por exemplo, a forma do retângulo (`<rect>`) do SVG pode criar uma barra em um gráfico de barras.

Quando você coloca uma forma na área do `svg`, você pode especificar onde ela vai com as coordenadas `x` e `y`. O ponto de origem (0, 0) está no canto superior esquerdo. Valores positivos para `x` empurram a forma para a direita, enquanto valores positivos para `y` empurram a forma para baixo do ponto de origem.

Para colocar uma forma no meio do `svg` de 500 (largura) x 100 (altura) do último desafio, a coordenada `x` seria 250 e a coordenada `y` seria 50.

Uma forma `rect` do SVG tem quatro atributos. Existem as coordenadas `x` e `y`, para onde elas são colocadas na área do `svg`. Ela também tem `height` e `width` para especificar o tamanho.

# --instructions--

Adicione uma forma `rect` ao `svg` usando `append()`. Dê a ele um atributo `width` de `25` e uma `height` de `100`. Além disso, dê aos atributos de `rect`, `x` e `y`, o valor de `0`.

# --hints--

O documento deve ter 1 elemento `rect`.

```js
assert($('rect').length == 1);
```

O elemento `rect` deve ter um atributo `width` com o valor de `25`.

```js
assert($('rect').attr('width') == '25');
```

O elemento `rect` deve ter um atributo `height` com o valor de `100`.

```js
assert($('rect').attr('height') == '100');
```

O elemento `rect` deve ter um atributo `x` com o valor de `0`.

```js
assert($('rect').attr('x') == '0');
```

O elemento `rect` deve ter um atributo `y` com o valor de `0`.

```js
assert($('rect').attr('y') == '0');
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
                  .attr("height", h)
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
                  .attr("height", h)
                  .append("rect")
                  .attr("width", 25)
                  .attr("height", 100)
                  .attr("x", 0)
                  .attr("y", 0);
  </script>
</body>
```
