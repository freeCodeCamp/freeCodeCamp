---
id: 587d7dbd367417b2b2512bb4
title: Armazenar dados com variáveis do Sass
challengeType: 0
forumTopicId: 301460
dashedName: store-data-with-sass-variables
---

# --description--

Um recurso do Sass que é diferente do CSS está no fato de ele usar variáveis. Elas são declaradas e definidas para armazenar dados, semelhante ao JavaScript.

Em JavaScript, variáveis são definidas usando as palavras-chave `let` e `const`. Em Sass, variáveis começam com um `$` seguido do nome da variável.

Aqui está alguns exemplos:

```scss
$main-fonts: Arial, sans-serif;
$headings-color: green;
```

Para usar variáveis:

```scss
h1 {
  font-family: $main-fonts;
  color: $headings-color;
}
```

Um exemplo onde variáveis são úteis é quando um certo número de elementos precisa ser da mesma cor. Se essa cor for alterada, o único local para se editar no código é no valor da variável.

# --instructions--

Crie a variável `$text-color` e defina-a como `red`. Em seguida, altere o valor da propriedade `color` dos elementos `.blog-post` e `h2` para a variável `$text-color`.

# --hints--

O código deve ter uma variável Sass declarada `$text-color` com o valor `red`.

```js
assert(code.match(/\$text-color\s*:\s*?red\s*;/g));
```

O código deve usar a variável `$text-color` para alterar a propriedade `color` para os itens `.blog-post` e `h2`.

```js
assert(code.match(/color\s*:\s*\$text-color\s*;?/g));
```

O elemento `.blog-post` deve ter a propriedade `color` definida como red.

```js
assert($('.blog-post').css('color') == 'rgb(255, 0, 0)');
```

Os elementos `h2` devem ter a propriedade `color` definida como red.

```js
assert($('h2').css('color') == 'rgb(255, 0, 0)');
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>


  .header{
    text-align: center;
  }
  .blog-post, h2 {
    color: red;
  }
</style>

<h1 class="header">Learn Sass</h1>
<div class="blog-post">
  <h2>Some random title</h2>
  <p>This is a paragraph with some random text in it</p>
</div>
<div class="blog-post">
  <h2>Header #2</h2>
  <p>Here is some more random text.</p>
</div>
<div class="blog-post">
  <h2>Here is another header</h2>
  <p>Even more random text within a paragraph</p>
</div>
```

# --solutions--

```html
<style type='text/scss'>
  $text-color: red;

  .header{
    text-align: center;
  }
  .blog-post, h2 {
    color: $text-color;
  }
</style>

<h1 class="header">Learn Sass</h1>
<div class="blog-post">
  <h2>Some random title</h2>
  <p>This is a paragraph with some random text in it</p>
</div>
<div class="blog-post">
  <h2>Header #2</h2>
  <p>Here is some more random text.</p>
</div>
<div class="blog-post">
  <h2>Here is another header</h2>
  <p>Even more random text within a paragraph</p>
</div>
```
