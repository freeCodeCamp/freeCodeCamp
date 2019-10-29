---
id: 587d7fad367417b2b2512be2
title: Change Text with click Events
challengeType: 6
videoUrl: ''
localeTitle: Cambiar texto con click eventos
---

## Description
<section id="description"> Cuando ocurre el evento de clic, puede usar JavaScript para actualizar un elemento HTML. Por ejemplo, cuando un usuario hace clic en el botón &quot;Obtener mensaje&quot;, cambia el texto del elemento con el <code>message</code> clase para que diga &quot;Aquí está el mensaje&quot;. Esto funciona agregando el siguiente código dentro del evento click: <code>document.getElementsByClassName(&#39;message&#39;)[0].textContent=&quot;Here is the message&quot;;</code> </section>

## Instructions
<section id="instructions"> Agregue código dentro del controlador de eventos <code>onclick</code> para cambiar el texto dentro del elemento del <code>message</code> para que diga &quot;Aquí está el mensaje&quot;. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe usar el método <code>document.getElementsByClassName</code> para seleccionar el elemento con <code>message</code> clase y establecer su <code>textContent</code> de <code>textContent</code> en la cadena dada.
    testString: 'assert(code.match(/document\.getElementsByClassName\(\s*?("|")message\1\s*?\)\[0\]\.textContent\s*?=\s*?("|")Here is the message\2/g), "Your code should use the <code>document.getElementsByClassName</code> method to select the element with class <code>message</code> and set its <code>textContent</code> to the given string.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick=function(){
      // Add your code below this line


      // Add your code above this line
    }
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
