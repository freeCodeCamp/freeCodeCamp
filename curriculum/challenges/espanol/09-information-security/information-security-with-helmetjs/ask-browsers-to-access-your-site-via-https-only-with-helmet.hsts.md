---
id: 587d8248367417b2b2512c3c
title: Pide a los navegadores que accedan a tu sitio a través de HTTPS sólo con helmet.hsts()
challengeType: 2
forumTopicId: 301573
dashedName: ask-browsers-to-access-your-site-via-https-only-with-helmet-hsts
---

# --description--

As a reminder, this project is being built upon the following starter project on <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

HTTP Strict Transport Security (HSTS) es una política de seguridad web que ayuda a proteger a los sitios web contra ataques de degradación de protocolo y secuestro de cookies. Si se puede acceder a tu sitio web a través de HTTPS, puedes pedirle a los navegadores de los usuarios que eviten el uso de HTTP inseguro. Al configurar el encabezado Strict-Transport-Security, le dices a los navegadores que usen HTTPS para las solicitudes futuras en un período de tiempo específico. Esto funcionará para las solicitudes que vengan después de la solicitud inicial.

# --instructions--

Configura `helmet.hsts()` para usar HTTPS durante los próximos 90 días. Pasa el objeto de configuración `{maxAge: timeInSeconds, force: true}`. Puedes crear una variable `ninetyDaysInSeconds = 90*24*60*60;` para usar con `timeInSeconds`. Replit ya tiene hsts habilitados. Para anular su configuración, debes establecer el campo "force" a true en el objeto config. Interceptaremos y restauraremos el encabezado Replit, después de inspeccionarlo para probarlo.

Note: Configuring HTTPS on a custom website requires the acquisition of a domain, and an SSL/TLS Certificate.

# --hints--

el middleware helmet.hsts() debe ser montado correctamente

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'hsts');
      assert.property(data.headers, 'strict-transport-security');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

maxAge debe ser igual a 7776000 s (90 días)

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.match(
        data.headers['strict-transport-security'],
        /^max-age=7776000;?/
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
