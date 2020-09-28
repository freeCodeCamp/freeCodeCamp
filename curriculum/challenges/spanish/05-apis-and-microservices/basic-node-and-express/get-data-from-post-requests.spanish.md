---
id: 587d7fb2367417b2b2512bf8
title: Get Data from POST Requests
localeTitle: Obtener datos de solicitudes POST
challengeType: 2
---

## Description
<section id='description'> 
Monta un controlador POST en la ruta <code>/name</code> . Es el mismo camino que antes. Hemos preparado un formulario en la portada html. Se enviarán los mismos datos del ejercicio 10 (cadena de consulta). Si el analizador de cuerpo está configurado correctamente, debería encontrar los parámetros en el objeto <code>req.body</code> . Echa un vistazo al ejemplo habitual de la biblioteca: 
<blockquote>route: POST '/library'<br>urlencoded_body: userId=546&bookId=6754 <br>req.body: {userId: '546', bookId: '6754'}</blockquote> 
Responda con el mismo objeto JSON que antes: <code>{name: 'firstname lastname'}</code> . Pruebe si su punto final funciona con el formulario html que proporcionamos en la página principal de la aplicación. 
Sugerencia: hay varios otros métodos http distintos de GET y POST. Y, por convención, hay una correspondencia entre el verbo http y la operación que se va a ejecutar en el servidor. La asignación convencional es: 
POST (a veces PUT): cree un nuevo recurso utilizando la información enviada con la solicitud, 
GET: lea un recurso existente sin modificarlo, 
PUT o PATCH (a veces POST): actualice un recurso utilizando los datos enviados, 
DELETE =&gt; Eliminar un recurso. 
También hay un par de otros métodos que se utilizan para negociar una conexión con el servidor. Excepto en GET, todos los otros métodos mencionados anteriormente pueden tener una carga útil (es decir, los datos en el cuerpo de la solicitud). El middleware body-parser también funciona con estos métodos. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Prueba 1: su punto final de API debe responder con el nombre correcto'
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/name'', {first: ''Mick'', last: ''Jagger''}).then(data => { assert.equal(data.name, ''Mick Jagger'', ''Test 1: "POST /name" route does not behave as expected'') }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'Prueba 2: su punto final de API debe responder con el nombre correcto'
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/name'', {first: ''Keith'', last: ''Richards''}).then(data => { assert.equal(data.name, ''Keith Richards'', ''Test 2: "POST /name" route does not behave as expected'') }, xhr => { throw new Error(xhr.responseText); })'

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
