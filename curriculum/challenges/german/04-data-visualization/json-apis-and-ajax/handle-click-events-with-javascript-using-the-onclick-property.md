---
id: 587d7fad367417b2b2512be1
title: Bestimme Klick-Ereignisse mit JavaScript unter Verwendung der Eigenschaft onclick
challengeType: 6
forumTopicId: 301503
dashedName: handle-click-events-with-javascript-using-the-onclick-property
---

# --description--

Der Code soll erst ausgeführt werden, wenn die Seite vollständig geladen wurde. Zu diesem Zweck kannst du ein JavaScript-Ereignis mit dem Namen `DOMContentLoaded` an das Dokument anhängen. Hier ist der Code dafür:

```js
document.addEventListener('DOMContentLoaded', function() {

});
```

Du kannst Event-Handler implementieren, die innerhalb der `DOMContentLoaded` -Funktion laufen. You can implement an `onclick` event handler which triggers when the user clicks on the `#getMessage` element, by adding the following code:

```js
document.getElementById('getMessage').onclick = function(){};
```

# --instructions--

Füge ein Klick-Event-Handler innerhalb der `DOMContentLoaded`-Funktion für das Element mit der ID `getMessage` hinzu.

# --hints--

Your code should use the `document.getElementById` method to select the element whose id is `getMessage`.

```js
assert(code.match(/document\s*\.getElementById\(\s*?('|")getMessage\1\s*?\)/g));
```

Dein Code sollte einen `onclick`-Event-Handler hinzufügen.

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
