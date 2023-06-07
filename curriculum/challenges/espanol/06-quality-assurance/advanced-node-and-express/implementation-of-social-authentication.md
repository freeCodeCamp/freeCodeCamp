---
id: 589a69f5f9fc0f352b528e70
title: Implementación de la autentificación social
challengeType: 2
forumTopicId: 301559
dashedName: implementation-of-social-authentication
---

# --description--

La ruta básica que seguirá este tipo de autenticación en tu aplicación es:

1.  El usuario hace clic en un botón o enlace que le envía a tu ruta para autenticarte utilizando una estrategia específica (por ejemplo, GitHub).
2.  Tu ruta llama a `passport.authenticate('github')` que los redirige a GitHub.
3.  La página en la que aterriza el usuario, en GitHub, le permite iniciar sesión si aún no lo ha hecho. A continuación, les pides que aprueben el acceso a su perfil desde tu aplicación.
4.  A continuación, el usuario es devuelto a tu aplicación en una url callback específica con su perfil si es aprobado.
5.  Ahora están autentificados, y tu aplicación debe comprobar si es un perfil que vuelve, o guardarlo en tu base de datos si no lo es.

Las estrategias con OAuth requieren que tengas al menos un *Client ID* y un *Client Secret* que es una forma de que el servicio verifique de quién viene la solicitud de autentificación y si es válida. Estos se obtienen del sitio con el que intentas implementar la autentificación, como GitHub, y son únicos para tu aplicación: **NO SE DEBEN COMPARTIR** y nunca deben subirse a un repositorio público ni escribirse directamente en tu código. Una práctica común es ponerlos en tu archivo `.env` y referenciarlos así: `process.env.GITHUB_CLIENT_ID`. Para este reto vas a utilizar la estrategia de GitHub.

Sigue <a href="https://www.freecodecamp.org/news/how-to-set-up-a-github-oauth-application/" target="_blank" rel="noopener noreferrer nofollow">estas instrucciones</a> para obtener tu *ID de cliente y secreto* de GitHub. Establece la URL de la página de inicio en tu página de inicio de Replit (**no la URL del código del proyecto**), y establece la URL callback en la misma URL de la página de inicio con `/auth/github/callback` añadido al final. Guarda el ID de cliente y tu secreto de cliente en el archivo `.env` de tu proyecto como `GITHUB_CLIENT_ID` y `GITHUB_CLIENT_SECRET`.

En el archivo `routes.js`, añade `showSocialAuth: true` a la ruta de la página de inicio, después de `showRegistration: true`. Ahora, crea 2 rutas que acepten peticiones GET: `/auth/github` y `/auth/github/callback`. El primero sólo debe llamar a passport para autenticar `'github'`. El segundo debe llamar a passport para autenticar `'github'` con una redirección de fallo a `/`, y luego si eso tiene éxito redirigir a `/profile` (similar a tu último proyecto).

Un ejemplo de cómo debe verse `/auth/github/callback` es similar a cómo manejas un inicio de sesión normal:

```js
app.route('/login')
  .post(passport.authenticate('local', { failureRedirect: '/' }), (req,res) => {
    res.redirect('/profile');
  });
```

Envía tu página cuando creas que lo ha hecho bien. Si te encuentras con errores, puedes <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#implementation-of-social-authentication-3" target="_blank" rel="noopener noreferrer nofollow">comprobar el proyecto hasta este punto</a>.

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
