---
id: 587d7fa8367417b2b2512bc9
title: Atualizar a altura de um elemento dinamicamente
challengeType: 6
forumTopicId: 301493
dashedName: update-the-height-of-an-element-dynamically
---

# --description--

Os desafios anteriores tratavam da forma como exibir os dados de um array e como adicionar classes do CSS. Você pode combinar essas lições para criar um gráfico de barras simples. Há duas etapas para isso:

1) Crie uma `div` para cada ponto de dados no array

2) Dê a cada `div` uma altura dinâmica usando uma função de callback no método `style()`, que define a altura igual ao valor de dado

Lembre-se do formato para definir um estilo usando uma função de callback:

```js
selection.style("cssProperty", (d) => d)
```

# --instructions--

Adicione o método `style()` ao código no editor para definir a propriedade `height` para cada elemento. Use uma função de callback para retornar o valor do ponto de dados com a string `px` adicionada a ele.

# --hints--

A primeira `div` deve ter uma `height` de `12` pixels.

```js
assert($('div').eq(0)[0].style.height === '12px');
```

A segunda `div` deve ter uma `height` de `31` pixels.

```js
assert($('div').eq(1)[0].style.height === '31px');
```

A terceira `div` deve ter uma `height` de `22` pixels.

```js
assert($('div').eq(2)[0].style.height === '22px');
```

A quarta `div` deve ter uma `height` de `17` pixels.

```js
assert($('div').eq(3)[0].style.height === '17px');
```

A quinta `div` deve ter uma `height` de `25` pixels.

```js
assert($('div').eq(4)[0].style.height === '25px');
```

A sexta `div` deve ter uma `height` de `18` pixels.

```js
assert($('div').eq(5)[0].style.height === '18px');
```

A sétima `div` deve ter uma `height` de `29` pixels.

```js
assert($('div').eq(6)[0].style.height === '29px');
```

A oitava `div` deve ter uma `height` de `14` pixels.

```js
assert($('div').eq(7)[0].style.height === '14px');
```

A nona `div` deve ter uma `height` de `9` pixels.

```js
assert($('div').eq(8)[0].style.height === '9px');
```

# --seed--

## --seed-contents--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
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
      // Add your code below this line



      // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
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
      .style('height', d => `${d}px`)
  </script>
</body>
```
