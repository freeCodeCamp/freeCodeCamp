---
id: 587d7fb0367417b2b2512bf0
title: Sirve recursos estáticos
challengeType: 2
forumTopicId: 301518
dashedName: serve-static-assets
---

# --description--

Un servidor HTML normalmente tiene uno o más directorios a los que el usuario puede acceder. Puedes colocar allí los recursos estáticos que necesite tu aplicación (hojas de estilo, scripts, imágenes).

En Express, puedes poner en marcha esta funcionalidad utilizando el middleware `express.static(path)`, donde el parámetro `path` es la ruta absoluta de la carpeta que contiene los recursos.

Si no sabes qué es middleware... no te preocupes, hablaremos en detalle más adelante. Básicamente, middleware son funciones que interceptan los manejadores de rutas, añadiendo algún tipo de información. Un middleware necesita ser montado usando el método `app.use(path, middlewareFunction)`. El primer argumento de `path` es opcional. Si no lo pasas, el middleware se ejecutará para todas las peticiones.

# --instructions--

Monta el middleware `express.static()` a la ruta `/public` con `app.use()`. La ruta absoluta a la carpeta de recursos es `__dirname + /public`.

Ahora tu aplicación debe ser capaz de servir una hoja de estilos CSS. Ten en cuenta que el archivo `/public/style.css` está referenciado en el archivo `/views/index.html` en el plantilla del proyecto. ¡Tu página principal debería verse un poco mejor ahora!

# --hints--

Tu aplicación debe servir archivos de recursos desde el directorio `/public` a la ruta `/public`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/style.css').then(
    (data) => {
      assert.match(
        data,
        /body\s*\{[^\}]*\}/,
        'Your app does not serve static assets'
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
