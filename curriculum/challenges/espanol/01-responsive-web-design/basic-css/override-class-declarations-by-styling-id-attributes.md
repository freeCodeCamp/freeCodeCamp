---
id: bad87fee1348bd8aedf06756
title: Sobreescribe declaraciones de clase dando estilo a atributos ID
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkpDhB'
forumTopicId: 18251
dashedName: override-class-declarations-by-styling-id-attributes
---

# --description--

Acabamos de comprobar que los navegadores leen CSS desde arriba hacia abajo siguiendo el orden de las declaraciones. Por lo tanto, si llega a ocasionarse un conflicto, el navegador utilizará la última declaración CSS. Ten en cuenta que incluso si hubiésemos puesto `blue-text` antes que `pink-text` en nuestro elemento de clase `h1`, seguiría buscando al orden de la declaración y no al orden de su uso.

Pero todavía no terminamos. Hay otras formas de sobreescribir CSS. ¿Recuerdas los atributos id?

Sobrescribamos tus clases `pink-text` y `blue-text`, y haz que el `h1` sea naranja al darle al elemento `h1` un id y luego estilizando ese id.

# --instructions--

Dale al elemento `h1` el atributo `id` de `orange-text`. Recuerda, los estilos id se ven así:

```html
<h1 id="orange-text">
```

Deja las clases `blue-text` y `pink-text` en tu elemento `h1`.

Crea una declaración CSS para el id `orange-text` en el elemento `style`. Aquí hay un ejemplo de cómo se debería ver:

```css
#brown-text {
  color: brown;
}
```

**Nota:** No importa si declaras este CSS arriba o debajo de la clase `pink-text`, ya que el atributo `id` siempre tendrá precedencia.

# --hints--

Tu elemento `h1` debe incluir la clase `pink-text`.

```js
assert($('h1').hasClass('pink-text'));
```

Tu elemento `h1` debe incluir la clase `blue-text`.

```js
assert($('h1').hasClass('blue-text'));
```

Tu elemento `h1` debe incluir el id `orange-text`.

```js
assert($('h1').attr('id') === 'orange-text');
```

Debe haber un solo elemento `h1`.

```js
assert($('h1').length === 1);
```

El id `orange-text` debe tener una declaración CSS.

```js
assert(code.match(/#orange-text\s*{/gi));
```

Tu `h1` no debe tener ningún atributo `style`.

```js
assert(!code.match(/<h1.*style.*>/gi));
```

Tu elemento `h1` debe ser naranja.

```js
assert($('h1').css('color') === 'rgb(255, 165, 0)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 class="pink-text blue-text">Hello World!</h1>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
  #orange-text {
    color: orange;
  }  
</style>
<h1 id="orange-text"  class="pink-text blue-text">Hello World!</h1>
```
