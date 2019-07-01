---
id: 587d7fa5367417b2b2512bbd
title: Extend One Set of CSS Styles to Another Element
challengeType: 0
videoUrl: ''
localeTitle: Extiende un conjunto de estilos CSS a otro elemento
---

## Description
<section id="description"> Sass tiene una característica llamada <code>extend</code> que facilita tomar prestadas las reglas de CSS de un elemento y construirlas sobre otro. Por ejemplo, el siguiente bloque de reglas CSS <code>.panel</code> una clase <code>.panel</code> . Tiene un <code>background-color</code> , <code>height</code> y <code>border</code> . 

```css
.panel{ 
  background-color: red;
  height: 70px;
  border: 2px solid green;
}
```
Ahora quieres otro panel llamado <code>.big-panel</code> . Tiene las mismas propiedades base que el <code>.panel</code> , pero también necesita un <code>width</code> y <code>font-size</code> . Es posible copiar y pegar las reglas CSS iniciales de <code>.panel</code> , pero el código se vuelve repetitivo a medida que agrega más tipos de paneles. La directiva <code>extend</code> es una forma sencilla de reutilizar las reglas escritas para un elemento, y luego agregar más para otro: 

```css
.big-panel { 
  @extend .panel; 
  width: 150px;
  font-size: 2em;
}
```
El <code>.big-panel</code> tendrá las mismas propiedades que <code>.panel</code> además de los nuevos estilos. </section>

## Instructions
<section id="instructions"> Cree una clase <code>.info-important</code> que extienda <code>.info</code> y que también tenga un <code>background-color</code> definido en magenta. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su clase de <code>info-important</code> debe tener un <code>background-color</code> configurado en <code>magenta</code> .
    testString: 'assert(code.match(/\.info-important\s*?{[\s\S]*background-color\s*?:\s*?magenta\s*?;[\s\S]*}/gi), "Your <code>info-important</code> class should have a <code>background-color</code> set to <code>magenta</code>.");'
  - text: Su clase de <code>info-important</code> debe usar <code>@extend</code> para heredar el estilo de la clase de <code>info</code> .
    testString: 'assert(code.match(/\.info-important\s*?{[\s\S]*@extend\s*?.info\s*?;[\s\S]*/gi), "Your <code>info-important</code> class should use <code>@extend</code> to inherit the styling from the <code>info</code> class.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>
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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
