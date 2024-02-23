---
id: 587d7fb1367417b2b2512bf3
title: Implementiere eine Anfragenlogger-Middleware auf Hauptverzeichnisebene
challengeType: 2
forumTopicId: 301514
dashedName: implement-a-root-level-request-logger-middleware
---

# --description--

Du hast zuvor von der Middleware-Funktion `express.static()` erfahren. Jetzt ist es an der Zeit, herauszufinden, was Middleware genau ist. Middleware-Funktionen sind Funktionen, denen du bis zu drei Argumente übergeben kannst: das Anfragen- und das Antwortobjekt, sowie die nächste Funktion im Anfrage-Antwort-Zyklus deiner Anwendung. Diese Funktionen führen einen Code aus, der auf deine Anwendung Nebeneffekte haben kann; zudem werden normalerweise Informationen zu den Anfrage- oder Antwortobjekt hinzugefügt. Außerdem können sie den Zyklus beenden, indem sie eine Antwort senden, wenn eine bestimmte Bedingung erfüllt ist. Senden sie nach Abschluss keine Antwort, wird die Ausführung der nächsten Funktion der Reihe ausgelöst. Hierbei wird das dritte Argument – `next()` – aufgerufen.

Sieh dir folgendes Beispiel an:

```js
function(req, res, next) {
  console.log("I'm a middleware...");
  next();
}
```

Nehmen wir an, du hast diese Funktion für eine bestimmte Route aufgesetzt. Wenn eine Anfrage mit der Route übereinstimmt, wird der String “I’m a middleware…” ausgegeben, anschließend wird die nächste Funktion der Reihe ausgeführt. In dieser Übung erfährst du, wie du Middleware auf Hauptverzeichnisebene kreierst. Wie du in Aufgabe 4 erfahren hast, kannst du, um eine Middleware auf Hauptverzeichnisebene aufzusetzen, die Methode `app.use(<mware-function>)` verwenden. In diesem Fall wird die Funktion für alle Anfragen ausgeführt – du kannst jedoch auch spezifischere Bedingungen einstellen. Willst du beispielsweise eine Funktion ausschließlich für POST-Anfragen ausführen, könntest du `app.post(<mware-function>)` verwenden. Analoge Methoden existieren für alle HTTP-Verben (GET, DELETE, PUT, ...).

# --instructions--

Baue einen einfachen Logger. Für jede Anfrage sollte ein String folgenden Formats geloggt werden: `method path - ip`. Hier ein Beispiel dazu: `GET /json - ::ffff:127.0.0.1`. Achte hierbei auf das Leerzeichen zwischen `method` und `path` und, dass der Bindestrich, der `path` und `ip` trennt, auf beiden Seiten ein Leerzeichen hat. Du kannst sowohl Anfragemethode (HTTP-Verb) als auch den relativen Routenpfad und die IP des Anfragenden dem Anfrageobjekt über `req.method`, `req.path` und `req.ip` entnehmen. Achte darauf, `next()` aufzurufen, sobald du fertig bist – sonst steckt dein Server hier für immer fest. Du solltest zudem 'Logs' geöffnet haben, um zu sehen, was passiert, wenn eine Anfrage eintrifft.

**Hinweis:** Express bearbeitet Funktionen in der Reihenfolge, in der sie im Code auftauchen. Das trifft auch auf Middleware zu. Möchtest du, dass dies für alle Routen funktioniert, solltest du diese zuvor aufsetzen.

# --hints--

Logger-Middleware auf Hauptverzeichnisebene sollte aktiv sein

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/root-middleware-logger').then(
    (data) => {
      assert.isTrue(
        data.passed,
        'root-level logger is not working as expected'
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
