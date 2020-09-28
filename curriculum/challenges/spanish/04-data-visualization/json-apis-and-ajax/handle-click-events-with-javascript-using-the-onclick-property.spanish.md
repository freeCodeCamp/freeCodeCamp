---
id: 587d7fad367417b2b2512be1
title: Handle Click Events with JavaScript using the onclick property
challengeType: 6
videoUrl: ''
localeTitle: Manejar eventos de clic con JavaScript usando la propiedad onclick
---

## Description
<section id="description"> Quieres que tu código se ejecute solo una vez que tu página haya terminado de cargarse. Para ese propósito, puede adjuntar un evento de JavaScript al documento llamado <code>DOMContentLoaded</code> . Aquí está el código que hace esto: <blockquote> document.addEventListener (&#39;DOMContentLoaded&#39;, function () { <br><br> }); </blockquote> Puede implementar controladores de eventos que van dentro de la función <code>DOMContentLoaded</code> . Puede implementar un controlador de eventos <code>onclick</code> que se activa cuando el usuario hace clic en el elemento con id <code>getMessage</code> , agregando el siguiente código: <blockquote> document.getElementById (&#39;getMessage&#39;). onclick = function () {}; </blockquote></section>

## Instructions
<section id="instructions"> Agregue un controlador de eventos de clic dentro de la función <code>DOMContentLoaded</code> para el elemento con id de <code>getMessage</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe usar el método <code>document.getElementById</code> para seleccionar el elemento <code>getMessage</code> .
    testString: 'assert(code.match(/document\.getElementById\(\s*?("|")getMessage\1\s*?\)/g), "Your code should use the <code>document.getElementById</code> method to select the <code>getMessage</code> element.");'
  - text: Su código debe agregar un controlador de eventos <code>onclick</code> .
    testString: 'assert(typeof document.getElementById("getMessage").onclick === "function", "Your code should add an <code>onclick</code> event handler.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  document.addEventListener('DOMContentLoaded',function(){
    // Add your code below this line


    // Add your code above this line
  });
</script>
<style>
  body {
    text-align: center;
    font-family: "Helvetica", sans-serif;
  }
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  .box {
    border-radius: 5px;
    background-color: #eee;
    padding: 20px 5px;
  }
  button {
    color: white;
    background-color: #4791d0;
    border-radius: 5px;
    border: 1px solid #4791d0;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    background-color: #0F5897;
    border: 1px solid #0F5897;
  }
</style>
<h1>Cat Photo Finder</h1>
<p class="message">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
