---
id: 587d7fb5367417b2b2512c02
title: Verwende das Tilde-Zeichen, um immer die neueste Patch-Version einer Abhängigkeit zu verwenden
challengeType: 2
forumTopicId: 301532
dashedName: use-the-tilde-character-to-always-use-the-latest-patch-version-of-a-dependency
---

# --description--

In der letzten Aufgabe hast du npm angewiesen, nur eine bestimmte Version eines Pakets einzufügen. Das ist eine nützliche Methode, um Abhängigkeiten einzufrieren, wenn du sicherstellen möchtest, dass verschiedene Teile deines Projekts miteinander kompatibel bleiben. In der Praxis solltest du jedoch keine Fehlerbehebungen übersehen, da sie oft wichtige Sicherheitspatches enthalten und somit (hoffentlich) nichts beschädigt wird.

Um eine npm-Abhängigkeit auf die neueste PATCH-Version zu aktualisieren, kannst du der Abhängigkeitsversion das Tilde-Zeichen (`~`) voranstellen. Hier ein Beispiel, wie man Aktualisierungen auf jede `1.3.x`-Version zulässt.

```json
"package": "~1.3.8"
```

# --instructions--

In the package.json file, your current rule for how npm may upgrade `@freecodecamp/example` is to use a specific version (`1.2.13`). But now, you want to allow the latest `1.2.x` version.

Verwende das (`~`) Tilde-Zeichen, um die Version von `@freecodecamp/example` in deinen Abhängigkeiten voranzustellen und erlaube npm auf jede neue _patch_ Version zu aktualisieren.

**Hinweis:** Die Versionsnummern selbst sollten nicht geändert werden.

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

`"@freecodecamp/example"` Version sollte `"~1.2.13"` entsprechen.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies["@freecodecamp/example"],
        /^\~1\.2\.13/,
        'Wrong version of "@freecodecamp/example". It should be ~1.2.13'
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
