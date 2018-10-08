---
id: 587d7fae367417b2b2512be5
title: Convert JSON Data to HTML
localeTitle: Convertir datos JSON a HTML
challengeType: 6
---

## Description
<section id='description'> 
Ahora que está obteniendo datos de una API JSON, puede mostrarlos en el HTML. 
Puede usar un método <code>forEach</code> para recorrer en bucle los datos, ya que los objetos de la foto del gato se mantienen en una matriz. A medida que llegas a cada elemento, puedes modificar los elementos HTML. 
Primero, declare una variable html con <code>var html = &quot;&quot;;</code> . 
Luego, recorra el JSON, agregando HTML a la variable que envuelve los nombres de las claves en etiquetas <code>strong</code> , seguido del valor. Cuando el bucle termina, lo renderizas. 
Aquí está el código que hace esto: 
<blockquote>json.forEach(function(val) {</br>&nbsp;&nbsp;var keys = Object.keys(val);</br>&nbsp;&nbsp;html += "&lt;div class = 'cat'&gt;";</br>&nbsp;&nbsp;keys.forEach(function(key) {</br>&nbsp;&nbsp;&nbsp;&nbsp;html += "&lt;strong&gt;" + key + "&lt;/strong&gt;: " + val[key] + "&lt;br&gt;";</br>&nbsp;&nbsp;});</br>&nbsp;&nbsp;html += "&lt;/div&gt;&lt;br&gt;";</br>});</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Agregue un método <code>forEach</code> para recorrer en bucle los datos JSON y cree los elementos HTML para mostrarlos. 
Aquí hay un ejemplo JSON 
<blockquote>[</br>&nbsp;&nbsp;{</br>&nbsp;&nbsp;&nbsp;&nbsp;"id":0,</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"imageLink":"https://s3.amazonaws.com/freecodecamp/funny-cat.jpg",</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"altText":"A white cat wearing a green helmet shaped melon on its head. ",</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"codeNames":[ "Juggernaut", "Mrs. Wallace", "Buttercup"</br>&nbsp;&nbsp;&nbsp;&nbsp;]</br>&nbsp;&nbsp;}</br>]</blockquote> 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe almacenar los datos en la variable <code>html</code>
    testString: 'assert(code.match(/html\s+?(\+=|=\shtml\s\+)/g), "Your code should store the data in the <code>html</code> variable");'
  - text: Su código debe utilizar un método <code>forEach</code> para recorrer en bucle los datos JSON de la API.
    testString: 'assert(code.match(/json\.forEach/g), "Your code should use a <code>forEach</code> method to loop over the JSON data from the API.");'
  - text: Su código debe envolver los nombres de las claves en etiquetas <code>strong</code> .
    testString: 'assert(code.match(/<strong>.+<\/strong>/g), "Your code should wrap the key names in <code>strong</code> tags.");'

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
<p class="message box">
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
