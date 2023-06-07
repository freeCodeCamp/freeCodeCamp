---
id: 5a24c314108439a4d403614d
title: Definiere eine Redux-Aktion
challengeType: 6
forumTopicId: 301440
dashedName: define-a-redux-action
---

# --description--

Da Redux ein Zustandsmanagement-Framework ist, ist die Aktualisierung des Zustands eine seiner Kernaufgaben. In Redux werden alle Zustandsaktualisierungen durch Dispatching-Aktionen ausgelöst. Eine Aktion ist einfach ein JavaScript-Objekt, das Informationen über ein eingetretenes Aktionsereignis enthält. Der Redux-Store empfängt diese Aktionsobjekte und aktualisiert dann seinen Status entsprechend. Manchmal enthält eine Redux-Aktion auch Daten. Zum Beispiel überträgt die Aktion einen Benutzernamen, nachdem sich ein Benutzer angemeldet hat. Während die Daten optional sind, müssen Aktionen eine `type`-Eigenschaft haben, die den "Typ" (type) der aufgetretenen Aktion angibt.

Stell dir Redux-Aktionen als Boten vor, die Informationen über Ereignisse in deiner App an den Redux-Store liefern. Der Store führt dann die Aktualisierung des Zustands auf der Grundlage der erfolgten Aktion durch.

# --instructions--

Das Schreiben einer Redux-Aktion ist so einfach wie das Deklarieren eines Objekts mit einer Typeigenschaft. Deklariere ein Objekt `action` und gib ihm eine Eigenschaft `type`, die auf den String `'LOGIN'` gesetzt ist.

# --hints--

Ein `action`-Objekt sollte existieren.

```js
assert(
  (function () {
    return typeof action === 'object';
  })()
);
```

Das `action`-Objekt sollte eine Schlüsseleigenschaft `type` mit dem Wert `LOGIN` besitzen.

```js
assert(
  (function () {
    return action.type === 'LOGIN';
  })()
);
```

# --seed--

## --seed-contents--

```js
// Define an action here:
```

# --solutions--

```js
const action = {
  type: 'LOGIN'
}
```
