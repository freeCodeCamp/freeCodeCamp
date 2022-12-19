---
id: 5ccfad82bb2dc6c965a848e5
title: Obtén JSON con el método fetch de JavaScript
challengeType: 6
forumTopicId: 301501
dashedName: get-json-with-the-javascript-fetch-method
---

# --description--

Otra manera de solicitar datos externos es utilizar el método `fetch()` de JavaScript. Es equivalente a `XMLHttpRequest`, pero la sintaxis se considera más fácil de entender.

Aquí está el código para hacer una solicitud GET a `/json/cats.json`

```js

fetch('/json/cats.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('message').innerHTML = JSON.stringify(data);
  })

```

Echa un vistazo a cada parte de este código.

En la primera línea es la que realiza la petición. Entonces, `fetch(URL)` realiza una petición `GET` a la URL especificada. Este método devuelve una Promesa.

Después de la devolución de la promesa, si la petición fue satisfactoria, se ejecuta el método `then`, el cual toma la respuesta y la convierte a formato JSON.

El método `then` también devuelve una promesa, la cual es manejada por el siguiente método `then`. ¡El argumento en el segundo `then` es el objeto JSON que estás buscando!

Ahora, selecciona el elemento que recibirá los datos usando `document.getElementById()`. Luego modifica el código HTML del elemento insertando una cadena creada a partir del objeto JSON devuelto de la solicitud.

# --instructions--

Actualiza el código para crear y enviar una solicitud `GET` a la API de foto del gato de freeCodeCamp. Pero esta vez, usando el método `fetch` en lugar de `XMLHttpRequest`.

# --hints--


Tu código debe usar los datos obtenidos para reemplazar el HTML interno

```js
const catData = "dummy data";
const ref = fetch;
fetch = () => Promise.resolve({ json: () => catData });
async () => {
  try {
    document.getElementById("getMessage").click();
    await new Promise((resolve, reject) => setTimeout(() => resolve(), 250));
  } catch (error) {
    console.log(error);
  } finally {
    fetch = ref;
    assert.equal(
      document.getElementById("message").textContent,
      JSON.stringify(catData)
    );
  }
};
```


Tu código debe hacer una solicitud `GET` con `fetch`.

```js
assert(code.match(/fetch\s*\(\s*('|")\/json\/cats\.json\1\s*\)/g));
```

Tu código debe usar `then` para convertir la respuesta a JSON.

```js
assert(
  code.match(
    /\.then\s*\(\s*\(?(?<var>\w+)\)?\s*=>\s*\k<var>\s*\.json\s*\(\s*\)\s*\)/g
  )
);
```

Tu código debe usar `then` para manejar los datos convertidos a JSON por el otro `then`.

```js
assert(__helpers.removeWhiteSpace(code).match(/\.then\(\(?\w+\)?=>{[^}]*}\)/g));
```

Tu código debe obtener el elemento con el id `message` y cambiar su HTML interno a la cadena de datos JSON.

```js
assert(
  __helpers.removeWhiteSpace(code).match(
    /document\.getElementById\(('|")message\1\)\.innerHTML=JSON\.stringify\(?\w+\)/g
  )
);
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick= () => {
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
<p id="message" class="box">
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
    document.getElementById('getMessage').onclick= () => {
      fetch('/json/cats.json')
        .then(response => response.json())
        .then(data => {
          document.getElementById('message').innerHTML=JSON.stringify(data);
        })
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
<p id="message" class="box">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>
```
