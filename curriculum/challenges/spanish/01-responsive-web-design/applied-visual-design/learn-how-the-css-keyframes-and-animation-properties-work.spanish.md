---
id: 587d78a7367417b2b2512adf
title: Learn How the CSS @keyframes and animation Properties Work
localeTitle: Aprende cómo funcionan las propiedades de @fotografías y animaciones de CSS
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
Para animar un elemento, debe conocer las propiedades de la animación y la regla <code>@keyframes</code> . Las propiedades de la animación controlan el comportamiento de la animación y la regla <code>@keyframes</code> controla lo que sucede durante esa animación. Hay ocho propiedades de animación en total. Este desafío lo mantendrá simple y cubrirá primero los dos más importantes: 
<code>animation-name</code> establece el nombre de la animación, que luego es utilizada por <code>@keyframes</code> para indicar a CSS qué reglas van con qué animaciones. 
<code>animation-duration</code> establece el período de tiempo para la animación. 
<code>@keyframes</code> es cómo especificar exactamente qué sucede dentro de la animación a lo largo de la duración. Esto se hace dando propiedades CSS para &quot;marcos&quot; específicos durante la animación, con porcentajes que van desde 0% a 100%. Si comparas esto con una película, las propiedades de CSS para 0% es cómo se muestra el elemento en la escena inicial. Las propiedades de CSS para el 100% es cómo aparece el elemento al final, justo antes de que salgan los créditos. Luego, CSS aplica la magia para hacer la transición del elemento a lo largo de la duración dada para representar la escena. Aquí hay un ejemplo para ilustrar el uso de <code>@keyframes</code> y las propiedades de la animación: 
<blockquote>#anim {<br>&nbsp;&nbsp;animation-name: colorful;<br>&nbsp;&nbsp;animation-duration: 3s;<br>}<br>@keyframes colorful {<br>&nbsp;&nbsp;0% {<br>&nbsp;&nbsp;&nbsp;&nbsp;background-color: blue;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;100% {<br>&nbsp;&nbsp;&nbsp;&nbsp;background-color: yellow;<br>&nbsp;&nbsp;}<br>}</blockquote> 
Para el elemento con el <code>anim</code> ID, el fragmento de código anterior establece la <code>animation-name</code> de <code>colorful</code> y establece la <code>animation-duration</code> de 3 segundos. Luego, la regla <code>@keyframes</code> enlaza con las propiedades de animación con el nombre <code>colorful</code> . Establece el color azul al principio de la animación (0%), que pasará a amarillo al final de la animación (100%). No está limitado solo a las transiciones de principio a fin, puede establecer propiedades para el elemento para cualquier porcentaje entre 0% y 100%. 
</section>

## Instructions
<section id='instructions'> 
Cree una animación para el elemento con el id <code>rect</code> , estableciendo el <code>animation-name</code> la <code>animation-name</code> en arco iris y la <code>animation-duration</code> la <code>animation-duration</code> en 4 segundos. A continuación, declare una regla de <code>@keyframes</code> y establezca el <code>background-color</code> al principio de la animación ( <code>0%</code> ) en azul, la mitad de la animación ( <code>50%</code> ) en verde y el final de la animación ( <code>100%</code> ) en amarillo. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El elemento con id de <code>rect</code> debe tener una propiedad de <code>animation-name</code> con un valor de arco iris.
    testString: 'assert($("#rect").css("animation-name") == "rainbow", "The element with id of <code>rect</code> should have an <code>animation-name</code> property with a value of rainbow.");'
  - text: El elemento con id de <code>rect</code> debe tener una propiedad de <code>animation-duration</code> con un valor de 4s.
    testString: 'assert($("#rect").css("animation-duration") == "4s", "The element with id of <code>rect</code> should have an <code>animation-duration</code> property with a value of 4s.");'
  - text: La regla <code>@keyframes</code> debe usar el <code>animation-name</code> de <code>animation-name</code> de rainbow.
    testString: 'assert(code.match(/@keyframes\s+?rainbow\s*?{/g), "The <code>@keyframes</code> rule should use the <code>animation-name</code> of rainbow.");'
  - text: La regla <code>@keyframes</code> para rainbow debe usar un <code>background-color</code> de <code>background-color</code> azul al 0%.
    testString: 'assert(code.match(/0%\s*?{\s*?background-color:\s*?blue;\s*?}/gi), "The <code>@keyframes</code> rule for rainbow should use a <code>background-color</code> of blue at 0%.");'
  - text: La regla <code>@keyframes</code> para el arco iris debe usar un <code>background-color</code> de <code>background-color</code> verde al 50%.
    testString: 'assert(code.match(/50%\s*?{\s*?background-color:\s*?green;\s*?}/gi), "The <code>@keyframes</code> rule for rainbow should use a <code>background-color</code> of green at 50%.");'
  - text: La regla <code>@keyframes</code> para el arco iris debe usar un <code>background-color</code> de <code>background-color</code> amarillo al 100%.
    testString: 'assert(code.match(/100%\s*?{\s*?background-color:\s*?yellow;\s*?}/gi), "The <code>@keyframes</code> rule for rainbow should use a <code>background-color</code> of yellow at 100%.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
  }

  #rect {


  }




</style>
<div id="rect"></div>
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
