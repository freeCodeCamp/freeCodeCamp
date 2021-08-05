---
id: 587d7dbf367417b2b2512bba
title: Usar @each para mapear sobre itens em uma lista
challengeType: 0
forumTopicId: 301461
dashedName: use-each-to-map-over-items-in-a-list
---

# --description--

O último desafio mostrou como a diretiva `@for` usa valores de início e fim para iterar uma quantidade determinada de vezes. Sass também oferece a diretiva `@each` a qual itera sobre cada item em uma lista ou mapa. Em cada iteração, a variável é atribuída ao valor atual da lista ou do mapa.

```scss
@each $color in blue, red, green {
  .#{$color}-text {color: $color;}
}
```

Um mapa possui uma sintaxe ligeiramente diferente. Exemplo:

```scss
$colors: (color1: blue, color2: red, color3: green);

@each $key, $color in $colors {
  .#{$color}-text {color: $color;}
}
```

Note que a variável `$key` é necessária para referenciar as chaves no mapa. Caso contrário, o CSS compilado teria nele `color1`, `color2` e assim por diante. Os dois exemplos de código acima são convertidos para os CSS seguintes:

```scss
.blue-text {
  color: blue;
}

.red-text {
  color: red;
}

.green-text {
  color: green;
}
```

# --instructions--

Escreva uma diretiva `@each` que passar por uma lista: `blue, black, red` e atribui cada variável à classe `.color-bg`, aonde a parte `color` altera para cada item. Cada classe deve definir a propriedade `background-color` para a respectiva cor.

# --hints--

O código deve usar a diretiva `@each`.

```js
assert(code.match(/@each /g));
```

A classe `.blue-bg` deve ter a propriedade `background-color` definida com o valor blue.

```js
assert($('.blue-bg').css('background-color') == 'rgb(0, 0, 255)');
```

A classe `.black-bg` deve ter a propriedade `background-color` com o valor black.

```js
assert($('.black-bg').css('background-color') == 'rgb(0, 0, 0)');
```

A classe `.red-bg` deve ter a propriedade `background-color` com o valor red.

```js
assert($('.red-bg').css('background-color') == 'rgb(255, 0, 0)');
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>



  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```

# --solutions--

```html
<style type='text/scss'>

  @each $color in blue, black, red {
    .#{$color}-bg {background-color: $color;}
  }

  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```

---

```html
<style type='text/scss'>

  $colors: (color1: blue, color2: black, color3: red);

  @each $key, $color in $colors {
    .#{$color}-bg {background-color: $color;}
  }

  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```
