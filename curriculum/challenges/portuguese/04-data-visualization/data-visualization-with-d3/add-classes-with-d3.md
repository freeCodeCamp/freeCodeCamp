---
id: 587d7fa7367417b2b2512bc8
title: Adicionar classes com o D3
challengeType: 6
forumTopicId: 301473
dashedName: add-classes-with-d3
---

# --description--

É difícil de gerenciar diversos estilos inline em elementos do HTML, mesmo para aplicações pequenas. É mais fácil adicionar uma classe aos elementos e estilizar aquela classe uma vez usando as regras de CSS. O D3 tem o método `attr()` para adicionar qualquer atributo HTML a um elemento, incluindo o nome da classe.

O método `attr()` funciona da mesma forma que `style()`. Ele recebe valores separados por vírgulas e pode usar uma função de callback. Aqui está um exemplo para adicionar uma classe `container` a uma seleção:

```js
selection.attr("class", "container");
```

Observe que o parâmetro `class` permanecerá o mesmo sempre que você precisar adicionar uma classe e que somente o parâmetro `container` mudará.

# --instructions--

Adicione o método `attr()` ao código no editor e coloque uma classe `bar` nos elementos `div`.

# --hints--

Os elementos `div` devem ter a classe `bar`.

```js
assert($('div').attr('class').trim().split(/\s+/g).includes('bar'));
```

O código deve usar o método `attr()`.

```js
assert(code.match(/\.attr/g));
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
      // Add your code below this line
      .attr("class","bar");
      // Add your code above this line
  </script>
</body>
```
