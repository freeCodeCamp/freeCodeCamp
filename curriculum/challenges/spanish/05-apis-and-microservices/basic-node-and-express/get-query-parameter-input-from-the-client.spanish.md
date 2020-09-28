---
id: 587d7fb2367417b2b2512bf6
title: Get Query Parameter Input from the Client
localeTitle: Obtener entrada de parámetros de consulta del cliente
challengeType: 2
---

## Description
<section id='description'> 
Otra forma común de obtener información del cliente es codificando los datos después de la ruta, utilizando una cadena de consulta. La cadena de consulta está delimitada por un signo de interrogación (?) E incluye parejas field = value. Cada pareja está separada por un signo (&amp;). Express puede analizar los datos de la cadena de consulta y rellenar el objeto <code>req.query</code> . Algunos caracteres no pueden estar en las URL, tienen que estar codificados en un <a href='https://en.wikipedia.org/wiki/Percent-encoding' target='_blank'>formato diferente</a> antes de poder enviarlos. Si usa la API desde JavaScript, puede usar métodos específicos para codificar / decodificar estos caracteres. 
<blockquote>route_path: '/library'<br>actual_request_URL: '/library?userId=546&bookId=6754' <br>req.query: {userId: '546', bookId: '6754'}</blockquote> 
Construye un punto final de API, montado en <code>GET /name</code> . Responde con un documento JSON, tomando la estructura <code>{ name: 'firstname lastname'}</code> . Los parámetros de nombre y apellido deben estar codificados en una cadena de consulta, por ejemplo, <code>?first=firstname&amp;last=lastname</code> . 
CONSEJO: En el siguiente ejercicio vamos a recibir datos de una solicitud POST, en la misma ruta de ruta <code>/name</code> . Si lo desea, puede utilizar el método <code>app.route(path).get(handler).post(handler)</code> . Esta sintaxis le permite encadenar diferentes controladores de verbos en la misma ruta de ruta. Puede ahorrar un poco de escritura y tener un código más limpio. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Prueba 1: su punto final de API debe responder con el nombre correcto'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/name?first=Mick&last=Jagger'').then(data => { assert.equal(data.name, ''Mick Jagger'', ''Test 1: "GET /name" route does not behave as expected'') }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'Prueba 2: su punto final API debe responder con el nombre correcto'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/name?last=Richards&first=Keith'').then(data => { assert.equal(data.name, ''Keith Richards'', ''Test 2: "GET /name" route does not behave as expected'') }, xhr => { throw new Error(xhr.responseText); })'

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
