---
id: 587d7dbf367417b2b2512bbb
title: Aplicar um estilo até que uma condição seja atendida com @while
challengeType: 0
forumTopicId: 301454
dashedName: apply-a-style-until-a-condition-is-met-with-while
---

# --description--

A diretiva `@while` é uma opção com funcionalidade semelhante ao laço `while` do JavaScript. Isso cria as regras do CSS até que uma condição seja atendida.

O desafio `@for` deu um exemplo para criar um sistema de grid simples. Isso também pode funcionar com `@while`.

```scss
$x: 1;
@while $x < 13 {
  .col-#{$x} { width: 100%/12 * $x;}
  $x: $x + 1;
}
```

Primeiro, defina a variável `$x` e defina-a como 1. Em seguida, use a diretiva `@while` para criar o sistema de grid *enquanto* `$x` for menor que 13. Depois de definir a regra CSS para `width`, `$x` é incrementado por 1 para evitar um loop infinito.

# --instructions--

Use `@while` para criar uma série de classes com diferentes `font-sizes`.

Deve haver 5 classes diferentes de `text-1` até `text-5`. Em seguida, defina `font-size` como `15px` multiplicado pelo número de índice atual. Certifique-se de evitar um loop infinito!

# --hints--

O código deve usar a diretiva `@while`.

```js
assert(code.match(/@while /g));
```

O código deve usar uma variável de índice que começa em um índice de 1.

```js
assert(code.match(/\$.*:\s*?1;/gi));
```

O código deve incrementar a variável contadora.

```js
assert(code.match(/\$(.*)\s*?:\s*\$\1\s*\+\s*1\s*;/gi));
```

A classe `.text-1` deve ter um `font-size` de `15px`.

```js
assert($('.text-1').css('font-size') == '15px');
```

A classe `.text-2` deve ter um `font-size` de `30px`.

```js
assert($('.text-2').css('font-size') == '30px');
```

A classe `.text-3` deve ter um `font-size` de `45px`.

```js
assert($('.text-3').css('font-size') == '45px');
```

A classe `.text-4` deve ter um `font-size` de `60px`.

```js
assert($('.text-4').css('font-size') == '60px');
```

A classe `.text-5` deve ter um `font-size` de `75px`.

```js
assert($('.text-5').css('font-size') == '75px');
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>



</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

# --solutions--

```html
<style type='text/scss'>
  $x: 1;
  @while $x < 6 {
    .text-#{$x}{
      font-size: 15px * $x;
    }
    $x: $x + 1;
  }
</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```
