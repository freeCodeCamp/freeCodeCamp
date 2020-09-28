---
id: 587d7fae367417b2b2512be3
title: Get JSON with the JavaScript XMLHttpRequest Method
challengeType: 6
videoUrl: ''
localeTitle: Obtenga JSON con el método XMLHttpRequest de JavaScript
---

## Description
<section id="description"> También puede solicitar datos de una fuente externa. Aquí es donde las API entran en juego. Recuerde que las API (o interfaces de programación de aplicaciones) son herramientas que las computadoras utilizan para comunicarse entre sí. Aprenderá cómo actualizar HTML con los datos que obtenemos de las API utilizando una tecnología llamada AJAX. La mayoría de las API web transfieren datos en un formato llamado JSON. JSON significa JavaScript Object Notation. La sintaxis JSON es muy similar a la notación literal de objetos JavaScript. JSON tiene propiedades de objeto y sus valores actuales, intercalados entre un <code>{</code> y un <code>}</code> . Estas propiedades y sus valores a menudo se denominan &quot;pares clave-valor&quot;. Sin embargo, los JSON transmitidos por las API se envían como <code>bytes</code> , y su aplicación lo recibe como una <code>string</code> . Estos se pueden convertir en objetos JavaScript, pero no son objetos JavaScript de forma predeterminada. El método <code>JSON.parse</code> analiza la cadena y construye el objeto JavaScript descrito por él. Puedes solicitar el JSON desde la API Cat Photo de freeCodeCamp. Aquí está el código que puede poner en su evento de clic para hacer esto: <blockquote> req = new XMLHttpRequest (); <br> req.open (&quot;GET&quot;, &#39;/ json / cats.json&#39;, verdadero); <br> req.send (); <br> req.onload = function () { <br> json = JSON.parse (req.responseText); <br> document.getElementsByClassName (&#39;message&#39;) [0] .innerHTML = JSON.stringify (json); <br> }; </blockquote> Aquí hay una reseña de lo que está haciendo cada pieza. El objeto <code>XMLHttpRequest</code> JavaScript tiene una serie de propiedades y métodos que se utilizan para transferir datos. Primero, se crea una instancia del objeto <code>XMLHttpRequest</code> y se guarda en la variable <code>req</code> . A continuación, el método <code>open</code> inicializa una solicitud: este ejemplo solicita datos de una API, por lo tanto, es una solicitud &quot;GET&quot;. El segundo argumento para <code>open</code> es la URL de la API de la que solicita datos. El tercer argumento es un valor booleano donde <code>true</code> convierte en una solicitud asíncrona. El método de <code>send</code> envía la solicitud. Finalmente, el controlador de eventos <code>onload</code> analiza los datos devueltos y aplica el método <code>JSON.stringify</code> para convertir el objeto JavaScript en una cadena. Esta cadena se inserta como el texto del mensaje. </section>

## Instructions
<section id="instructions"> Actualice el código para crear y enviar una solicitud &quot;GET&quot; a la API Cat Photo de freeCodeCamp. Luego haga clic en el botón &quot;Obtener mensaje&quot;. Su función AJAX reemplazará el texto &quot;El mensaje irá aquí&quot; con la salida JSON sin formato de la API. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe crear un nuevo <code>XMLHttpRequest</code> .
    testString: 'assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g), "Your code should create a new <code>XMLHttpRequest</code>.");'
  - text: Su código debe usar el método <code>open</code> para inicializar una solicitud &quot;GET&quot; a la API de foto freeCodeCamp Cat.
    testString: 'assert(code.match(/\.open\(\s*?("|")GET\1\s*?,\s*?("|")\/json\/cats\.json\2\s*?,\s*?true\s*?\)/g), "Your code should use the <code>open</code> method to initialize a "GET" request to the freeCodeCamp Cat Photo API.");'
  - text: El código debe utilizar el <code>send</code> método para enviar la solicitud.
    testString: 'assert(code.match(/\.send\(\s*\)/g), "Your code should use the <code>send</code> method to send the request.");'
  - text: Su código debe tener un controlador de eventos <code>onload</code> configurado en una función.
    testString: 'assert(code.match(/\.onload\s*=\s*function\(\s*?\)\s*?{/g), "Your code should have an <code>onload</code> event handler set to a function.");'
  - text: Su código debe usar el método <code>JSON.parse</code> para analizar el <code>responseText</code> .
    testString: 'assert(code.match(/JSON\.parse\(.*\.responseText\)/g), "Your code should use the <code>JSON.parse</code> method to parse the <code>responseText</code>.");'
  - text: Su código debe obtener el elemento con <code>message</code> clase y cambiar su HTML interno a la cadena de datos JSON.
    testString: 'assert(code.match(/document\.getElementsByClassName\(\s*?("|")message\1\s*?\)\[0\]\.innerHTML\s*?=\s*?JSON\.stringify\(.+?\)/g), "Your code should get the element with class <code>message</code> and change its inner HTML to the string of JSON data.");'

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
