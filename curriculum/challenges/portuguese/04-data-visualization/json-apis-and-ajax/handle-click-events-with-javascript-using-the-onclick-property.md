---
id: 587d7fad367417b2b2512be1
title: Tratar eventos de clique com o JavaScript usando a propriedade onclick
challengeType: 6
forumTopicId: 301503
dashedName: handle-click-events-with-javascript-using-the-onclick-property
---

# --description--

Você quer que seu código execute apenas quando a página tenha terminado de carregar. Para isso, você pode incluir um evento JavaScript ao documento chamado `DOMContentLoaded`. Aqui está o código para fazer isso:

```js
document.addEventListener('DOMContentLoaded', function() {

});
```

Você pode implementar manipuladores de eventos que vão dentro da função `DOMContentLoaded`. Você pode implementar um manipulador de evento `onclick`, que dispara quando o usuário clica no elemento `#getMessage`, adicionando o código a seguir:

```js
document.getElementById('getMessage').onclick = function(){};
```

# --instructions--

Adicione um manipulador de eventos de clique em uma função `DOMContentLoaded` para o elemento com o id `getMessage`.

# --hints--

O código deve usar o método `document.getElementById` para selecionar o elemento cujo id é `getMessage`.

```js
assert(code.match(/document\s*\.getElementById\(\s*?('|")getMessage\1\s*?\)/g));
```

O código deve adicionar um manipulador de evento `onclick`.

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
