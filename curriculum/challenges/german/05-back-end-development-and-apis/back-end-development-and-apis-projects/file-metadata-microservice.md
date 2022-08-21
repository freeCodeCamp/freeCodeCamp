---
id: bd7158d8c443edefaeb5bd0f
title: Datei-Metadaten-Microservice
challengeType: 4
forumTopicId: 301506
dashedName: file-metadata-microservice
---

# --description--

Erstelle eine vollständige JavaScript-Anwendung, die eine ähnliche Funktionalität wie <a href="https://file-metadata-microservice.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://file-metadata-microservice.freecodecamp.rocks</a> aufweist. Bei der Arbeit an diesem Projekt musst du deinen Code mit einer der folgenden Methoden schreiben:

-   Klone <a href="https://github.com/freeCodeCamp/boilerplate-project-filemetadata/" target="_blank" rel="noopener noreferrer nofollow">dieses GitHub Repo</a> und schließe dein Projekt lokal ab.
-   Benutze <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-filemetadata" target="_blank" rel="noopener noreferrer nofollow">unser Replit Starter Projekt</a>, um dein Projekt fertigzustellen.
-   Verwende einen Site-Builder deiner Wahl, um das Projekt fertigzustellen. Achte darauf, alle Dateien aus unserem GitHub Repo zu integrieren.

Wenn du fertig bist, stelle sicher, dass dein Projekt öffentlich zugänglich gehostet ist. Gib dann die URL in das `Solution Link`-Feld ein. Füge optional einen Link zum Quellcode deines Projekts in das `GitHub Link`-Feld ein.

# --instructions--

**HINWEIS:** Du kannst das `multer` npm-Paket verwenden, um das Hochladen von Dateien zu verwalten.

# --hints--

Du solltest dein eigenes Projekt angeben und nicht die Beispiel-URL.

```js
(getUserInput) => {
  assert(
    !/.*\/file-metadata-microservice\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Du kannst ein Formular übermitteln, das einen Datei-Upload beinhaltet.

```js
async (getUserInput) => {
  const site = await fetch(getUserInput('url'));
  const data = await site.text();
  const doc = new DOMParser().parseFromString(data, 'text/html');
  assert(doc.querySelector('input[type="file"]'));
};
```

Im Eingabefeld für die Formulardatei ist das `name` Attribut auf `upfile` gesetzt.

```js
async (getUserInput) => {
  const site = await fetch(getUserInput('url'));
  const data = await site.text();
  const doc = new DOMParser().parseFromString(data, 'text/html');
  assert(doc.querySelector('input[name="upfile"]'));
};
```

Wen du eine Datei übermittelst, empfängst du die Datei `name`, `type`, und `size` in Bytes innerhalb der JSON Antwort.

```js
async (getUserInput) => {
  const formData = new FormData();
  const fileData = await fetch(
    'https://cdn.freecodecamp.org/weather-icons/01d.png'
  );
  const file = await fileData.blob();
  formData.append('upfile', file, 'icon');
  const data = await fetch(getUserInput('url') + '/api/fileanalyse', {
    method: 'POST',
    body: formData
  });
  const parsed = await data.json();
  assert.property(parsed, 'size');
  assert.equal(parsed.name, 'icon');
  assert.equal(parsed.type, 'image/png');
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
