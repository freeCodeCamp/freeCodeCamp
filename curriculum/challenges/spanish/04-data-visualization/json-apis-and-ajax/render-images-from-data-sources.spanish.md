---
id: 587d7fae367417b2b2512be6
title: Render Images from Data Sources
challengeType: 6
videoUrl: ''
localeTitle: Renderizar imágenes desde fuentes de datos
---

## Description
<section id="description"> Los últimos desafíos mostraron que cada objeto en la matriz JSON contiene una clave <code>imageLink</code> con un valor que es la URL de la imagen de un gato. Cuando recorre estos objetos, puede usar esta propiedad <code>imageLink</code> para mostrar esta imagen en un elemento <code>img</code> . Aquí está el código que hace esto: <code>html += &quot;&lt;img src = &#39;&quot; + val.imageLink + &quot;&#39; &quot; + &quot;alt=&#39;&quot; + val.altText + &quot;&#39;&gt;&quot;;</code> </section>

## Instructions
<section id="instructions"> Agregue código para usar las propiedades <code>imageLink</code> y <code>altText</code> en una etiqueta <code>img</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Debe usar la propiedad <code>imageLink</code> para mostrar las imágenes.
    testString: 'assert(code.match(/val\.imageLink/g), "You should use the <code>imageLink</code> property to display the images.");'

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
        json.forEach(function(val) {
          html += "<div class = 'cat'>";
          // Add your code below this line


          // Add your code above this line
          html += "</div><br>";
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
