---
id: 587d7fa8367417b2b2512bcb
title: Aprender sobre o SVG no D3
challengeType: 6
forumTopicId: 301489
dashedName: learn-about-svg-in-d3
---

# --description--

<dfn>SVG</dfn> é a abreviação de <dfn>Scalable Vector Graphics</dfn>.

Aqui, "scalable" significa que, se você der zoom ou se afastar do objeto, ele não parecerá pixelado. Ele se redimensiona com o sistema de exibição, seja na tela pequena de um dispositivo móvel, seja em um monitor grande de TV.

O SVG é usado para fazer formas geométricas comuns. Como o D3 faz o mapeamento dos dados em uma representação visual, ele usa o SVG para criar as formas para a visualização. As formas do SVG para um página da web devem ir dentro de uma tag `svg`.

O CSS pode ser dimensionável quando os estilos usam unidades relativas (como `vh`, `vw` ou porcentagens), mas usar o SVG é mais flexível para criar visualizações de dados.

# --instructions--

Adicione um nó do `svg` ao `body` usando `append()`. Dê um atributo `width` definido para a constante `w` fornecida e um atributo `height` definido para a constante `h` fornecida usando os métodos `attr()` ou `style()` para cada um. Você verá o nó no resultado porque há uma `background-color` rosa aplicada a ele na tag `style`.

**Observação:** ao usar `attr()`, os atributos width e height não têm unidades. Este é o bloco de construção do dimensionamento - o elemento terá sempre uma proporção de 5:1 da largura para a altura, não importando o nível de zoom.

# --hints--

O documento deve ter 1 elemento `svg`.

```js
assert($('svg').length == 1);
```

O elemento `svg` deve ter um atributo `width` definido como `500` ou estilizado para ter uma largura de `500px`.

```js
assert($('svg').attr('width') == '500' || $('svg').css('width') == '500px');
```

O elemento `svg` deve ter um atributo `height` definido como `100` ou estilizado para ter uma largura de `100px`.

```js
assert($('svg').attr('height') == '100' || $('svg').css('height') == '100px');
```

# --seed--

## --seed-contents--

```html
<style>
  svg {
    background-color: pink;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  // Add your code below this line



                  // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<style>
  svg {
    background-color: pink;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h)
  </script>
</body>
```
