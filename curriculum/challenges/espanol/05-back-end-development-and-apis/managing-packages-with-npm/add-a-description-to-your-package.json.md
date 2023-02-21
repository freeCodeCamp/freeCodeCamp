---
id: 587d7fb3367417b2b2512bfc
title: Agrega una descripción a tu package.json
challengeType: 2
forumTopicId: 301522
dashedName: add-a-description-to-your-package-json
---

# --description--

La siguiente parte de un buen archivo package.json es el campo `description`; donde pertenece una descripción corta, pero informativa de tu proyecto.

Si algún día planeas publicar un paquete en npm, esta es la cadena que debe vender tu idea al usuario cuando decida si instalar tu paquete o no. Sin embargo, ese no es el único caso de uso para la descripción, es una buena manera de resumir lo que hace un proyecto. Es igual de importante en cualquier proyecto Node.js para ayudar a otros desarrolladores, futuros mantenedores o incluso a tu yo del futuro a entender el proyecto rápidamente.

Independientemente de lo que planees para tu proyecto, definitivamente se recomienda una descripción. He aquí un ejemplo:

```json
"description": "A project that does something awesome",
```

# --instructions--

Añade una `description` al archivo package.json de tu proyecto.

**Nota:** Recuerda usar comillas dobles para nombres de campos (") y comas (,) para separar campos.

# --hints--

el archivo package.json debe tener una clave de "description" válida

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.description, '"description" is missing');
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
