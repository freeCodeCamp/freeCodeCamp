---
id: 587d7fb5367417b2b2512c04
title: Entferne ein Paket aus deinen Abhängigkeiten
challengeType: 2
forumTopicId: 301530
dashedName: remove-a-package-from-your-dependencies
---

# --description--

Du hast nun einige Möglichkeiten ausprobiert, wie du Abhängigkeiten deines Projekts mithilfe des Abschnitts "dependencies" in der package.json verwalten kannst. Du hast auch externe Pakete eingebunden, indem du sie der Datei zugefügt und npm sogar mitgeteilt hast, welche Arten von Versionen du haben möchtest, indem du Sonderzeichen wie die Tilde oder das Caret verwendet hast.

Aber was passiert, wenn du ein externes Paket entfernen möchtest, das du nicht länger benötigst? Du hast es vielleicht schon erraten, entferne einfach das entsprechende Schlüssel-Wert-Paar (key-value pair) für dieses Paket aus deinen Abhängigkeiten (dependencies).

Dieselbe Methode gilt auch für das Entfernen anderer Felder in deiner package.json.

# --instructions--

Entferne das `@freecodecamp/example`-Paket aus deinen "dependencies" (Abhängigkeiten).

**Hinweis:** Stelle sicher, dass du die richtige Menge an Kommas verwendest, nachdem du das Paket entfernt hast.

# --hints--

`"dependencies"` sollte nicht `"@freecodecamp/example"` enthalten.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.notProperty(
        packJson.dependencies,
        '@freecodecamp/example',
        '"dependencies" still includes "@freecodecamp/example"'
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
