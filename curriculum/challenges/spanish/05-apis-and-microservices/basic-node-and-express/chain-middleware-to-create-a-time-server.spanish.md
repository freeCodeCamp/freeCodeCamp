---
id: 587d7fb1367417b2b2512bf4
title: Chain Middleware to Create a Time Server
localeTitle: Cadena de middleware para crear un servidor de tiempo
challengeType: 2
---

## Description
<section id='description'> 
Middleware puede montarse en una ruta específica usando <code>app.METHOD(path, middlewareFunction)</code> . Middleware también puede ser encadenado dentro de la definición de ruta. 
Mira el siguiente ejemplo: 
<blockquote>app.get('/user', function(req, res, next) {<br>  req.user = getTheUserSync();  // Hypothetical synchronous operation<br>  next();<br>}, function(req, res) {<br>  res.send(req.user);<br>})</blockquote> 
Este enfoque es útil para dividir las operaciones del servidor en unidades más pequeñas. Esto conduce a una mejor estructura de la aplicación y la posibilidad de reutilizar el código en diferentes lugares. Este enfoque también se puede utilizar para realizar una validación de los datos. En cada punto de la pila de middleware puede bloquear la ejecución de la cadena actual y pasar el control a funciones específicamente diseñadas para manejar errores. O puede pasar el control a la siguiente ruta coincidente, para manejar casos especiales. Veremos cómo en la sección avanzada de Express. 
En la ruta <code>app.get('/now', ...)</code> una función de middleware y el controlador final. En la función de middleware, debe agregar la hora actual al objeto de solicitud en la clave <code>req.time</code> . Puede usar la <code>new Date().toString()</code> . En el controlador, responda con un objeto JSON, tomando la estructura <code>{time: req.time}</code> . 
Sugerencia: la prueba no pasará si no encadena el middleware. Si monta la función en otro lugar, la prueba fallará, incluso si el resultado de salida es correcto. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El punto final / ahora debería tener middleware montado
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/chain-middleware-time'').then(data => { assert.equal(data.stackLength, 2, ''"/now" route has no mounted middleware''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: El punto final / now debería devolver un tiempo que es de +/- 20 segundos a partir de ahora
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/chain-middleware-time'').then(data => { var now = new Date(); assert.isAtMost(Math.abs(new Date(data.time) - now), 20000, ''the returned time is not between +- 20 secs from now''); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
