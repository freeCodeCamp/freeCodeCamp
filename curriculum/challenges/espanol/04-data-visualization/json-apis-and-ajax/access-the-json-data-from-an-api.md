---
id: 587d7fae367417b2b2512be4
title: Accede a los datos JSON desde una API
challengeType: 6
forumTopicId: 301499
dashedName: access-the-json-data-from-an-api
---

# --description--

En el desafío anterior, vimos cómo obtener datos JSON de la API de foto del gato de freeCodeCamp.

Ahora examinarás más de cerca los datos devueltos para comprender mejor el formato JSON. Recuerda algunas nociones en JavaScript:

<blockquote>[ ] -> Los corchetes cuadrados representan un arreglo<br>{ } -> Los corchetes rizados representan un objeto<br>" -> Las comillas dobles representan una cadena (String). También se utilizan para nombres de claves en JSON.</blockquote>

Entender la estructura de los datos que devuelve una API es importante porque influye en cómo recuperar los valores que necesitas.

A la derecha, haz clic en el botón `Get Message` para cargar la API JSON de la foto del gato de freeCodeCamp en el HTML.

El primer y último carácter que ves en los datos JSON son corchetes cuadrados `[ ]`. Esto significa que los datos devueltos son un arreglo. El segundo carácter en los datos JSON es un corchete rizado `{`, que inicia un objeto. Mirando de cerca, se puede ver que hay tres objetos separados. Los datos JSON son un arreglo de tres objetos, donde cada objeto contiene información sobre una foto de un gato.

Aprendiste anteriormente que los objetos contienen "pares clave-valor" separados por comas. En el ejemplo de la foto del gato, el primer objeto tiene `"id":0` donde `id` es una clave y `0` es su valor correspondiente. De manera similar, hay claves para `imageLink`, `altText`, y `codeNames`. Cada objeto de la foto del gato tiene estas mismas claves, pero con valores diferentes.

Otro interesante "par clave-valor" en el primer objeto es `"codeNames":["Juggernaut","Mrs. Wallace","ButterCup"]`. Aquí `codeNames` es la clave y su valor es un arreglo de tres cadenas. Es posible tener arreglos de objetos así como una clave con un arreglo como un valor.

Recuerda cómo acceder a los datos en arreglos y objetos. Los arreglos usan notación de corchete para acceder a un índice específico de un elemento. Los objetos usan tanto la notación de corchete como la notación de puntos para acceder al valor de una propiedad determinada. Aquí hay un ejemplo que imprime la propiedad `altText` de la primera foto del gato - ten en cuenta que los datos JSON analizados en el editor se guardan en una variable llamada `json`:

```js
console.log(json[0].altText);
```

La consola muestra la cadena de texto`A white cat wearing a green helmet shaped melon on its head.`.

# --instructions--

Para el gato con el `id` de 2, imprime en la consola el segundo valor en el arreglo `codeNames`. Debes usar el corchete y la notación de puntos en el objeto (que se guarda en la variable `json`) para acceder al valor.

# --hints--

Tu código debe usar corchete y notación de puntos para acceder al nombre del código correcto e imprimir `Loki` en la consola.

```js
assert(
  code.match(
    /console\s*\.\s*log\s*\(\s*json\s*\[2\]\s*(\.\s*codeNames|\[\s*('|`|")codeNames\2\s*\])\s*\[\s*1\s*\]\s*\)/g
  )
);
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open("GET",'/json/cats.json', true);
      req.send();
      req.onload=function(){
        const json = JSON.parse(req.responseText);
        document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
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
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open("GET",'/json/cats.json', true);
      req.send();
      req.onload=function(){
        const json = JSON.parse(req.responseText);
        document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
        // Add your code below this line
        console.log(json[2].codeNames[1]);
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
