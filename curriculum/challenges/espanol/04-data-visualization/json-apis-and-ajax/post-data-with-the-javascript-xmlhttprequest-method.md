---
id: 587d7faf367417b2b2512be9
title: Envía datos con el metodo XMLHttpRequest de JavaScript
challengeType: 6
forumTopicId: 301504
dashedName: post-data-with-the-javascript-xmlhttprequest-method
---

# --description--

En los ejemplos anteriores, recibiste datos de un recurso externo. También puedes enviar datos a un recurso externo, siempre y cuando ese recurso sea compatible con solicitudes AJAX y conozca la URL.

El método `XMLHttpRequest` de JavaScript también se utiliza para enviar datos a un servidor. He aquí un ejemplo:

```js
const xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 201){
    const serverResponse = JSON.parse(xhr.response);
    document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
  }
};
const body = JSON.stringify({ userName: userName, suffix: ' loves cats!' });
xhr.send(body);
```

Ya has visto varios de estos métodos anteriormente. Aquí el método `open` inicializa la solicitud como un `POST` a la URL dada del recurso externo, y utiliza el `true` booleano para hacerlo asincrónico. El método `setRequestHeader` establece el valor de un encabezado de solicitud HTTP, que contiene información sobre el remitente y la solicitud. Debe ser llamado después del método `open`, pero antes del método `send`. Los dos parámetros son el nombre de encabezado y el valor a establecer como el cuerpo de ese encabezado. A continuación, el detector de eventos `onreadystatechange` maneja un cambio en el estado de la solicitud. Un `readyState` de `4` significa que la operación está completa, y un `status` de `201` significa que fue una solicitud exitosa. El HTML del documento puede ser actualizado. Finalmente, el método `send` envía la solicitud con el valor `body`. que la clave `userName` fue dada por el usuario en el campo `input`.

# --instructions--

Actualiza el código para que hagas una solicitud `POST` al endpoint de la API. Luego escribe tu nombre en el campo de entrada y haz clic en `Send Message`. Tu función AJAX debe reemplazar `Reply from Server will be here.` con los datos del servidor. Formatea la respuesta para mostrar tu nombre adjuntado con el texto `loves cats`.

# --hints--

Tu código debe crear un nuevo `XMLHttpRequest`.

```js
assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g));
```

Tu código debe utilizar el método `open` para inicializar una solicitud `POST` a la API de foto del gato de freeCodeCamp.

```js
assert(code.match(/\.open\(\s*?('|")POST\1\s*?,\s*?url\s*?,\s*?true\s*?\)/g));
```

Tu código debe utilizar el método `setRequestHeader`.

```js
assert(
  code.match(
    /\.setRequestHeader\(\s*?('|")Content-Type\1\s*?,\s*?('|")application\/json;\s*charset=UTF-8\2\s*?\)/g
  )
);
```

Tu código debe tener un manejador de eventos `onreadystatechange` establecido a una función.

```js
assert(code.match(/\.onreadystatechange\s*?=/g));
```

Tu código debe obtener el elemento con la clase `message` y cambiar su `textContent` a `userName loves cats`

```js
assert(
  code.match(
    /document\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\.textContent\s*?=\s*?.+?\.userName\s*?\+\s*?.+?\.suffix/g
  )
);
```

Tu código debe usar el método `send`.

```js
assert(code.match(/\.send\(\s*?body\s*?\)/g));
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sendMessage').onclick = function(){

      const userName = document.getElementById('name').value;
      const url = 'https://jsonplaceholder.typicode.com/posts';
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
<p class="message box">
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

# --solutions--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sendMessage').onclick = function(){

      const userName = document.getElementById('name').value;
      const url = 'https://jsonplaceholder.typicode.com/posts';
      // Add your code below this line
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 201){
          const serverResponse = JSON.parse(xhr.response);
          document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
       }
     };
     const body = JSON.stringify({ userName: userName, suffix: ' loves cats!' });
     xhr.send(body);
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
