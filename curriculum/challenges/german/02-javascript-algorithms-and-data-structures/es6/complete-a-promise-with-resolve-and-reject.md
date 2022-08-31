---
id: 5cdafbc32913098997531680
title: Vervollständige ein Promise mit resolve und reject
challengeType: 1
forumTopicId: 301196
dashedName: complete-a-promise-with-resolve-and-reject
---

# --description--

Ein Promise hat drei Zustände: `pending`, `fulfilled` und `rejected`. Das Promise, das du in der letzten Aufgabe erstellt hast, bleibt für immer im Zustand `pending` stecken, weil du keine Möglichkeit hinzugefügt hast, das Promise zu beenden. Dazu werden die Parameter `resolve` und `reject` verwendet, die dem Promise-Argument übergeben werden. `resolve` wird verwendet, wenn du willst, dass dein Promise erfolgreich ist, und `reject` wird verwendet, wenn es fehlschlagen soll. Das sind Methoden, die ein Argument benötigen, wie unten zu sehen.

```js
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
```

Das obige Beispiel verwendet Strings als Argument für diese Funktionen, aber es kann wirklich alles sein. Oft handelt es sich dabei um ein Objekt, dessen Daten du auf deiner Website oder an anderer Stelle verwendest.

# --instructions--

Sorge dafür, dass das Promise mit Erfolg und Misserfolg umgeht. Wenn `responseFromServer`  wahr (`true`) ist, rufe die Methode `resolve` auf, um das Promise erfolgreich abzuschließen. Übergib `resolve` einen String mit dem Wert `We got the data`. Wenn `responseFromServer` falsch (`false`) ist, verwende stattdessen die Methode `reject` und übergebe ihr den String: `Data not received`.

# --hints--

`resolve` sollte mit dem erwarteten String aufgerufen werden, wenn die `if`-Bedingung `true` ist.

```js
assert(
  code.match(/if\s*\(\s*responseFromServer\s*\)\s*{\s*resolve\s*\(\s*('|"|`)We got the data\1\s*\)(\s*|\s*;\s*)}/g)
);
```

`reject` sollte mit dem erwarteten String aufgerufen werden, wenn die `if`-Bedingung `false` ist.

```js
assert(
  code.match(/}\s*else\s*{\s*reject\s*\(\s*('|"|`)Data not received\1\s*\)(\s*|\s*;\s*)}/g)
);
```

# --seed--

## --seed-contents--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if(responseFromServer) {
    // Change this line
  } else {  
    // Change this line
  }
});
```

# --solutions--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
```
