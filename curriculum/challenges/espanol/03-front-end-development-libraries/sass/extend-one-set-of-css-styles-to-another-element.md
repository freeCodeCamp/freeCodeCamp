---
id: 587d7fa5367417b2b2512bbd
title: Hereda un conjunto de estilos CSS a otro elemento
challengeType: 0
forumTopicId: 301456
dashedName: extend-one-set-of-css-styles-to-another-element
---

# --description--

Sass tiene una función llamada `extend` que facilita tomar prestadas las reglas CSS de un elemento y construir sobre ellas en otro.

Por ejemplo, el siguiente bloque de reglas CSS da estilo a la clase `.panel`. Este tiene un `background-color`, `height` y `border`.

```scss
.panel{
  background-color: red;
  height: 70px;
  border: 2px solid green;
}
```

Ahora tienes otro panel llamado `.big-panel`. Tiene las mismas propiedades base que `.panel`, pero también necesita `width` y `font-size`. Es posible copiar y pegar las reglas de CSS iniciales de `.panel`, pero el código se vuelve repetitivo a medida que agregas más tipos de paneles. La directiva `extend` es una forma simple de reutilizar las reglas escritas para un elemento y luego añadir más para otro:

```scss
.big-panel{
  @extend .panel;
  width: 150px;
  font-size: 2em;
}
```

El `.big-panel` tendrá las mismas propiedades que `.panel` además de los nuevos estilos.

# --instructions--

Crea una clase `.info-important` que hereda `.info` y también tiene un `background-color` establecido en magenta.

# --hints--

Tu clase `info-important` debe tener un `background-color` establecido a `magenta`.

```js
assert(
  code.match(
    /\.info-important\s*?{[\s\S]*background-color\s*?:\s*?magenta\s*?;[\s\S]*}/gi
  )
);
```

Tu clase `info-important` debe usar `@extend` para heredar el estilo de la clase `info`.

```js
assert(
  code.match(/\.info-important\s*?{[\s\S]*@extend\s*?.info\s*?;[\s\S]*/gi)
);
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>
  h3{
    text-align: center;
  }
  .info{
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
  }




</style>
<h3>Posts</h3>
<div class="info-important">
  <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
</div>

<div class="info">
  <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
</div>
```

# --solutions--

```html
<style type='text/scss'>
  h3{
    text-align: center;
  }
  .info{
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
  }
  .info-important{
    @extend .info;
    background-color: magenta;
  }



</style>
<h3>Posts</h3>
<div class="info-important">
  <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
</div>

<div class="info">
  <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
</div>
```
