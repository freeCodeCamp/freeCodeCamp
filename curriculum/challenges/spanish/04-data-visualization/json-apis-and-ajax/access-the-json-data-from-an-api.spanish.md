---
id: 587d7fae367417b2b2512be4
title: Access the JSON Data from an API
challengeType: 6
videoUrl: ''
localeTitle: Accede a los datos JSON desde una API
---

## Description
<section id="description"> En el desafío anterior, viste cómo obtener datos JSON de la API de foto freeCodeCamp Cat. Ahora analizará con más detalle los datos devueltos para comprender mejor el formato JSON. Recordemos alguna notación en JavaScript: <blockquote> [] -&gt; Los corchetes representan una matriz <br> {} -&gt; Los corchetes representan un objeto <br> &quot;&quot; -&gt; Las comillas dobles representan una cadena. También se utilizan para nombres de clave en JSON </blockquote> Comprender la estructura de los datos que devuelve una API es importante porque influye en cómo recuperar los valores que necesita. A la derecha, haga clic en el botón &quot;Obtener mensaje&quot; para cargar el JC API JC de FreeCodeCamp Campamp en el HTML. El primer y último carácter que ve en los datos JSON son corchetes <code>[ ]</code> . Esto significa que los datos devueltos son una matriz. El segundo carácter en los datos JSON es un rizo <code>{</code> corchete, que inicia un objeto. Mirando de cerca, puedes ver que hay tres objetos separados. Los datos JSON son una matriz de tres objetos, donde cada objeto contiene información sobre una foto de gato. Anteriormente aprendió que los objetos contienen &quot;pares clave-valor&quot; que están separados por comas. En el ejemplo de Cat Photo, el primer objeto tiene <code>&quot;id&quot;:0</code> donde &quot;id&quot; es una clave y 0 es su valor correspondiente. Del mismo modo, hay claves para &quot;imageLink&quot;, &quot;altText&quot; y &quot;codeNames&quot;. Cada objeto de foto de gato tiene estas mismas claves, pero con valores diferentes. Otro &quot;par clave-valor&quot; interesante en el primer objeto es <code>&quot;codeNames&quot;:[&quot;Juggernaut&quot;,&quot;Mrs. Wallace&quot;,&quot;ButterCup&quot;]</code> . Aquí &quot;codeNames&quot; es la clave y su valor es una matriz de tres cadenas. Es posible tener matrices de objetos, así como una clave con una matriz como valor. Recuerda cómo acceder a los datos en matrices y objetos. Las matrices utilizan la notación de corchetes para acceder a un índice específico de un elemento. Los objetos usan el soporte o la notación de puntos para acceder al valor de una propiedad determinada. Aquí hay un ejemplo que imprime el &quot;altText&quot; de la primera foto del gato; tenga en cuenta que los datos JSON analizados en el editor se guardan en una variable llamada <code>json</code> : <blockquote> console.log (json [0] .altText); <br> // Imprime &quot;Un gato blanco con un casco verde con forma de melón en la cabeza&quot;. </blockquote></section>

## Instructions
<section id="instructions"> Para el gato con el &quot;id&quot; de 2, imprima en la consola el segundo valor en la matriz <code>codeNames</code> . Debe usar el corchete y la notación de puntos en el objeto (que se guarda en la variable <code>json</code> ) para acceder al valor. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe usar el soporte y la notación de puntos para acceder al nombre del código correcto e imprimir "Loki" en la consola.
    testString: 'assert(code.match(/(?:json\[2\]\.codeNames\[1\]|json\[2\]\[("|")codeNames\1\]\[1\])/g), "Your code should use bracket and dot notation to access the proper code name, and print "Loki" to the console.");'

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
        document.getElementsByClassName('message')[0].innerHTML=JSON.stringify(json);
        // Add your code below this line


        // Add your code above this line
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
