---
id: 587d7fb2367417b2b2512bf5
title: Get Route Parameter Input from the Client
localeTitle: Obtener entrada de parámetros de ruta del cliente
challengeType: 2
---

## Description
<section id='description'> 
Al crear una API, debemos permitir que los usuarios nos comuniquen lo que desean obtener de nuestro servicio. Por ejemplo, si el cliente solicita información sobre un usuario almacenado en la base de datos, necesita una manera de informarnos en qué usuario está interesado. Una posible forma de lograr este resultado es mediante el uso de parámetros de ruta. Los parámetros de ruta se denominan segmentos de la URL, delimitados por barras inclinadas (/). Cada segmento captura el valor de la parte de la URL que coincide con su posición. Los valores capturados se pueden encontrar en el objeto <code>req.params</code> . 
<blockquote>route_path: '/user/:userId/book/:bookId'<br>actual_request_URL: '/user/546/book/6754' <br>req.params: {userId: '546', bookId: '6754'}</blockquote> 
Construya un servidor de eco, montado en la ruta <code>GET /:word/echo</code> . Responda con un objeto JSON, tomando la estructura <code>{echo: word}</code> . Puede encontrar la palabra que debe repetirse en <code>req.params.word</code> . Puede probar su ruta desde la barra de direcciones de su navegador, visitando algunas rutas coincidentes, por ejemplo, su-app-rootpath / freecodecamp / echo 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Prueba 1: su servidor de eco debe repetir palabras correctamente'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/eChOtEsT/echo'').then(data => { assert.equal(data.echo, ''eChOtEsT'', ''Test 1: the echo server is not working as expected'') }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'Prueba 2: su servidor de eco debe repetir palabras correctamente'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/ech0-t3st/echo'').then(data => { assert.equal(data.echo, ''ech0-t3st'', ''Test 2: the echo server is not working as expected'') }, xhr => { throw new Error(xhr.responseText); })'

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
