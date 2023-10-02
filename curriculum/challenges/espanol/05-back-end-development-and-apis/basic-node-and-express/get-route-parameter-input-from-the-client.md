---
id: 587d7fb2367417b2b2512bf5
title: Obtén la entrada de parámetros de ruta del cliente
challengeType: 2
forumTopicId: 301513
dashedName: get-route-parameter-input-from-the-client
---

# --description--

Cuando construimos una API, tenemos que permitir que los usuarios nos comuniquen lo que quieren obtener de nuestro servicio. Por ejemplo, si el cliente solicita información sobre un usuario almacenado en la base de datos, necesitan una forma de hacernos saber en qué usuario están interesados. Una posible forma de lograr este resultado es utilizando parámetros de ruta. Los parámetros de ruta son segmentos con nombre de la URL, delimitados por barras (/). Cada segmento captura el valor de la parte de la URL que coincide con su posición. Los valores capturados pueden encontrarse en el objeto `req.params`.

<blockquote>route_path: '/user/:userId/book/:bookId'<br>actual_request_URL: '/user/546/book/6754' <br>req.params: {userId: '546', bookId: '6754'}</blockquote>

# --instructions--

Construye un servidor de eco, montado en la ruta `GET /:word/echo`. Responde con un documento JSON, tomando la estructura `{echo: word}`. Puedes encontrar la palabra que se repetirá en `req.params.word`. Puedes probar tu ruta desde la barra de direcciones de tu navegador, visitando algunas rutas coincidentes, por ejemplo, `your-app-rootpath/freecodecamp/echo`.

# --hints--

Prueba 1: Tu servidor de eco debe repetir las palabras correctamente

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/eChOtEsT/echo').then(
    (data) => {
      assert.equal(
        data.echo,
        'eChOtEsT',
        'Test 1: the echo server is not working as expected'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Prueba 2: Tu servidor de eco debe repetir las palabras correctamente

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/ech0-t3st/echo').then(
    (data) => {
      assert.equal(
        data.echo,
        'ech0-t3st',
        'Test 2: the echo server is not working as expected'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
