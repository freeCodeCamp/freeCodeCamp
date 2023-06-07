---
id: 587d7fb2367417b2b2512bf7
title: Usa body-parser para analizar las peticiones POST
challengeType: 2
forumTopicId: 301520
dashedName: use-body-parser-to-parse-post-requests
---

# --description--

Además de GET, hay otro verbo HTTP común, es POST. POST es el método por defecto utilizado para enviar datos del cliente con formularios HTML. En la convención REST, POST se utiliza para enviar datos para crear nuevos elementos en la base de datos (un nuevo usuario, o una nueva entrada de blog). No tienes una base de datos en este proyecto, pero de todos modos aprenderás a manejar las peticiones POST.

En este tipo de peticiones, los datos no aparecen en la URL, están ocultos en el cuerpo de la petición. El cuerpo es parte de la petición HTTP, también llamada la carga útil. Aunque los datos no son visibles en la URL, esto no significa que sean privados. Para ver por qué, mire el contenido bruto de una petición HTTP POST:

```http
POST /path/subpath HTTP/1.0
From: john@example.com
User-Agent: someBrowser/1.0
Content-Type: application/x-www-form-urlencoded
Content-Length: 20

name=John+Doe&age=25
```

Como puedes ver, el cuerpo está codificado como la cadena de consulta. Este es el formato por defecto utilizado por los formularios HTML. Con Ajax, también puedes utilizar JSON para manejar datos con una estructura más compleja. También hay otro tipo de codificación: multiparte/form-data. Este se utiliza para subir archivos binarios. En este ejercicio, usarás un cuerpo codificado por URL. Para analizar los datos provenientes de peticiones POST, tendrás que usar el paquete `body-parser`. Este paquete te permite usar una serie de middleware, que pueden decodificar datos en diferentes formatos.

# --instructions--

`body-parser` ya ha sido instalado y está en el archivo `package.json` de tu proyecto. Usa `require` en la parte superior del archivo `myApp.js` y almacena los resultados en una variable llamada `bodyParser`. El middleware para manejar datos codificados por URL es devuelto por `bodyParser.urlencoded({extended: false})`. Pasa la función devuelta por la llamada al método anterior a `app.use()`. Como de costumbre, el middleware debe ser montado antes de todas las rutas que dependen de él.

**Nota:** `extended` es una opción de configuración que le dice a `body-parser` qué análisis necesita ser usado. Cuando `extended=false`, utiliza la biblioteca `querystring` de codificación clásica. Cuando `extended=true` utiliza la biblioteca `qs` para analizar la sintaxis.

Cuando se utiliza `extended=false`, los valores sólo pueden ser cadenas o arreglos. El objeto devuelto al usar `querystring` no hereda de forma prototípica del `Object` de JavaScript por defecto, lo que significa que funciones como `hasOwnProperty`, `toString` no estarán disponibles. La versión "extended" permite más flexibilidad de datos, pero es superada por JSON.

# --hints--

El middleware 'body-parser' debe ser montado

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/add-body-parser').then(
    (data) => {
      assert.isAbove(
        data.mountedAt,
        0,
        '"body-parser" is not mounted correctly'
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
