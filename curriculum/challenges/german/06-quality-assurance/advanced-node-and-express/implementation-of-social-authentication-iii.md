---
id: 589a8eb3f9fc0f352b528e72
title: Implementierung der sozialen Authentifizierung III
challengeType: 2
forumTopicId: 301558
dashedName: implementation-of-social-authentication-iii
---

# --description--

Der letzte Teil der Strategie ist der Umgang mit dem von GitHub übermittelten Profil. We need to load the user's database object if it exists, or create one if it doesn't, and populate the fields from the profile, then return the user's object. GitHub liefert uns eine einzigartige *-id* innerhalb jedes Profils, die wir für Suchen verwenden können, um den Benutzer zu serialisieren (bereits implementiert). Im Folgenden findest du eine Beispielimplementierung, die du in deinem Projekt verwenden kannst. Sie wird in die Funktion eingefügt, die das zweite Argument für die neue Strategie ist, direkt unter der Stelle, an der sich derzeit `console.log(profile);` befindet:

```js
myDataBase.findOneAndUpdate(
  { id: profile.id },
  {
    $setOnInsert: {
      id: profile.id,
      username: profile.username,
      name: profile.displayName || 'John Doe',
      photo: profile.photos[0].value || '',
      email: Array.isArray(profile.emails)
        ? profile.emails[0].value
        : 'No public email',
      created_on: new Date(),
      provider: profile.provider || ''
    },
    $set: {
      last_login: new Date()
    },
    $inc: {
      login_count: 1
    }
  },
  { upsert: true, new: true },
  (err, doc) => {
    return cb(null, doc.value);
  }
);
```

`findOneAndUpdate` ermöglicht es dir, nach einem Objekt zu suchen und es zu aktualisieren. Wenn das Objekt nicht existiert, wird es eingefügt und der Callback-Funktion zur Verfügung gestellt. In this example, we always set `last_login`, increment the `login_count` by `1`, and only populate the majority of the fields when a new object (new user) is inserted. Beachte, die Verwendung von Standardwerten. Manchmal ist ein übermitteltes Profil nicht vollständig ausgefüllt oder der Nutzer hält es privat. In diesem Fall verarbeitest du es, um einen Fehler zu vermeiden.

Du solltest dich jetzt bei deiner App anmelden können. Versuch es!

Reiche deine Seite ein, wenn du davon ausgehst, alles richtig gemacht zu haben. Wenn du auf Fehler stößt, kannst du <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#implementation-of-social-authentication-iii-5" target="_blank" rel="noopener noreferrer nofollow">das bis zu diesem Punkt abgeschlossene Projekt überprüfen</a>.

# --hints--

Die Einrichtung der GitHub-Strategie sollte abgeschlossen sein.

```js
async (getUserInput) => {
  const url = new URL("/_api/auth.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /GitHubStrategy[^]*myDataBase/gi,
    'Strategy should use now use the database to search for the user'
  );
  assert.match(
    data,
    /GitHubStrategy[^]*cb/gi,
    'Strategy should return the callback function "cb"'
  );
}
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
