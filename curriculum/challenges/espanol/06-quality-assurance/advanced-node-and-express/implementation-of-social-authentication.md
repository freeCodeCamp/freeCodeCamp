---
id: 589a69f5f9fc0f352b528e70
title: Implementación de la autentificación social
challengeType: 2
forumTopicId: 301559
dashedName: implementation-of-social-authentication
---

# --description--

La ruta básica que seguirá este tipo de autenticación en tu aplicación es:

1.  El usuario hace clic en un botón o enlace enviándolos a nuestra ruta para autentificarse utilizando una estrategia específica (por ejemplo, GitHub).
2.  Tu ruta llama a `passport.authenticate('github')` que los redirige a GitHub.
3.  La página en la que aterriza el usuario, en GitHub, le permite iniciar sesión si aún no lo ha hecho. Luego les pide que aprueben el acceso a su perfil desde nuestra aplicación.
4.  El usuario es devuelto a nuestra aplicación en una callback url específica con su perfil si es aprobado.
5.  Ahora están autentificados, y tu aplicación debe comprobar si es un perfil que vuelve, o guardarlo en tu base de datos si no lo es.

Las estrategias con OAuth requieren que tengas al menos un *Client ID* y un *Client Secret* que es una forma de que el servicio verifique de quién viene la solicitud de autentificación y si es válida. Estos se obtienen del sitio con el que intentas implementar la autentificación, como GitHub, y son únicos para tu aplicación: **NO SE DEBEN COMPARTIR** y nunca deben subirse a un repositorio público ni escribirse directamente en tu código. Una práctica común es ponerlos en tu archivo `.env` y referenciarlos así: `process.env.GITHUB_CLIENT_ID`. Para este desafío vamos a usar la estrategia de GitHub.

El obtener tu *Client ID and Secret* de GitHub se realiza en la configuración del perfil de tu cuenta, en 'developer settings', y luego en '<a href="https://github.com/settings/developers" target="_blank" rel="noopener noreferrer nofollow">OAuth applications</a>. Haz clic en 'Register a new application', dale un nombre a tu aplicación, pega la url de tu página de inicio de Replit (**No la url del código del proyecto**), y por último, para la url de callback, pega la misma url de la página de inicio pero con `/auth/github/callback` añadido. Aquí es donde los usuarios serán redirigidos para que los manejemos después de autentificarse en GitHub. Guarda la información devuelta como `'GITHUB_CLIENT_ID'` y `'GITHUB_CLIENT_SECRET'` en tu archivo `.env`.

En tu archivo `routes.js`, agrega `showSocialAuth: true` a la ruta de la página de inicio, después de `showRegistration: true`. Ahora, crea 2 rutas aceptando peticiones GET: `/auth/github` y `/auth/github/callback`. La primera solo debe llamar al passport para autentificar `'github'`. El segundo debe llamar a passport para autentificar `'github'` con una redirección de fallo a `/`, y luego si eso es exitoso redirigir a `/profile` (similar a nuestro último proyecto).

Un ejemplo de cómo debe ser `/auth/github/callback` es similar a cómo manejamos un inicio de sesión normal:

```js
app.route('/login')
  .post(passport.authenticate('local', { failureRedirect: '/' }), (req,res) => {
    res.redirect('/profile');
  });
```

Envía tu página cuando creas que lo has hecho bien. Si te encuentras con errores, puedes revisar el proyecto completado hasta este punto <a href="https://gist.github.com/camperbot/1f7f6f76adb178680246989612bea21e" target="_blank" rel="noopener noreferrer nofollow">aquí</a>.

# --hints--

La ruta `/auth/github` debe ser correcta.

```js
async (getUserInput) => {
  try {
    const res = await fetch(getUserInput('url') + '/_api/routes.js');
    if (res.ok) {
      const data = await res.text();
      assert.match(
          data.replace(/\s/g, ''),
          /passport.authenticate.*?github/g,
          'Route auth/github should only call passport.authenticate with github'
        );
    } else {
      throw new Error(res.statusText);
    }
    const res2 = await fetch(getUserInput('url') + '/_api/app-stack');
    if (res2.ok) {
      const data2 = JSON.parse(await res2.json());
      const dataLayer = data2.find(layer => layer?.route?.path === '/auth/github');
      assert.deepInclude(dataLayer?.route, { methods: {get: true}, path: "/auth/github"});
      assert.deepInclude(dataLayer?.route?.stack?.[0], {method: "get", name: "authenticate"});
    } else {
      throw new Error(res2.statusText);
    }
  } catch (err) {
    throw new Error(err);
  }
}
```

La ruta `/auth/github/callback` debe ser correcta.

```js
async (getUserInput) => {
  try {
    const res = await fetch(getUserInput('url') + '/_api/routes.js');
    if (res.ok) {
      const data = await res.text();
      assert.match(
        data.replace(/\s/g, ''),
        /failureRedirect:("|')\/\1/g,
        'Route auth/github/callback should accept a get request and call passport.authenticate for github with a failure redirect to home'
      );
    } else {
      throw new Error(res.statusText);
    }
    const res2 = await fetch(getUserInput('url') + '/_api/app-stack');
    if (res2.ok) {
      const data2 = JSON.parse(await res2.json());
      const dataLayer = data2.find(layer => layer?.route?.path === '/auth/github/callback');
      assert.deepInclude(dataLayer?.route, { methods: {get: true}, path: "/auth/github/callback"});
      assert.deepInclude(dataLayer?.route?.stack?.[0], {method: "get", name: "authenticate"});
    } else {
      throw new Error(res2.statusText);
    }
  } catch (err) {
    throw new Error(err);
  }
}
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
