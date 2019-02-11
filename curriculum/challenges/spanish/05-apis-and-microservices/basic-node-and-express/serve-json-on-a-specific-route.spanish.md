---
id: 587d7fb1367417b2b2512bf1
title: Serve JSON on a Specific Route
localeTitle: Servir JSON en una ruta específica
challengeType: 2
---

## Description
<section id='description'> 
Mientras que un servidor HTML sirve (¡lo has adivinado!) HTML, una API sirve datos. Una API <dfn>REST</dfn> (transferencia de estado representativa) permite el intercambio de datos de una manera sencilla, sin la necesidad de que los clientes conozcan ningún detalle sobre el servidor. El cliente solo necesita saber dónde está el recurso (la URL) y la acción que desea realizar en él (el verbo). El verbo GET se usa cuando estás obteniendo información, sin modificar nada. En estos días, el formato de datos preferido para mover información a través de la web es JSON. En pocas palabras, JSON es una forma conveniente de representar un objeto JavaScript como una cadena, por lo que se puede transmitir fácilmente. 
Vamos a crear una API simple creando una ruta que responda con JSON en la ruta <code>/json</code> . Puedes hacerlo como de costumbre, con el método <code>app.get()</code> . Dentro del controlador de ruta use el método <code>res.json()</code> , pasando un objeto como argumento. Este método cierra el bucle de solicitud-respuesta, devolviendo los datos. Detrás de escena, convierte un objeto JavaScript válido en una cadena, luego establece los encabezados adecuados para indicar a su navegador que está sirviendo JSON y le devuelve los datos. Un objeto válido tiene la estructura habitual <code>{key: data}</code> . Los datos pueden ser un número, una cadena, un objeto anidado o una matriz. Los datos también pueden ser una variable o el resultado de una llamada de función; en cuyo caso se evaluará antes de convertirse en una cadena. 
Servir el objeto <code>{"message": "Hello json"}</code> como respuesta en formato JSON, a las solicitudes GET a la ruta <code>/json</code> . Luego apunte su navegador a your-app-url / json, debería ver el mensaje en la pantalla. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'El punto final <code>/json</code> debe servir el objeto json <code>{"message": "Hello json"}</code> '
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/json'').then(data => { assert.equal(data.message, ''Hello json'', ''The \''/json\'' endpoint does not serve the right data''); }, xhr => { throw new Error(xhr.responseText); })'

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
