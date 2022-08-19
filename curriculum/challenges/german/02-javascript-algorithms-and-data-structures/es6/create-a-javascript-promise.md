---
id: 5cdafbb0291309899753167f
title: Erstelle eine JavaScript Promise
challengeType: 1
forumTopicId: 301197
dashedName: create-a-javascript-promise
---

# --description--

Ein Promise (engl. Versprechen) in JavaScript entspricht genau dem, was es aussagt - du verwendest es um ein Versprechen zu machen - in der Regel etwas asynchron - zu tun. Wenn die Aufgabe abgeschlossen ist, erfüllst du entweder das Versprechen oder du versagst dabei. `Promise` ist eine Konstruktorfunktion, deshalb braucht es das `new` Schlüsselwort um eines zu erstellen. Es benötigt eine Funktion, sowie ein Argument mit zwei Parametern - `resolve` und `reject`. Das sind die Mehtoden, die genutzt werden um das Ergebnis des Promise zu bestimmen. Die Syntax sieht folgendermaßen aus:

```js
const myPromise = new Promise((resolve, reject) => {

});
```

# --instructions--

Erstelle ein neues Promise namens `makeServerRequest`. Übergebe eine Funktion mit den Parametern `resolve` und `reject` an den Konstruktor.

# --hints--

Du solltest ein Promise einer deklarierten Variable namens `makeServerRequest` zuweisen.

```js
assert(makeServerRequest instanceof Promise);
```

Dein Promise sollte eine Funktion mit `resolve` und `reject` als Parameter erhalten.

```js
assert(
  code.match(
    /Promise\s*\(\s*(function\s*\(\s*resolve\s*,\s*reject\s*\)\s*{|\(\s*resolve\s*,\s*reject\s*\)\s*=>\s*{)[^}]*}/g
  )
);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
const makeServerRequest = new Promise((resolve, reject) => {

});
```
