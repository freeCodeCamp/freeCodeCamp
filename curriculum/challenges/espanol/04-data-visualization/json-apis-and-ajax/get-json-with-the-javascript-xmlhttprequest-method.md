---
id: 587d7fae367417b2b2512be3
title: Obtén JSON con el método XMLHttpRequest JavaScript
challengeType: 6
forumTopicId: 301502
dashedName: get-json-with-the-javascript-xmlhttprequest-method
---

# --description--

También puedes solicitar datos de una fuente externa. Aquí es donde entran en juego las API.

Recuerda que las APIs - o Interfaces de Programación de Aplicaciones - son herramientas que las computadoras utilizan para comunicarse entre sí. Aprenderás cómo actualizar HTML con los datos que obtenemos de las APIs usando una tecnología llamada AJAX.

La mayoría de las API web transfieren datos en un formato llamado JSON. JSON significa Notación de Objetos JavaScript.

La sintaxis JSON se ve muy similar a un objeto de JavaScript. JSON tiene propiedades de objetos y sus valores actuales, enrollados entre un `{` y un `}`.

Estas propiedades y sus valores a menudo son referidos como "pares clave-valor".

Sin embargo, JSON transmitido por APIs se envía como `bytes`, y tu aplicación lo recibe como `string`. Estos pueden ser convertidos en objetos de JavaScript, pero no son objetos de JavaScript por defecto. El método `JSON.parse` analiza la cadena y construye el objeto JavaScript descrito por ella.

Tú puedes solicitar el JSON desde la API de foto del gato de freeCodeCamp. Este es el código que puedes poner en tu evento de clic para hacer esto:

```js
const req = new XMLHttpRequest();
req.open("GET",'/json/cats.json',true);
req.send();
req.onload = function(){
  const json = JSON.parse(req.responseText);
  document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
};
```

Aquí hay una revisión de lo que cada pieza está haciendo. El objeto `XMLHttpRequest` de JavaScript tiene un número de propiedades y métodos que se utilizan para transferir datos. Primero, se crea y guarda una instancia del objeto `XMLHttpRequest` en la variable `req`. A continuación, el método `open` inicializa una solicitud - este ejemplo está solicitando datos de una API, por lo tanto es una solicitud `GET`. El segundo argumento para `open` es la URL de la API de la que estás solicitando datos. El tercer argumento es un valor booleano donde `true` lo hace una solicitud asincrónica. El método `send` envía la solicitud. Finalmente, el manejador de eventos `onload` analiza los datos devueltos y aplica `JSON.stringify` para convertir el objeto de JavaScript en una cadena. Esta cadena es luego insertada como el texto del mensaje.

# --instructions--

Actualiza el código para crear y enviar una solicitud `GET` a la API de foto del gato de freeCodeCamp. Luego haz clic en el botón `Get Message`. Tu función AJAX reemplazará el texto `The message will go here` con la salida JSON de la API.

# --hints--

Tu código debe crear un nuevo `XMLHttpRequest`.

```js
assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g));
```

Tu código debe utilizar el método `open` para inicializar una solicitud `GET` a la API de foto del gato de freeCodeCamp.

```js
assert(
  code.match(
    /\.open\(\s*?('|")GET\1\s*?,\s*?('|")\/json\/cats\.json\2\s*?,\s*?true\s*?\)/g
  )
);
```

Tu código debe utilizar el método `send` para enviar la solicitud.

```js
assert(code.match(/\.send\(\s*\)/g));
```

Tu código debe tener un manejador de eventos `onload` establecido a una función.

```js
assert(
  code.match(/\.onload\s*=\s*(function|\(\s*?\))\s*?(\(\s*?\)|\=\>)\s*?{/g)
);
```

Tu código debe utilizar el método `JSON.parse` para analizar el `responseText`.

```js
assert(code.match(/JSON\s*\.parse\(\s*.*\.responseText\s*\)/g));
```

Tu código debe obtener el elemento con id `message` y cambiar su HTML interno a la cadena de datos JSON.

```js
assert(
  code.match(
    /document\s*\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\s*\.innerHTML\s*?=\s*?JSON\.stringify\(.+?\)/g
  )
);
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
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
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open('GET', '/json/cats.json', true);
      req.send();
      req.onload = () => {
        const json = JSON.parse(req.responseText);
        document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
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
