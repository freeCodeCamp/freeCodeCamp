---
id: 587d7fa7367417b2b2512bc4
title: Trabalhar com dados no D3
challengeType: 6
forumTopicId: 301497
dashedName: work-with-data-in-d3
---

# --description--

A biblioteca D3 concentra-se numa abordagem baseada em dados. Quando você tem um conjunto de dados, você pode aplicar os métodos do D3 para exibi-los na página. Os dados vêm em vários formatos, mas este desafio usa um arrays simples de números.

O primeiro passo é sensibilizar o D3 para os dados. O método `data()` é usado em uma seleção de elementos do DOM para anexar os dados a esses elementos. O conjunto de dados é passado como um argumento ao método.

Um padrão comum de fluxo de trabalho é criar um novo elemento no documento para cada parte dos dados no conjunto. O D3 tem o método `enter()` para esse propósito.

Quando `enter()` é combinado com o método `data()`, ele olha para os elementos selecionados da página e os compara com o número de itens de dados no conjunto. Se houver menos elementos do que itens de dados, ele criará os elementos que faltam.

Aqui está um exemplo que seleciona um elemento `ul` e cria um novo item de lista baseado no número de entradas no array:

```html
<body>
  <ul></ul>
  <script>
    const dataset = ["a", "b", "c"];
    d3.select("ul").selectAll("li")
      .data(dataset)
      .enter()
      .append("li")
      .text("New item");
  </script>
</body>
```

Pode parecer confuso selecionar elementos que ainda não existem. Este código está dizendo para o D3 selecionar primeiro o `ul` na página. Em seguida, selecionar todos os itens da lista, o que retorna uma seleção vazia. Então, o método `data()` revisa o conjunto de dados e executa o código a seguir três vezes, uma vez para cada item do array. O método `enter()` vê que não há elementos `li` na página, mas precisa de 3 (um para cada dado no `dataset`). Novos elementos `li` são anexados ao `ul` e têm o texto `New item`.

# --instructions--

Selecione o nó de `body` e todos os elementos `h2`. Faça com que o D3 crie e anexe uma tag `h2` para cada item no array do `dataset`. O texto no `h2` deve dizer `New Title`. O código deve usar os métodos `data()` e `enter()`.

# --hints--

O documento deve ter 9 elementos `h2`.

```js
assert($('h2').length == 9);
```

O texto no `h2` deve dizer `New Title`. A capitalização e o espaçamento devem coincidir com exatidão.

```js
assert(
  $('h2')
    .text()
    .match(/New Title/g).length == 9
);
```

O código deve usar o método `data()`.

```js
assert(code.match(/\.data/g));
```

O código deve usar o método `enter()`.

```js
assert(code.match(/\.enter/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

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

    d3.select("body")
      .selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text("New Title")

  </script>
</body>
```
