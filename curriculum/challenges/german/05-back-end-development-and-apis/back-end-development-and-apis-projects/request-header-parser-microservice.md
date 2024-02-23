---
id: bd7158d8c443edefaeb5bdff
title: Request-Header-Parser-Mikroservice
challengeType: 4
forumTopicId: 301507
dashedName: request-header-parser-microservice
---

# --description--

Erstelle eine vollständige JavaScript-Anwendung, die eine ähnliche Funktionalität wie <a href="https://request-header-parser-microservice.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://request-header-parser-microservice.freecodecamp.rocks/</a> aufweist. Bei der Arbeit an diesem Projekt musst du deinen Code mit einer der folgenden Methoden schreiben:

-   Klone <a href="https://github.com/freeCodeCamp/boilerplate-project-headerparser/" target="_blank" rel="noopener noreferrer nofollow">dieses GitHub Repo</a> und schließe dein Projekt lokal ab.
-   Use <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-project-headerparser/" target="_blank" rel="noopener noreferrer nofollow">our Gitpod starter project</a> to complete your project.
-   Verwende einen Site-Builder deiner Wahl, um das Projekt abzuschließen. Achte darauf, alle Dateien von unserem GitHub-Repo zu integrieren.

# --hints--

Du solltest dein eigenes Projekt angeben und nicht die Beispiel-URL.

```js
(getUserInput) => {
  assert(
    !/.*\/request-header-parser-microservice\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Eine Anfrage an `/api/whoami` sollte ein JSON-Objekt mit deiner IP-Adresse im `ipaddress`-Schlüssel zurückgeben.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/whoami').then(
    (data) => assert(data.ipaddress && data.ipaddress.length > 0),
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Eine Anfrage an `/api/whoami` sollte ein JSON-Objekt mit deiner bevorzugten Sprache im `language`-Schlüssel zurückgeben.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/whoami').then(
    (data) => assert(data.language && data.language.length > 0),
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Eine Anfrage an `/api/whoami` sollte ein JSON-Objekt mit deiner Software im `software`-Schlüssel zurückgeben.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/whoami').then(
    (data) => assert(data.software && data.software.length > 0),
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
