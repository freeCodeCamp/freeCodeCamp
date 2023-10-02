---
id: 587d7dbf367417b2b2512bbb
title: Aplica un estilo hasta que se cumpla una condición con @while
challengeType: 0
forumTopicId: 301454
dashedName: apply-a-style-until-a-condition-is-met-with-while
---

# --description--

La directiva `@while` es una opción con funcionalidad similar al bucle `while` de JavaScript. Crea reglas CSS hasta que se cumpla una condición.

El desafío `@for` dio un ejemplo para crear un sistema de cuadrícula (grid) simple. Esto también puede funcionar con `@while`.

```scss
$x: 1;
@while $x < 13 {
  .col-#{$x} { width: 100%/12 * $x;}
  $x: $x + 1;
}
```

Primero, define una variable `$x` y establécela a 1. A continuación, utiliza la directiva `@while` para crear el sistema de cuadrícula *while* `$x` sea menor que 13. Después de configurar la regla CSS para `width`, `$x` se incrementa por 1 para evitar un bucle infinito.

# --instructions--

Usa `@while` para crear una serie de clases con diferentes `font-sizes`.

Debe haber 5 clases diferentes desde `text-1` hasta `text-5`. Luego ajusta `font-size` a `15px` multiplicado por el número de índice actual. ¡Asegúrate de evitar un bucle infinito!

# --hints--

El código debe usar la directiva `@while`.

```js
assert(code.match(/@while /g));
```

El código debe utilizar una variable de índice que comience en un índice de 1.

```js
assert(code.match(/\$.*:\s*?1;/gi));
```

Tu código debe incrementar la variable contador.

```js
assert(code.match(/\$(.*)\s*?:\s*\$\1\s*\+\s*1\s*;/gi));
```

Tu clase `.text-1` debe tener un `font-size` de `15px`.

```js
assert($('.text-1').css('font-size') == '15px');
```

Tu clase `.text-2` debe tener un `font-size` de `30px`.

```js
assert($('.text-2').css('font-size') == '30px');
```

Tu clase `.text-3` debe tener un `font-size` de `45px`.

```js
assert($('.text-3').css('font-size') == '45px');
```

Tu clase `.text-4` debe tener un `font-size` de `60px`.

```js
assert($('.text-4').css('font-size') == '60px');
```

Tu clase `.text-5` debe tener un `font-size` de `75px`.

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
