---
id: 587d7fb6367417b2b2512c06
title: Installieren und Einrichten von Mongoose
challengeType: 2
forumTopicId: 301540
dashedName: install-and-set-up-mongoose
---

# --description--

Bei der Arbeit an diesen Aufgaben wirst du deinen Code mithilfe folgender Methoden schreiben:

- Klone <a href="https://github.com/freeCodeCamp/boilerplate-mongomongoose/" target="_blank" rel="noopener noreferrer nofollow">diese GitHub-Repo</a> und schließe dein Projekt lokal ab.
- Use <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-mongomongoose/" target="_blank" rel="noopener noreferrer nofollow">our Gitpod starter project</a> to complete these challenges.
- Verwende einen Site-Builder deiner Wahl, um das Projekt abzuschließen. Achte darauf, alle Dateien von unserem GitHub-Repo zu integrieren.

In dieser Aufgabe wirst du eine eine MongoDB-Atlas-Datenbank einrichten und die erforderlichen Pakete importieren, um dich mit ihr zu verbinden.

Folge <a href='https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/' target="_blank" rel="noopener noreferrer nofollow">diesem Tutorial</a>, um eine gehostete Datenbank mit MongoDB Atlas einzurichten.

# --instructions--

`mongoose@^5.11.15` wurde der `package.json`-Datei deines Projekts hinzugefügt. Fordere zunächst Mongoose als `mongoose` in `myApp.js` an. Erstelle als Nächstes eine `.env`-Datei und füge dieser eine `MONGO_URI`-Variable hinzu. Ihr Wert sollte deine MongoDB-Atlas-Datenbank-URI sein. Achte darauf, die URI mit einfachen oder doppelten Anführungszeichen zu umgeben und denke daran, dass du keine Leerzeichen um die `=` in Umgebungsvariablen verwenden kannst. Zum Beispiel: `MONGO_URI='VALUE'`.

Sobald du fertig bist, verbinde dich mit der Datenbank durch Aufruf der `connect`-Methode innerhalb deiner `myApp.js`-Datei unter Verwendung der folgenden Syntax:

```js
mongoose.connect(<Your URI>, { useNewUrlParser: true, useUnifiedTopology: true });
```

# --hints--

Abhängigkeit "mongoose Version ^5.11.15" sollte sich in package.json befinden

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/file/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(packJson.dependencies, 'mongoose');
      assert.match(
        packJson.dependencies.mongoose,
        /^\^5\.11\.15/,
        'Wrong version of "mongoose". It should be ^5.11.15'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

"mongoose" sollte mit einer Datenbank verbunden sein

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/is-mongoose-ok').then(
    (data) => {
      assert.isTrue(data.isMongooseOk, 'mongoose is not connected');
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
