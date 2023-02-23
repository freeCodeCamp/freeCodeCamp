---
id: 587d7fb0367417b2b2512bef
title: Sirve un archivo HTML
challengeType: 2
forumTopicId: 301516
dashedName: serve-an-html-file
---

# --description--

Puedes responder a peticiones con un archivo utilizando el método `res.sendFile(path)`. Puedes ponerlo dentro del gestor de rutas `app.get('/', ...)`. En segundo plano, este método establecerá las cabeceras apropiadas para indicar a tu navegador cómo manejar el archivo que se desea enviar, de acuerdo a su tipo. Entonces leerá y enviará el archivo. Este método necesita una ruta de archivo absoluta. Te recomendamos que uses la variable global de Node `__dirname` para calcular la ruta como esta:

```js
absolutePath = __dirname + '/relativePath/file.ext'
```

# --instructions--

Envía el archivo `/views/index.html` como respuesta a las solicitudes GET a la ruta `/`. Si ves tu aplicación en vivo, debes ver un gran encabezado HTML (y un formulario que usaremos más adelante…), sin ningún estilo aplicado.

**Nota:** Puedes editar la solución del desafío anterior o crear uno nuevo. Si creas una nueva solución, ten en cuenta que Express evalúa las rutas de arriba a abajo, y ejecuta el manejador para la primera coincidencia. Tienes que comentar la solución anterior, o el servidor seguirá respondiendo con una cadena.

# --hints--

Tu app debe servir el archivo views/index.html

```js
(getUserInput) =>
  $.get(getUserInput('url')).then(
    (data) => {
      assert.match(
        data,
        /<h1>.*<\/h1>/,
        'Your app does not serve the expected HTML'
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
