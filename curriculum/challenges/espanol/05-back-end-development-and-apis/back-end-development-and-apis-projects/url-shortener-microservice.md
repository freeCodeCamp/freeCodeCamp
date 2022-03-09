---
id: bd7158d8c443edefaeb5bd0e
title: Microservicio acortador de URL
challengeType: 4
forumTopicId: 301509
dashedName: url-shortener-microservice
---

# --description--

Construye una aplicación full stack de JavaScript que sea funcionalmente similar a esta: <https://url-shortener-microservice.freecodecamp.rocks/>. Trabajar en este proyecto implicará escribir tu código utilizando uno de los siguientes métodos:

-   Clona [este repositorio de GitHub](https://github.com/freeCodeCamp/boilerplate-project-urlshortener/) y completa tu proyecto localmente.
-   Usa [nuestro proyecto de inicio en Replit](https://replit.com/github/freeCodeCamp/boilerplate-project-urlshortener) para completar tu proyecto.
-   Utiliza un constructor de sitios de tu elección para completar el proyecto. Asegúrate de incorporar todos los archivos de nuestro repositorio de GitHub.

Cuando hayas terminado, asegúrate de que un demo funcional de tu proyecto esté alojado en algún lugar público. Luego, envía la URL en el campo `Solution Link`. Opcionalmente, también envía un enlace al código fuente de tu proyecto en el campo `GitHub Link`.

# --instructions--

**NOTA:** No olvides usar un middleware para manejar las peticiones POST. También, puedes usar la función `dns.lookup(host, cb)` desde el módulo principal `dns` para verificar una URL enviada.

# --hints--

Debes proporcionar tu propio proyecto, no la URL de ejemplo.

```js
(getUserInput) => {
  assert(
    !/.*\/url-shortener-microservice\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Puedes publicar una URL en `/api/shorturl` y obtener una respuesta JSON con las propiedades `original_url` y `short_url`. Aquí hay un ejemplo: `{ original_url : 'https://freeCodeCamp.org', short_url : 1}`

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const urlVariable = Date.now();
  const fullUrl = `${url}/?v=${urlVariable}`
  const res = await fetch(url + '/api/shorturl', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `url=${fullUrl}`
  });
  if (res.ok) {
    const { short_url, original_url } = await res.json();
    assert.isNotNull(short_url);
    assert.strictEqual(original_url, `${url}/?v=${urlVariable}`);
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

Cuando visitas `/api/shorturl/<short_url>`, serás redirigido a la URL original.

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const urlVariable = Date.now();
  const fullUrl = `${url}/?v=${urlVariable}`
  let shortenedUrlVariable;
  const postResponse = await fetch(url + '/api/shorturl', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `url=${fullUrl}`
  });
  if (postResponse.ok) {
    const { short_url } = await postResponse.json();
    shortenedUrlVariable = short_url;
  } else {
    throw new Error(`${postResponse.status} ${postResponse.statusText}`);
  }
  const getResponse = await fetch(
    url + '/api/shorturl/' + shortenedUrlVariable
  );
  if (getResponse) {
    const { redirected, url } = getResponse;
    assert.isTrue(redirected);
    assert.strictEqual(url,fullUrl);
  } else {
    throw new Error(`${getResponse.status} ${getResponse.statusText}`);
  }
};
```

Si pasas una URL inválida que no sigue el formato válido `http://www.example.com` , la respuesta JSON contendrá `{ error: 'invalid url' }`

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/shorturl', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `url=ftp:/john-doe.invalidTLD`
  });
  if (res.ok) {
    const { error } = await res.json();
    assert.isNotNull(error);
    assert.strictEqual(error.toLowerCase(), 'invalid url');
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
