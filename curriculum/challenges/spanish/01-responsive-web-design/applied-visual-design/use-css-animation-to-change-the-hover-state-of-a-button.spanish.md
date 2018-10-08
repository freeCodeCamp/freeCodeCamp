---
id: 587d78a7367417b2b2512ae0
title: Use CSS Animation to Change the Hover State of a Button
localeTitle: Usa la animación CSS para cambiar el estado de desplazamiento de un botón
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
Puede usar CSS <code>@keyframes</code> para cambiar el color de un botón en su estado activo. 
Aquí hay un ejemplo de cómo cambiar el ancho de una imagen al pasar el cursor: 
<blockquote>&lt;style&gt;<br>&nbsp;&nbsp;img:hover {<br>&nbsp;&nbsp;&nbsp;&nbsp;animation-name: width;<br>&nbsp;&nbsp;&nbsp;&nbsp;animation-duration: 500ms;<br>&nbsp;&nbsp;}<br><br>&nbsp;&nbsp;@keyframes width {<br>&nbsp;&nbsp;&nbsp;&nbsp;100% {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 40px;<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;}<br>&lt;/style&gt;<br><br>&lt;img src=&quot;https://bit.ly/smallgooglelogo&quot; alt=&quot;Google's Logo&quot; /&gt;</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Tenga en cuenta que <code>ms</code> representa milisegundos, donde 1000 ms es igual a 1 s. 
Use CSS <code>@keyframes</code> para cambiar el <code>background-color</code> de <code>background-color</code> del elemento del <code>button</code> para que se convierta en <code>#4791d0</code> cuando un usuario se <code>#4791d0</code> sobre él. La regla <code>@keyframes</code> solo debe tener una entrada para el <code>100%</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La regla @keyframes debe usar el <code>animation-name</code> de color de fondo.
    testString: 'assert(code.match(/@keyframes\s+?background-color\s*?{/g), "The @keyframes rule should use the <code>animation-name</code> background-color.");'
  - text: &quot;Debería haber una regla en <code>@keyframes</code> que cambie el <code>background-color</code> a <code>#4791d0</code> al 100%&quot;.
    testString: 'assert(code.match(/100%\s*?{\s*?background-color:\s*?#4791d0;\s*?}/gi), "There should be one rule under <code>@keyframes</code> that changes the <code>background-color</code> to <code>#4791d0</code> at 100%.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  button {
    border-radius: 5px;
    color: white;
    background-color: #0F5897;
    padding: 5px 10px 8px 10px;
  }

  button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
  }


</style>

<button>Register</button>
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
