---
id: 5895f70cf9fc0f352b528e66
title: Serialisierung eines Benutzerobjekts
challengeType: 2
forumTopicId: 301563
dashedName: serialization-of-a-user-object
---

# --description--

Serialization and deserialization are important concepts in regard to authentication. Ein Objekt zu serialisieren bedeutet, dessen Inhalt in einen kleinen *key* zu konvertieren, welcher dann in das Originalobjekt deserialisiert werden kann. Auf diese Weise können wir wissen, wer mit dem Server kommuniziert hat, ohne dabei Authentifizierungsdaten wie Nutzernamen und Passwort für jeden Seitenaufruf übertragen zu müssen.

Um dies richtig einzurichten, musst du eine Serialisierungsfunktion und eine Deserialisierungsfunktion haben. In Passport können diese mit erstellt werden:

```javascript
passport.serializeUser(cb);
passport.deserializeUser(cb);
```

Die Callback-Funktion, die an `serializeUser` übergeben wird, wird mit zwei Argumenten aufgerufen: dem vollständigen Benutzerobjekt und einem von Passport verwendeten Callback.

Der Callback erwartet zwei Argumente: Einen Fehler, falls vorhanden, und einen eindeutigen Schlüssel zur Identifizierung des Benutzers, der im Callback zurückgegeben werden soll. Du wirst die `_id` des Benutzers in dem Objekt verwenden. Diese ist garantiert eindeutig, da sie von MongoDB generiert wird.

In ähnlicher Weise wird `deserializeUser` mit zwei Argumenten aufgerufen: dem eindeutigen Schlüssel und einer Callback-Funktion.

Dieser Callback erwartet zwei Argumente: Einen Fehler, falls vorhanden, und das vollständige Benutzerobjekt. Um das vollständige Benutzerobjekt zu erhalten, suchst du mit einer Abfrage nach einer Mongo `_id`, wie unten gezeigt:


```javascript
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  myDataBase.findOne({ _id: new ObjectID(id) }, (err, doc) => {
    done(null, null);
  });
});
```

Füge die beiden oben genannten Funktionen zu deinem Server hinzu. Die `ObjectID`-Klasse stammt aus dem `mongodb`-Paket. `mongodb@~3.6.0` ist bereits als Abhängigkeit hinzugefügt worden. Deklariere diese Klasse mit:

```javascript
const { ObjectID } = require('mongodb');
```

Der `deserializeUser` wird einen Fehler auslösen, bis du die Datenbankverbindung eingerichtet hast. Kommentiere also den `myDatabase.findOne` Aufruf ab und rufe einfach `done(null, null)` in der `deserializeUser` Callback-Funktion auf.

Reiche deine Seite ein, wenn du davon ausgehst, alles richtig gemacht zu haben. Wenn du auf Fehler stößt, kannst du <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#serialization-of-a-user-object-4" target="_blank" rel="noopener noreferrer nofollow">das bis zu diesem Punkt abgeschlossene Projekt überprüfen</a>.

# --hints--

Du solltest das Nutzerobjekt korrekt serialisieren.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /passport.serializeUser/gi,
    'You should have created your passport.serializeUser function'
  );
  assert.match(
    data,
    /null,\s*user._id/gi,
    'There should be a callback in your serializeUser with (null, user._id)'
  );
}
```

Du solltest das Nutzerobjekt korrekt deserialisieren.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /passport.deserializeUser/gi,
    'You should have created your passport.deserializeUser function'
  );
  assert.match(
    data,
    /null,\s*null/gi,
    'There should be a callback in your deserializeUser with (null, null) for now'
  );
}
```

MongoDB sollte eine Abhängigkeit sein.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'mongodb',
    'Your project should list "mongodb" as a dependency'
  );
}
```

Mongodb sollte ordnungsgemäß erforderlich sein, einschließlich der ObjectId.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require.*("|')mongodb\1/gi,
    'You should have required mongodb'
  );
  assert.match(
    data,
    /new ObjectID.*id/gi,
    'Even though the block is commented out, you should use new ObjectID(id) for when we add the database'
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
