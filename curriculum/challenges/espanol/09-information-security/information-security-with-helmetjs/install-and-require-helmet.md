---
id: 587d8247367417b2b2512c36
title: Instalar y Requerir Helmet
challengeType: 2
forumTopicId: 301581
dashedName: install-and-require-helmet
---

# --description--

Trabajar en estos desafíos implica escribir tu código usando uno de los siguientes métodos:

- Clona <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">este repositorio de GitHub </a> y completa esos retos localmente.
- Usa <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">nuestro proyecto de inicial Replit</a> para completar estos retos.
- Utilice un constructor de sitios de su elección para completar el proyecto. Asegúrese de incorporar todos los archivos de nuestro repositorio de GitHub.

Si usas Replit, sigue estos pasos para configurar el proyecto:

-   Empieza importando el proyecto en Replit.
-   Siguiente, tu verás una ventana `.replit`.
-   Selecciona `Use run command`y cliquea el botón `Done`.

Cuando esté hecho, asegurate que una demo de tu trabajo este hospedado en un sitio público. Then submit the URL to it in the Solution Link field.

Helmet ayuda asegurar tus aplicaciones Express apps configurando varios encabezados HTTP.

# --instructions--

Todo el código para estas lecciones va a ir en el archivo `myApp.js` entre las líneas de código que iniciamos para ti. No cambies o borres el código que agregamos para ti.

Helmet version `3.21.3` ha sido instalado, este requiere que `helmet` este en `myApp.js`.

# --hints--

`helmet` version `3.21.3` debería estar en `package.json`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      const packJson = JSON.parse(data);
      const helmet = packJson.dependencies.helmet;
      assert(helmet === '3.21.3' || helmet === '^3.21.3');
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
