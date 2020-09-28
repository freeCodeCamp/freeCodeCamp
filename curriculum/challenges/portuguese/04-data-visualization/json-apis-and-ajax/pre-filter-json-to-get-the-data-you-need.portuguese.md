---
id: 587d7fae367417b2b2512be7
title: Pre-filter JSON to Get the Data You Need
challengeType: 6
videoUrl: ''
localeTitle: Pré-filtre JSON para obter os dados de que você precisa
---

## Description
<section id="description"> Se você não quiser renderizar todas as fotos de gatos que você recebe da FreeCodeCamp Cat Photo API, é possível pré-filtrar o JSON antes de fazer um loop por ele. Dado que os dados JSON são armazenados em uma matriz, você pode usar o método <code>filter</code> para filtrar o gato cuja chave &quot;id&quot; tem um valor de 1. Aqui está o código para fazer isso: <blockquote> json = json.filter (function (val) { <br> retorno (val.id! == 1); <br> }); </blockquote></section>

## Instructions
<section id="instructions"> Adicione o código para <code>filter</code> os dados do json para remover o gato com o valor &quot;id&quot; de 1. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve usar o método de <code>filter</code> .
    testString: 'assert(code.match(/json\.filter/g), "Your code should use the <code>filter</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick=function(){
      req=new XMLHttpRequest();
      req.open("GET",'/json/cats.json',true);
      req.send();
      req.onload=function(){
        json=JSON.parse(req.responseText);
        var html = "";
        // Add your code below this line


        // Add your code above this line
         json.forEach(function(val) {
           html += "<div class = 'cat'>"

           html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>"

           html += "</div>"
         });
         document.getElementsByClassName('message')[0].innerHTML=html;
       };
     };
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
