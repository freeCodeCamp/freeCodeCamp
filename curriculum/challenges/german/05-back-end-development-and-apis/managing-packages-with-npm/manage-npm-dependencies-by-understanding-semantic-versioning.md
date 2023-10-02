---
id: 587d7fb5367417b2b2512c01
title: Verwalte npm-Abhängigkeiten durch das Verstehen semantischer Versionierung
challengeType: 2
forumTopicId: 301529
dashedName: manage-npm-dependencies-by-understanding-semantic-versioning
---

# --description--

`Versions` der npm-Pakete im Abschnitt "dependencies" (Abhängigkeiten) deiner package.json-Datei folgen dem sogenannten Semantic Versioning (SemVer), einem Industriestandard für Software Versioning, der die Verwaltung von Abhängigkeiten erleichtern soll. Bibliotheken, Frameworks oder andere Tools, die auf npm veröffentlicht werden, sollten SemVer verwenden, um klar zu kommunizieren, welche Art von Änderungen Projekte erwarten können, wenn sie aktualisiert werden.

Die Kenntnis von SemVer kann nützlich sein, wenn du eine Software entwickelst, die externe Abhängigkeiten nutzt (was du fast immer tust). Eines Tages wird dein Verständnis dieser Zahlen dich davor bewahren, versehentlich Änderungen an deinem Projekt vorzunehmen, ohne zu verstehen, warum Dinge, die gestern noch funktionierten, heute plötzlich nicht mehr funktionieren. So funktioniert Semantic Versioning laut der offiziellen Website:

```json
"package": "MAJOR.MINOR.PATCH"
```

Die MAJOR-Version sollte erhöht werden, wenn du inkompatible API-Änderungen vornimmst. Die MINOR-Version sollte erhöht werden, wenn du eine Funktionalität auf eine rückwärtskompatible Weise hinzufügst. Die PATCH-Version sollte erhöht werden, wenn du rückwärtskompatible Fehlerkorrekturen vornimmst. Das bedeutet, dass PATCHes Fehlerkorrekturen sind und MINORs neue Funktionen hinzufügen, aber keine der beiden Programme beschädigt etwas was vorher funktionierte. Schließlich fügen MAJORs Änderungen hinzu, die mit früheren Versionen nicht funktionieren.

# --instructions--

Ändere im Abschnitt "dependencies" (Abhängigkeiten) deiner `package.json`-Datei die Version von `@freecodecamp/example`, sodass sie sich an MAJOR Version 1, MINOR Version 2 und PATCH Version 13 anpasst

# --hints--

`"dependencies"` sollte `"@freecodecamp/example"` enthalten.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        '@freecodecamp/example',
        '"dependencies" does not include "@freecodecamp/example"'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Die `"@freecodecamp/example"`-Version sollte `"1.2.13"` sein.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.equal(
        packJson.dependencies["@freecodecamp/example"],
        '1.2.13',
        'Wrong version of "@freecodecamp/example". It should be 1.2.13'
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
