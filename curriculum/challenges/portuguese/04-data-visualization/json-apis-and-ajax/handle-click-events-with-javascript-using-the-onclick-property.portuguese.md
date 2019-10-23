---
id: 587d7fad367417b2b2512be1
title: Handle Click Events with JavaScript using the onclick property
challengeType: 6
videoUrl: ''
localeTitle: Manipular eventos de clique com JavaScript usando a propriedade onclick
---

## Description
<section id="description"> Você quer que seu código seja executado somente quando a página terminar de carregar. Para esse propósito, você pode anexar um evento JavaScript ao documento chamado <code>DOMContentLoaded</code> . Aqui está o código que faz isso: <blockquote> document.addEventListener (&#39;DOMContentLoaded&#39;, function () { <br><br> }); </blockquote> Você pode implementar manipuladores de eventos que vão dentro da função <code>DOMContentLoaded</code> . Você pode implementar um manipulador de eventos <code>onclick</code> que é acionado quando o usuário clica no elemento com o ID <code>getMessage</code> , adicionando o seguinte código: <blockquote> document.getElementById (&#39;getMessage&#39;). onclick = function () {}; </blockquote></section>

## Instructions
<section id="instructions"> Adicione um manipulador de eventos click dentro da função <code>DOMContentLoaded</code> para o elemento com o id de <code>getMessage</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve usar o método <code>document.getElementById</code> para selecionar o elemento <code>getMessage</code> .
    testString: 'assert(code.match(/document\.getElementById\(\s*?("|")getMessage\1\s*?\)/g), "Your code should use the <code>document.getElementById</code> method to select the <code>getMessage</code> element.");'
  - text: Seu código deve adicionar um manipulador de eventos <code>onclick</code> .
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
