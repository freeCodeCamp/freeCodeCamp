---
id: 587d7fb4367417b2b2512bfe
title: Füge deiner package.json eine Lizenz hinzu
challengeType: 2
forumTopicId: 301523
dashedName: add-a-license-to-your-package-json
---

# --description--

Im Feld `license` teilst du den Nutzern mit, was sie mit deinem Projekt machen dürfen.

Einige gängige Lizenzen für Open-Source-Projekte sind MIT und BSD. Lizenzinformation ist nicht erforderlich, und die Urheberrechtsgesetze der meisten Länder geben dir standardmäßig Eigentumsrechte an deiner Kreation. Es ist jedoch ein bewährtes Verfahren, ausdrücklich anzugeben, was Nutzer machen dürfen und was nicht. Hier ist ein Beispiel für das Lizenzfeld:

```json
"license": "MIT",
```

# --instructions--

Fülle das `license`-Feld in der package.json-Datei deines Projekts so aus, wie du das für notwendig hältst.

# --hints--

package.json sollte einen gültigen "license"-Schlüssel haben

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.license, '"license" is missing');
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
