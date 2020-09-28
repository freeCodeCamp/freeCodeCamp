---
id: 587d7dbf367417b2b2512bba
title: Use @each to Map Over Items in a List
challengeType: 0
videoUrl: ''
localeTitle: Utilice @each para asignar sobre elementos en una lista
---

## Description
<section id="description"> El último desafío mostró cómo la directiva <code>@for</code> utiliza un valor de inicio y final para realizar un bucle un cierto número de veces. Sass también ofrece la directiva <code>@each</code> que recorre cada elemento en una lista o mapa. En cada iteración, la variable se asigna al valor actual de la lista o mapa. <blockquote> @each $ color en azul, rojo, verde { <br> . # {$ color} -text {color: $ color;} <br> } </blockquote> Un mapa tiene una sintaxis ligeramente diferente. Aquí hay un ejemplo: <blockquote> $ colores: (color1: azul, color2: rojo, color3: verde); <br><br> @each $ clave, $ color en $ colores { <br> . # {$ color} -text {color: $ color;} <br> } </blockquote> Tenga en cuenta que la variable <code>$key</code> es necesaria para hacer referencia a las claves en el mapa. De lo contrario, el CSS compilado tendría <code>color1</code> , <code>color2</code> ... en él. Los dos ejemplos de código anteriores se convierten en el siguiente CSS: <blockquote> .blue-text { <br> color azul; <br> } <br><br> .red-text { <br> color rojo; <br> } <br><br> .green-text { <br> color verde; <br> } </blockquote></section>

## Instructions
<section id="instructions"> Escriba una directiva <code>@each</code> que pase por una lista: <code>blue, black, red</code> y asigne cada variable a una clase <code>.color-bg</code> , donde la parte de &quot;color&quot; cambia para cada elemento. Cada clase debe establecer el <code>background-color</code> respectivo. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe utilizar la directiva <code>@each</code> .
    testString: 'assert(code.match(/@each /g), "Your code should use the <code>@each</code> directive.");'
  - text: Tu clase <code>.blue-bg</code> debería tener un <code>background-color</code> de <code>background-color</code> azul.
    testString: 'assert($(".blue-bg").css("background-color") == "rgb(0, 0, 255)", "Your <code>.blue-bg</code> class should have a <code>background-color</code> of blue.");'
  - text: Tu clase <code>.black-bg</code> debe tener un <code>background-color</code> de <code>background-color</code> negro.
    testString: 'assert($(".black-bg").css("background-color") == "rgb(0, 0, 0)", "Your <code>.black-bg</code> class should have a <code>background-color</code> of black.");'
  - text: Tu clase <code>.red-bg</code> debe tener un <code>background-color</code> de <code>background-color</code> rojo.
    testString: 'assert($(".red-bg").css("background-color") == "rgb(255, 0, 0)", "Your <code>.red-bg</code> class should have a <code>background-color</code> of red.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>



  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
