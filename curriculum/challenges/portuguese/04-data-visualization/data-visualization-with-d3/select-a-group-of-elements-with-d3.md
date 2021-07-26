---
id: 587d7fa6367417b2b2512bc3
title: Selecionar um grupo de elementos com D3
challengeType: 6
forumTopicId: 301490
dashedName: select-a-group-of-elements-with-d3
---

# --description--

O D3 também tem o método `selectAll()` para selecionar um grupo de elementos. Ele retorna um array de nós de HTML para todos os itens no documento que correspondem à string de entrada. Aqui está um exemplo para selecionar todas as tags de âncora em um documento:

```js
const anchors = d3.selectAll("a");
```

Assim como o método `select()`, o `selectAll()` suporta encadeamento de métodos e você pode usá-lo com outros métodos.

# --instructions--

Selecione todas as tags `li` do documento e altere o texto delas para a string `list item`, encadeando o método `.text()`.

# --hints--

Deve haver 3 elementos `li` na página, e o texto em cada um deve dizer `list item`. A capitalização e o espaçamento devem coincidir com exatidão.

```js
assert(
  $('li')
    .text()
    .match(/list item/g).length == 3
);
```

O código deve acessar o objeto `d3`.

```js
assert(code.match(/d3/g));
```

O código deve usar o método `selectAll`.

```js
assert(code.match(/\.selectAll/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <ul>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
  </ul>
  <script>
    // Add your code below this line



    // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<body>
  <ul>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
  </ul>
  <script>
    d3.selectAll("li")
      .text("list item")
  </script>
</body>
```
