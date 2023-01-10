---
id: 587d7fb3367417b2b2512bfc
title: Füge deiner package.json eine Beschreibung hinzu
challengeType: 2
forumTopicId: 301522
dashedName: add-a-description-to-your-package-json
---

# --description--

Der nächste Teil einer guten package.json-Datei ist das `description` Feld; hier sollte eine kurze, aber informative Beschreibung deines Projekts zu finden sein.

Solltest du eines Tages planen, ein Paket mit npm zu veröffentlichen, ist das der String, mit welchem du deine Idee dem Nutzer näherbringen solltest. Jedoch ist das nicht der einzige Verwendungszweck für die Beschreibung – dieses Feld ist ein toller Weg, um zusammenzufassen, worum es in dem Projekt geht. In jedem Node.js-Projekt ist es ebenso wichtig, anderen Entwicklern, zukünftigen Maintainern oder vielleicht sogar deinem zukünftigen Selbst dabei zu helfen, das Projekt schnell zu verstehen.

Unabhängig davon, was du für dein Projekt planst, wird eine Beschreibung auf jeden Fall empfohlen. Hier ist ein Beispiel:

```json
"description": "A project that does something awesome",
```

# --instructions--

Füge der package.json-Datei deines Projekts eine `description` hinzu.

**Hinweis:** Denke daran, doppelte Anführungszeichen für Feldnamen (") und Kommas (,) zu verwenden, um Felder zu trennen.

# --hints--

package.json sollte einen gültigen "description"-Schlüssel haben

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.description, '"description" is missing');
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
