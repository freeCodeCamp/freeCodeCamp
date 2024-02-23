---
id: 587d7fb1367417b2b2512bf1
title: Sirve JSON en una ruta específica
challengeType: 2
forumTopicId: 301517
dashedName: serve-json-on-a-specific-route
---

# --description--

Mientras que un servidor HTML sirve HTML, una API sirve datos. Una API <dfn>REST</dfn> (REpresentational State Transfer) permite el intercambio de datos de una manera sencilla, sin necesidad de que los clientes conozcan ningún detalle sobre el servidor. El cliente sólo necesita saber dónde está el recurso (la URL), y la acción que quiere realizar en él (el verbo). El verbo GET se utiliza cuando se obtiene alguna información, sin modificar nada. En la actualidad, el formato de datos preferido para mover información por la web es JSON. En pocas palabras, JSON es una manera conveniente de representar un objeto JavaScript como una cadena de texto, por lo que puede ser fácilmente transmitido.

Vamos a crear una API simple creando una ruta que responda con JSON en la ruta `/json`. Puedes hacerlo como de costumbre, con el método `app.get()`. Dentro del manejador de ruta, utiliza el método `res.json()`, pasando un objeto como argumento. Este método cierra el bucle de solicitud y respuesta, devolviendo los datos. Tras bambalinas, convierte un objeto JavaScript en una cadena, luego establece las cabeceras apropiadas para decirle a tu navegador que está sirviendo JSON, y devuelve los datos. Un objeto válido tiene la estructura habitual `{key: data}`. `data` puede ser un número, una cadena de texto, un objeto anidado o un arreglo. `data` también puede ser una variable o el resultado de una llamada a una función, en cuyo caso será evaluado antes de ser convertido en una cadena de texto.

# --instructions--

Sirve el objeto `{"message": "Hello json"}` como respuesta, en formato JSON, a las solicitudes GET en la ruta `/json`. A continuación, apunta tu navegador a `your-app-url/json`, debes ver el mensaje en la pantalla.

# --hints--

El endpoint `/json` debe servir el objeto JSON `{"message": "Hello json"}`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/json').then(
    (data) => {
      assert.equal(
        data.message,
        'Hello json',
        "The '/json' endpoint does not serve the right data"
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
