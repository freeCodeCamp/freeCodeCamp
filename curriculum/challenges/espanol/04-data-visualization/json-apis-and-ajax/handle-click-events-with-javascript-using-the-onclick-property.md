---
id: 587d7fad367417b2b2512be1
title: Maneja los eventos de clic con JavaScript usando la propiedad onclick
challengeType: 6
forumTopicId: 301503
dashedName: handle-click-events-with-javascript-using-the-onclick-property
---

# --description--

Quieres que tu código se ejecute solo una vez que la página haya terminado de cargar. Para eso, puedes adjuntar un evento JavaScript al documento llamado `DOMContentLoaded`. Este es el código que hace esto:

```js
document.addEventListener('DOMContentLoaded', function() {

});
```

Puedes implementar manejadores de eventos que van dentro de la función `DOMContentLoaded`. You can implement an `onclick` event handler which triggers when the user clicks on the `#getMessage` element, by adding the following code:

```js
document.getElementById('getMessage').onclick = function(){};
```

# --instructions--

Agrega un manejador de eventos de clic dentro de la función `DOMContentLoaded` para el elemento con id `getMessage`.

# --hints--

Your code should use the `document.getElementById` method to select the element whose id is `getMessage`.

```js
assert(code.match(/document\s*\.getElementById\(\s*?('|")getMessage\1\s*?\)/g));
```

Tu código debe agregar un manegador de eventos `onclick`.

```js
assert(typeof document.getElementById('getMessage').onclick === 'function');
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
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
<p class="message box">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>
```

# --solutions--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    // Add your code below this line
    document.getElementById('getMessage').onclick = function(){ };
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
<p class="message box">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>
```
