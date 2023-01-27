---
id: 589a69f5f9fc0f352b528e71
title: Implementación de la autentificación social II
challengeType: 2
forumTopicId: 301557
dashedName: implementation-of-social-authentication-ii
---

# --description--

La última parte de configurar tu autentificación de GitHub es crear la propia estrategia. `passport-github@~1.1.0` ya ha sido añadido como dependencia, así que requiérelo en tu archivo `auth.js` como `GithubStrategy` así: `const GitHubStrategy = require('passport-github').Strategy;`. No olvides requerir y configurar `dotenv` para usar tus variables de entorno.

Para configurar la estrategia de GitHub, debes decirle a Passport que utilice una instancia de `GitHubStrategy`, que acepta 2 argumentos: un objeto (que contiene `clientID`, `clientSecret`, y `callbackURL`) y una función a ser llamada cuando un usuario es autentificado con éxito, que determinará si el usuario es nuevo y qué campos guardar inicialmente en el objeto de base de datos del usuario. Esto es común en muchas estrategias, pero algunas pueden requerir más información como se indica en el README de GitHub de esa estrategia específica. Por ejemplo, Google requiere un *ámbito* también que determina qué tipo de información está pidiendo que se le devuelva y pide al usuario que apruebe dicho acceso.

The current strategy you are implementing authenticates users using a GitHub account and OAuth 2.0 tokens. El ID de cliente y el secreto obtenidos al crear una aplicación se proporcionan como opciones al crear la estrategia. La estrategia también requiere un callback `verify`, que recibe el token de acceso y el token de actualización opcional, así como `profile` que contiene el perfil de GitHub del usuario autenticado. El callback `verify` debe llamar a `cb` que proporciona un usuario para completar la autenticación.

Así es como debe verse tu nueva estrategia en este punto:

```js
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: /*INSERT CALLBACK URL ENTERED INTO GITHUB HERE*/
},
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    //Database logic here with callback containing your user object
  }
));
```

¡Tu autenticación aún no será exitosa, y en realidad arrojará un error sin la lógica de la base de datos y el callback, pero debería registrar tu perfil de GitHub en tu consola si lo intentas!

Envía tu página cuando creas que la tienes correcta. If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#implementation-of-social-authentication-ii-4" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

se debe agregar la dependencia passport-github.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'passport-github',
    'Your project should list "passport-github" as a dependency'
  );
}
```

se debe requerir passport-github.

```js
async (getUserInput) => {
  const url = new URL("/_api/auth.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require.*("|')passport-github("|')/gi,
    'You should have required passport-github'
  );
}
```

La estrategia de GitHub debe estar configurada correctamente hasta ahora.

```js
async (getUserInput) => {
  const url = new URL("/_api/auth.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /passport\.use.*new GitHubStrategy/gis,
    'Passport should use a new GitHubStrategy'
  );
  assert.match(
    data,
    /callbackURL:\s*("|').*("|')/gi,
    'You should have a callbackURL'
  );
  assert.match(
    data,
    /process\.env(\.GITHUB_CLIENT_SECRET|\[(?<q>"|')GITHUB_CLIENT_SECRET\k<q>\])/g,
    'You should use process.env.GITHUB_CLIENT_SECRET'
  );
  assert.match(
    data,
    /process\.env(\.GITHUB_CLIENT_ID|\[(?<q>"|')GITHUB_CLIENT_ID\k<q>\])/g,
    'You should use process.env.GITHUB_CLIENT_ID'
  );
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
