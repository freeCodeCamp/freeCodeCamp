---
id: 587d7fa7367417b2b2512bc7
title: Alterar estilos com base nos dados
challengeType: 6
forumTopicId: 301479
dashedName: change-styles-based-on-data
---

# --description--

O D3 tem a ver com a visualização e a apresentação dos dados. Você provavelmente vai querer alterar o estilo de elementos com base nos dados. Por exemplo, pode ser que você queira colorir um ponto dos dados em azul se ele tiver um valor inferior a 20, ou em vermelho se for igual ou superior. Você pode usar uma função de callback no método `style()` e incluir uma lógica condicional. A função de callback usa o parâmetro `d` para representar o ponto de dados:

```js
selection.style("color", (d) => {

});
```

O método `style()` não é limitado a definir `color` - ele também pode ser usado com outras propriedades do CSS.

# --instructions--

Adicione o método `style()` ao código no editor para definir `color` para os elementos `h2` de modo condicional. Escreva a função de callback de modo que, se o valor do dado for inferior a 20, ela retornará "red" (vermelho). Do contrário, retornará "green" (verde).

**Observação:** você pode usar a lógica de if-else ou o operador ternário.

# --hints--

O primeiro `h2` deve ter `color` definido como "red".

```js
assert($('h2').eq(0).css('color') == 'rgb(255, 0, 0)');
```

O segundo `h2` deve ter `color` definido como "green".

```js
assert($('h2').eq(1).css('color') == 'rgb(0, 128, 0)');
```

O terceiro `h2` deve ter `color` definido como "green".

```js
assert($('h2').eq(2).css('color') == 'rgb(0, 128, 0)');
```

O quarto `h2` deve ter `color` definido como "red".

```js
assert($('h2').eq(3).css('color') == 'rgb(255, 0, 0)');
```

O quinto `h2` deve ter `color` definido como "green".

```js
assert($('h2').eq(4).css('color') == 'rgb(0, 128, 0)');
```

O quinto `h2` deve ter `color` definido como "red".

```js
assert($('h2').eq(5).css('color') == 'rgb(255, 0, 0)');
```

O sétimo `h2` deve ter `color` definido como "green".

```js
assert($('h2').eq(6).css('color') == 'rgb(0, 128, 0)');
```

O oitavo `h2` deve ter `color` definido como "red".

```js
assert($('h2').eq(7).css('color') == 'rgb(255, 0, 0)');
```

O nono `h2` deve ter `color` definido como "red".

```js
assert($('h2').eq(8).css('color') == 'rgb(255, 0, 0)');
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
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

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      .style("color", (d) => d < 20 ? "red" : "green")
  </script>
</body>
```
