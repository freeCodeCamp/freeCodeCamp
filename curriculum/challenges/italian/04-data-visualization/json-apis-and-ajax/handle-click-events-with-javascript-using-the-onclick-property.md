---
id: 587d7fad367417b2b2512be1
title: Gestire gli eventi click in JavaScript con la proprietà onclick
challengeType: 6
forumTopicId: 301503
dashedName: handle-click-events-with-javascript-using-the-onclick-property
---

# --description--

Vuoi che il tuo codice venga eseguito solo una volta che la pagina avrà terminato il caricamento. A tal fine, puoi collegare un evento JavaScript al documento chiamato `DOMContentLoaded`. Ecco il codice che lo fa:

```js
document.addEventListener('DOMContentLoaded', function() {

});
```

Puoi implementare i gestori di eventi che vanno all'interno della funzione `DOMContentLoaded`. Puoi implementare un gestore di eventi `onclick` che si attiva quando l'utente fa click sull'elemento `#getMessage`, aggiungendo il seguente codice:

```js
document.getElementById('getMessage').onclick = function(){};
```

# --instructions--

Aggiungi un gestore di eventi click all'interno della funzione `DOMContentLoaded` per l'elemento con id `getMessage`.

# --hints--

Il tuo codice dovrebbe utilizzare il metodo `document.getElementById` per selezionare l'elemento con l'id `getMessage`.

```js
assert(code.match(/document\s*\.getElementById\(\s*?('|")getMessage\1\s*?\)/g));
```

Il tuo codice dovrebbe aggiungere un gestore di eventi `onclick`.

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
