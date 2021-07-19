---
id: 587d781e367417b2b2512acb
title: Prender um elemento ao seu elemento pai com posicionamento absolute
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLJ7c3'
forumTopicId: 301060
dashedName: lock-an-element-to-its-parent-with-absolute-positioning
---

# --description--

A próxima opção da propriedade CSS `position` é `absolute`, que prende o elemento relativamente ao contêiner do seu elemento pai. Diferente da posição `relative`, esta posição remove o elemento do fluxo normal do documento, fazendo com que os itens ao seu redor o ignorem. As propriedades de deslocamento do CSS (top ou bottom e left ou right) são usadas para ajustar a posição.

Um detalhe do posicionamento absoluto é que a posição do elemento será vinculada relativamente ao elemento ancestral mais próximo que tenha definida uma propriedade position diferente de *static*. Se você esquecer de adicionar a propriedade position ao elemento pai, (isso é geralmente feito utilizando `position: relative;`), o navegador continuará buscando a propriedade position nos elementos anteriores até chegar ao elemento `body`.

# --instructions--

Prenda o elemento `#searchbar` no canto superior direito do elemento `section` pai, declarando a propriedade `position` com o valor de `absolute`. Dê a ele as propriedade `top` e `right` de 50 pixels cada.

# --hints--

O elemento `#searchbar` deve ter a proprieade `position` com o valor de `absolute`.

```js
assert($('#searchbar').css('position') == 'absolute');
```

Você deve usar a propriedade CSS `top` com o valor de 50 pixels no elemento `#searchbar`.

```js
assert($('#searchbar').css('top') == '50px');
```

Você deve usar a propriedade CSS `right` com o valor de 50 pixels no elemento `#searchbar`.

```js
assert($('#searchbar').css('right') == '50px');
```

# --seed--

## --seed-contents--

```html
<style>
  #searchbar {



  }
  section {
    position: relative;
  }
</style>
<body>
  <h1>Welcome!</h1>
  <section>
    <form id="searchbar">
      <label for="search">Search:</label>
      <input type="search" id="search" name="search">
      <input type="submit" name="submit" value="Go!">
    </form>
  </section>
</body>
```

# --solutions--

```html
<style>
  #searchbar {
    position: absolute;
    top: 50px;
    right: 50px;
  }
  section {
    position: relative;
  }
</style>
<body>
  <h1>Welcome!</h1>
  <section>
    <form id="searchbar">
      <label for="search">Search:</label>
      <input type="search" id="search" name="search">
      <input type="submit" name="submit" value="Go!">
    </form>
  </section>
</body>
```
