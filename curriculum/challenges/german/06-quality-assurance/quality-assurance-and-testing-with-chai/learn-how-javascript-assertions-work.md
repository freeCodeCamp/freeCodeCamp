---
id: 587d824a367417b2b2512c46
title: Lerne, wie JavaScript Assertions funktionieren
challengeType: 2
forumTopicId: 301589
dashedName: learn-how-javascript-assertions-work
---

# --description--

Bei der Arbeit an diesen Aufgaben wirst du deinen Code mithilfe folgender Methoden schreiben:

- Klone <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">diese GitHub-Repo</a> und schließe dein Projekt lokal ab.
- Verwende <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">unser Replit Starterprojekt</a> um diese Aufgaben fertigzustellen.
- Verwende einen Site-Builder deiner Wahl, um das Projekt abzuschließen. Achte darauf, alle Dateien von unserem GitHub-Repo zu integrieren.

Wenn du Replit verwendest, folge diesen Schritten, um das Projekt einzurichten:

-   Beginne mit dem Importieren des Projekts in Replit.
-   Daraufhin wird ein `.replit`-Fenster angezeigt.
-   Wähle `Use run command` und klicke auf die `Done` Schaltfläche.

Wenn du fertig bist, stelle sicher, dass eine funktionierende Demo deines Projekts irgendwo öffentlich gehostet wird. Gib anschließend die URL in das Solution Link-Feld ein.

# --instructions--

Ändere innerhalb `tests/1_unit-tests.js` unter dem Test mit dem Label `#1` in der `Basic Assertions`-Suite jeden `assert` zu entweder `assert.isNull` oder `assert.isNotNull`, um den Test zu bestehen (sollte `true` ausgeben). Die an die Asserts übergebenen Argumente dürfen nicht verändert werden.

# --hints--

Alle Tests sollten erfolgreich sein.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=0').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Du solltest die richtige Methode für die erste Behauptung wählen - `isNull` vs. `isNotNull`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=0').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'isNull', 'Null is null');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Du solltest die richtige Methode für die zweite Behauptung wählen - `isNull` vs. `isNotNull`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=0').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'isNotNull', '1 is not null');
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
