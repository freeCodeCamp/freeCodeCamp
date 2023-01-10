---
id: 587d7fb1367417b2b2512bf2
title: Usa el archivo .env
challengeType: 2
forumTopicId: 301521
dashedName: use-the--env-file
---

# --description--

El archivo `.env` es un archivo oculto que se utiliza para pasar variables de entorno a la aplicación. Este archivo es secreto, solamente tú puedes acceder a él, y puede ser utilizado para almacenar datos que desees mantener privados u ocultos. Por ejemplo, puedes almacenar claves de APIs de servicios externos o la URI de tu base de datos. También puedes usarlo para guardar opciones de configuración. Modificando las opciones de configuración, puedes cambiar el comportamiento de tu aplicación, sin necesidad de reescribir código.

Las variables de entorno son accesibles desde la aplicación como `process.env.VAR_NAME`. El objeto `process.env` es un objeto global de Node, y las variables son pasadas como cadenas de texto. Por convención, los nombres de las variables son en letras mayúsculas, con las palabras separadas por guión bajo. El archivo `.env` es un archivo shell, por lo que no es necesario incluir los nombres o valores entre comillas. También es importante tener en cuenta que no pueden haber espacios alrededor del signo de igual cuando se asignan valores a las variables, por ejemplo: `VAR_NAME=value`. Normalmente, usted pondrá cada definición de variable en una línea separada.

# --instructions--

Añadamos una variable de entorno como opción de configuración.

Crea un archivo `.env` en la raíz del directorio de tu proyecto y almacena la variable `MESSAGE_STYLE=uppercase` en él.

Luego, en el manejador `/json` GET route que creaste en el último ejercicio accede a `process.env.MESSAGE_STYLE` y transformar el `message` del objeto de respuesta a mayúsculas si la variable es igual a `uppercase`. El objeto de respuesta debe ser `{"message": "Hello json"}` o `{"message": "HELLO JSON"}`, dependiendo del valor `MESSAGE_STYLE`. Ten en cuenta que debes leer el valor de `process.env.MESSAGE_STYLE` **dentro de** el manejador de rutas, no fuera de él, debido a la forma en que se ejecutan nuestras pruebas.

**Nota:** Si estás usando Replit, no puedes crear un archivo `.env`. En su lugar, utiliza la pestaña integrada <dfn>SECRETS</dfn> para añadir la variable.

Si estás trabajando localmente, necesitarás el paquete `dotenv`. Carga variables de entorno desde tu archivo `.env` en `process.env`. El paquete `dotenv` se a instalado, y se aguardado en tu archivo `package.json` dentro del proyecto. En la parte superior de tu archivo `myApp.js`, agrega `require('dotenv').config()` para cargar las variables de entorno.

# --hints--

La respuesta del endpoint `/json` debe cambiar de acuerdo a la variable de entorno `MESSAGE_STYLE`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/use-env-vars').then(
    (data) => {
      assert.isTrue(
        data.passed,
        'The response of "/json" does not change according to MESSAGE_STYLE'
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
