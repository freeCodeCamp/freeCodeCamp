---
id: 587d7faf367417b2b2512be9
title: Post Data with the JavaScript XMLHttpRequest Method
challengeType: 6
videoUrl: ''
localeTitle: Publicar datos con el método XMLHttpRequest de JavaScript
---

## Description
<section id="description"> En los ejemplos anteriores, recibió datos de un recurso externo. También puede enviar datos a un recurso externo, siempre que ese recurso sea compatible con las solicitudes de AJAX y conozca la URL. El método <code>XMLHttpRequest</code> de JavaScript también se utiliza para publicar datos en un servidor. Aquí hay un ejemplo: <blockquote> req = new XMLHttpRequest (); <br> req.open (&quot;POST&quot;, url, true); <br> req.setRequestHeader (&#39;Content-Type&#39;, &#39;text / plain&#39;); <br> req.onreadystatechange = function () { <br> if (req.readyState == 4 &amp;&amp; req.status == 200) { <br> document.getElementsByClassName (&#39;message&#39;) [0] .innerHTML = req.responseText; <br> } <br> }; <br> req.send (nombre de usuario); </blockquote> Has visto varios de estos métodos antes. Aquí el método <code>open</code> inicializa la solicitud como un &quot;POST&quot; a la URL dada del recurso externo, y utiliza el <code>true</code> Booleano para hacerlo asíncrono. El método <code>setRequestHeader</code> establece el valor de un encabezado de solicitud HTTP, que contiene información sobre el remitente y la solicitud. Debe llamarse después del método <code>open</code> , pero antes del método de <code>send</code> . Los dos parámetros son el nombre del encabezado y el valor para establecer como el cuerpo de ese encabezado. A continuación, el <code>onreadystatechange</code> escucha de eventos <code>onreadystatechange</code> maneja un cambio en el estado de la solicitud. Un estado <code>readyState</code> de 4 significa que la operación está completa, y un <code>status</code> de 200 significa que fue una solicitud exitosa. El HTML del documento puede ser actualizado. Finalmente, el método de <code>send</code> envía la solicitud con el valor <code>userName</code> , que fue dado por el usuario en el campo de <code>input</code> . </section>

## Instructions
<section id="instructions"> Actualice el código para crear y enviar una solicitud &quot;POST&quot;. Luego ingrese su nombre en el cuadro de entrada y haga clic en &quot;Enviar mensaje&quot;. Su función AJAX reemplazará &quot;La respuesta del servidor estará aquí&quot;. Con la respuesta del servidor. En este caso, es su nombre añadido con &quot;ama a los gatos&quot;. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe crear un nuevo <code>XMLHttpRequest</code> .
    testString: 'assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g), "Your code should create a new <code>XMLHttpRequest</code>.");'
  - text: Su código debe usar el método <code>open</code> para inicializar una solicitud &quot;POST&quot; al servidor.
    testString: 'assert(code.match(/\.open\(\s*?("|")POST\1\s*?,\s*?url\s*?,\s*?true\s*?\)/g), "Your code should use the <code>open</code> method to initialize a "POST" request to the server.");'
  - text: Su código debe usar el método <code>setRequestHeader</code> .
    testString: 'assert(code.match(/\.setRequestHeader\(\s*?("|")Content-Type\1\s*?,\s*?("|")text\/plain\2\s*?\)/g), "Your code should use the <code>setRequestHeader</code> method.");'
  - text: Su código debe tener un controlador de eventos <code>onreadystatechange</code> configurado en una función.
    testString: 'assert(code.match(/\.onreadystatechange\s*?=/g), "Your code should have an <code>onreadystatechange</code> event handler set to a function.");'
  - text: Su código debe obtener el elemento con <code>message</code> clase y cambiar su HTML interno al <code>responseText</code> .
    testString: 'assert(code.match(/document\.getElementsByClassName\(\s*?("|")message\1\s*?\)\[0\]\.innerHTML\s*?=\s*?.+?\.responseText/g), "Your code should get the element with class <code>message</code> and change its inner HTML to the <code>responseText</code>.");'
  - text: Su código debe utilizar el método de <code>send</code> .
    testString: 'assert(code.match(/\.send\(\s*?userName\s*?\)/g), "Your code should use the <code>send</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('sendMessage').onclick=function(){

      var userName=document.getElementById('name').value;
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
<h1>Cat Friends</h1>
<p class="message">
  Reply from Server will be here
</p>
<p>
  <label for="name">Your name:
    <input type="text" id="name"/>
  </label>
  <button id="sendMessage">
    Send Message
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
