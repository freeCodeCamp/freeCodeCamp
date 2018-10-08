---
id: 587d78a5367417b2b2512ada
title: Use the CSS Transform scale Property to Scale an Element on Hover
localeTitle: Use la propiedad de escala de transformación CSS para escalar un elemento al pasar el cursor
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
La propiedad de <code>transform</code> tiene una variedad de funciones que le permiten escalar, mover, rotar, sesgar, etc., sus elementos. Cuando se usa con pseudoclases como <code>:hover</code> el <code>:hover</code> que especifican un determinado estado de un elemento, la propiedad de <code>transform</code> puede agregar fácilmente interactividad a sus elementos. 
Aquí hay un ejemplo para escalar los elementos del párrafo a 2.1 veces su tamaño original cuando un usuario se cierne sobre ellos: 
<blockquote>p:hover {<br>&nbsp;&nbsp;transform: scale(2.1);<br>}</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Añadir una regla CSS para el <code>hover</code> estado del <code>div</code> y utilizar el <code>transform</code> la propiedad para escalar la <code>div</code> elemento a 1,1 veces su tamaño original cuando un usuario se desplaza sobre él. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El tamaño del elemento <code>div</code> debe escalar 1.1 veces cuando el usuario se desplaza sobre él.
    testString: 'assert(code.match(/div:hover\s*?{\s*?transform:\s*?scale\(1\.1\);/gi), "The size of the <code>div</code> element should scale 1.1 times when the user hovers over it.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
    background: linear-gradient(
      53deg,
      #ccfffc,
      #ffcccf
    );
  }



</style>

<div></div>
```

</div>



</section>

## Solution
<section id='solution'>


```js
var code = "div:hover {transform: scale(1.1);}"
```

</section>
