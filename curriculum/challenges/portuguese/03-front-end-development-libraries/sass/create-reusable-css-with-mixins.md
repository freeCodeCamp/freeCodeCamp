---
id: 587d7dbd367417b2b2512bb6
title: Criar CSS reutilizável com mixins
challengeType: 0
forumTopicId: 301455
dashedName: create-reusable-css-with-mixins
---

# --description--

Em Sass, um <dfn>mixin</dfn> é um grupo de declarações CSS que podem ser reutilizados em toda a folha de estilos. A definição começa com a regra @ do `@mixin` seguida por um nome personalizado. Você aplica o mixin usando a regra `@include`.

```scss
@mixin reset-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav ul {
  @include reset-list;
}
```

Compila para:

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
```

Os mixins também podem receber argumentos, o que permite que seu comportamento seja personalizado. Os argumentos são necessários quando se utiliza o mixin.

```scss
@mixin prose($font-size, $spacing) {
  font-size: $font-size;
  margin: 0;
  margin-block-end: $spacing;
}

p {
  @include prose(1.25rem, 1rem);
}

h2 {
  @include prose(2.4rem, 1.5rem);
}
```

Você pode tornar os argumentos opcionais dando valores padrão aos parâmetros.

```scss
@mixin text-color($color: black) {
  color: $color;
}

p {
  @include text-color(); /* color: black */
}

nav a {
  @include text-color(orange);
}
```

# --instructions--

Escreva um mixin chamado `shape` e dê a ele 3 parâmetros: `$w`, `$h` e `$bg-color`.

Use o mixin `shape` para dar ao elemento `#square` uma largura (w) e uma altura (h) de `50px` e a cor de fundo `red` (vermelha). Para o elemento `#rect-a`, adicione uma largura (w) de `100px`, uma altura (h) de `50px` e a cor de fundo `blue` (azul). Finalmente, para o elemento `#rect-b`, adicione uma largura (w) de `50px`, uma altura (h) de `100px` e a cor de fundo `orange` (laranja).

# --hints--

Você deve declarar um mixin chamado `shape` e dar a ele 3 parâmetros: `$w`, `$h` e `$bg-color`.

```js
assert.match(code, /@mixin\s+shape\s*\(\s*\$w,\s*\$h,\s*\$bg-color\s*\)\s*{/gi);
```

O mixin deve incluir uma propriedade `width` que usa o parâmetro `$w`.

```js
assert.match(__helpers.removeWhiteSpace(code), /width:\$w;/gi);
```

O mixin deve incluir uma propriedade `height` que usa o parâmetro `$h`.

```js
assert.match(__helpers.removeWhiteSpace(code), /height:\$h;/gi);
```

O mixin deve incluir uma propriedade `background-color` que usa o parâmetro `$bg-color`.

```js
assert.match(__helpers.removeWhiteSpace(code), /background-color:\$bg\-color;/gi);
```

Você deve substituir os estilos dentro do seletor `#square` por uma chamada ao mixin `shape` usando a palavra-chave `@include`. Definindo uma largura e altura de `50px` e a cor de fundo `red`.

```js
assert.match(code, /#square\s*{\s*@include\s+shape\s*\(\s*50px\s*,\s*50px\s*,\s*red\s*\)\s*;\s*}/gi);
```

Você deve substituir os estilos dentro do seletor `#rect-a` por uma chamada ao mixin `shape` mixin usando a palavra-chave `@include`. Definindo uma largura de `100px`, uma altura de `50px` e a cor de fundo `blue`.

```js
assert.match(code, /#rect-a\s*{\s*@include\s+shape\s*\(\s*100px\s*,\s*50px\s*,\s*blue\s*\)\s*;\s*}/gi);
```

Você deve substituir os estilos dentro do seletor `#rect-b` por uma chamada ao mixin `shape` usando a palavra-chave `@include`. Definindo uma largura de `50px`, uma altura de `100px` e a cor de fundo `orange`.

```js
assert.match(code, /#rect-b\s*{\s*@include\s+shape\s*\(\s*50px\s*,\s*100px\s*,\s*orange\s*\)\s*;\s*}/gi);
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>
#square {
  width: 50px;
  height: 50px;
  background-color: red;
}

#rect-a {
  width: 100px;
  height: 50px;
  background-color: blue;
}

#rect-b {
  width: 50px;
  height: 100px;
  background-color: orange;
}
</style>

<div id="square"></div>
<div id="rect-a"></div>
<div id="rect-b"></div>
```

# --solutions--

```html
<style type='text/scss'>
@mixin shape($w, $h, $bg-color) {
  width: $w;
  height: $h;
  background-color: $bg-color;
}

#square {
  @include shape(50px, 50px, red);
}

#rect-a {
  @include shape(100px, 50px, blue);
}

#rect-b {
  @include shape(50px, 100px, orange);
}
</style>

<div id="square"></div>
<div id="rect-a"></div>
<div id="rect-b"></div>
```
