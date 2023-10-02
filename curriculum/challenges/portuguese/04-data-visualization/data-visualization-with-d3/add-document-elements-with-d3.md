---
id: 587d7fa6367417b2b2512bc2
title: Adicionar elementos de documento com D3
challengeType: 6
forumTopicId: 301474
dashedName: add-document-elements-with-d3
---

# --description--

O D3 tem vários métodos que permitem adicionar e alterar elementos ao documento.

O método `select()` seleciona um elemento do documento. Ele recebe um argumento para o nome do elemento que você deseja e retorna um nó de HTML para o primeiro elemento do documento que corresponde ao nome. Exemplo:

```js
const anchor = d3.select("a");
```

O exemplo acima encontra a primeira tag de âncora na página e salva um nó de HTML para ela na variável `anchor`. Você pode usar a seleção com outros métodos. A parte que diz `d3` do exemplo é uma referência ao objeto do D3, que é a maneira de acessar os métodos do D3.

Dois outros métodos úteis são `append()` e `text()`.

O método `append()` tem um argumento para o elemento que você deseja adicionar ao documento. Ele anexa um nó de HTML a um item selecionado e retorna um identificador para esse nó.

O método `text()` define o texto do nó selecionado ou obtém o texto atual. Para definir o valor, você passa uma string como um argumento dentro dos parênteses do método.

Aqui está um exemplo que seleciona uma lista não ordenada, associa um item de lista e adiciona texto:

```js
d3.select("ul")
  .append("li")
  .text("Very important item");
```

O D3 permite que você encadeie vários métodos juntamente com períodos para realizar várias ações em sequência.

# --instructions--

Use o método `select` para selecionar a tag `body` do documento. Em seguida, use o método `append` em uma tag `h1` e adicione o texto `Learning D3` no elemento `h1`.

# --hints--

A tag `body` deve ter um elemento `h1`.

```js
assert($('body').children('h1').length == 1);
```

O elemento `h1` deve conter o texto `Learning D3`.

```js
assert($('h1').text() == 'Learning D3');
```

O código deve acessar o objeto `d3`.

```js
assert(code.match(/d3/g));
```

O código deve usar o método `select`.

```js
assert(code.match(/\.select/g));
```

O código deve usar o método `append`.

```js
assert(code.match(/\.append/g));
```

O código deve usar o método `text`.

```js
assert(code.match(/\.text/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    // Add your code below this line



    // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    d3.select("body")
      .append("h1")
      .text("Learning D3")
  </script>
</body>
```
