---
id: 587d7fb1367417b2b2512bf1
title: Bereitstellen von JSON auf einer bestimmten Route
challengeType: 2
forumTopicId: 301517
dashedName: serve-json-on-a-specific-route
---

# --description--

Während ein normaler HTML-Server HTML liefert, liefert eine API Daten. Eine <dfn>REST</dfn>-API (REpresentational State Transfer) erlaubt Datenaustausch auf eine einfachere Art und Weise – ohne dass Nutzer Details über den Server wissen müssen. Der Benutzer muss hierbei lediglich den Ort der Quelle (die URL) sowie die hier auszuführende Aktion wissen (das Verb). Das GET-Verb wird bei reinen Datenaufrufen benutzt – ohne etwas zu ändern. Heutzutage ist das für Datentransfers bevorzugte Format JSON. Einfach ausgedrückt: JSON ist eine bequeme Möglichkeit, mit einem JavaScript-Objekt als String zu arbeiten, um Datenübertragungen zu erleichtern.

Lass uns eine einfache API erstellen, indem wir eine JSON zurückgebende Route unter dem Pfad `/json` erstellen. Du kannst das – wie immer – mit der `app.get()`-Methode machen. Benutze innerhalb des Route-Handlers die Methode `res.json()`, und übergebe ihr ein Objekt als Argument. Diese Methode schließt die Anfrage-Antwort-Schleife und gibt die Daten zurück. Hinter den Kulissen wird hierbei ein gültiges JavaScript-Objekt in einen String konvertiert, anschließend werden die entsprechenden Header gesetzt, um deinen Browser mitzuteilen, dass du JSON-Daten lieferst – danach werden die Daten zurückgegeben. Ein gültiges Objekt hat die bekannte Struktur `{key: data}`. `data` kann hierbei eine Nummer, ein String, ein verschachteltes Objekt oder ein Array sein. `data` kann auch eine Variable, oder das Ergebnis eines Function-Calls sein, in diesem Fall werden die Daten vor Umwandlung in einen String überprüft.

# --instructions--

Liefere das Objekt `{"message": "Hello json"}` im JSON-Format als Antwort, um GET-Anfragen der `/json`-Route zu beantworten. Wenn du anschließend mit deinem Browser `your-app-url/json` aufrufst, solltest du die Nachricht auf deinem Bildschirm sehen.

# --hints--

The endpoint `/json` should serve the JSON object `{"message": "Hello json"}`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/json').then(
    (data) => {
      assert.equal(
        data.message,
        'Hello json',
        "The '/json' endpoint does not serve the right data"
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
