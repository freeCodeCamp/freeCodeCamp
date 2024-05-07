---
id: cf1111c1c12feddfaeb1bdef
title: Zufällige Ganzzahlen mit JavaScript generieren
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6bfr'
forumTopicId: 18186
dashedName: generate-random-whole-numbers-with-javascript
---

# --description--

Du kannst zufällige Dezimalzahlen mit `Math.random()` erzeugen, aber manchmal musst du zufällige ganze Zahlen erzeugen. Mit dem folgenden Verfahren erhälst du eine zufällige ganze Zahl, die kleiner als `20` ist:

1. Verwende `Math.random()`, um eine zufällige Dezimalzahl zu erzeugen.
2. Multipliziere diese zufällige Dezimalzahl mit `20`.
3. Nutze `Math.floor()`, um auf die ganze Zahl abzurunden.

Denke daran, dass `Math.random()` nie genau eine `1` zurückgeben kann. Es ist also unmöglich, tatsächlich `20` zu erhalten, da du mit `Math.floor()` abrundest. Mit diesem Verfahren erhältst du eine zufällige ganze Zahl im Bereich von `0` bis `19`.

Alles zusammengenommen sieht dein Code folgendermaßen aus:

```js
Math.floor(Math.random() * 20);
```

Du rufst `Math.random()` auf, multiplizierst das Ergebnis mit 20 und übergibst den Wert dann an `Math.floor()`, um den Wert auf die nächste ganze Zahl abzurunden.

# --instructions--

Verwende diese Technik, um eine zufällige ganze Zahl im Bereich von `0` bis `9` zu erzeugen und zurückzugeben.

# --hints--

Das Ergebnis von `randomWholeNum` sollte eine ganze Zahl sein.

```js
assert(
  typeof randomWholeNum() === 'number' &&
    (function () {
      var r = randomWholeNum();
      return Math.floor(r) === r;
    })()
);
```

Du solltest `Math.random` verwenden, um eine Zufallszahl zu erzeugen.

```js
assert(__helpers.removeJSComments(code).match(/Math.random/g).length >= 1);
```

Du solltest das Ergebnis von `Math.random` mit 10 multiplizieren, damit es eine Zahl im Bereich von null bis neun ergibt.

```js
assert(
  __helpers.removeJSComments(code).match(/\s*?Math.random\s*?\(\s*?\)\s*?\*\s*?10[\D]\s*?/g) ||
    __helpers.removeJSComments(code).match(/\s*?10\s*?\*\s*?Math.random\s*?\(\s*?\)\s*?/g)
);
```

Du solltest `Math.floor` verwenden, um den Dezimalteil der Zahl zu entfernen.

```js
assert(__helpers.removeJSComments(code).match(/Math.floor/g).length >= 1);
```

# --seed--

## --after-user-code--

```js
(function(){return randomWholeNum();})();
```

## --seed-contents--

```js
function randomWholeNum() {
  return Math.random();
}
```

# --solutions--

```js
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
```
