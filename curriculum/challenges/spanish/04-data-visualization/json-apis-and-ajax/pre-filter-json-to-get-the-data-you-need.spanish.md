---
id: 587d7fae367417b2b2512be7
title: Pre-filter JSON to Get the Data You Need
challengeType: 6
videoUrl: ''
localeTitle: Pre-filtre JSON para obtener los datos que necesita
---

## Description
<section id="description"> Si no quieres renderizar cada foto de gato que obtienes de la API de foto freeCodeCamp Campamp, puedes pre-filtrar el JSON antes de recorrerlo. Teniendo en cuenta que los datos JSON se almacena en una matriz, se puede utilizar el <code>filter</code> método para filtrar el gato cuya clave &quot;id&quot; tiene un valor de 1. Este es el código para hacer esto: <blockquote> json = json.filter (función (val) { <br> return (val.id! == 1); <br> }); </blockquote></section>

## Instructions
<section id="instructions"> Agregue código para <code>filter</code> los datos json para eliminar el cat con el valor &quot;id&quot; de 1. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe utilizar el método de <code>filter</code> .
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
