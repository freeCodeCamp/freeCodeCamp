---
id: cf1111c1c12feddfaeb1bdef
title: Zufällige Ganzzahlen mit JavaScript generieren
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6bfr'
forumTopicId: 18186
dashedName: generate-random-whole-numbers-with-javascript
---

# --description--

Es ist großartig, dass wir zufällige Dezimalzahlen generieren können, aber es ist noch nützlicher, wenn wir es nutzen, um zufällige ganze Zahlen zu generieren.

<ol><li>Verwende <code>Math.random()</code>, um eine zufällige Dezimalzahl zu erzeugen.</li><li>Multipliziere diese zufällige Dezimalzahl mit <code>20</code>.</li><li>Verwende eine andere Funktion, <code>Math.floor()</code>, um die Zahl auf die nächste ganze Zahl abzurunden.</li></ol>

Denke daran, dass `Math.random()` niemals eine `1` zurückgeben kann und weil wir abrunden, ist es unmöglich, tatsächlich `20` zu erhalten. Diese Technik liefert uns eine ganze Zahl zwischen `0` und `19`.

Alles zusammengenommen sieht unser Code folgendermaßen aus:

```js
Math.floor(Math.random() * 20);
```

Wir rufen `Math.random()` auf, multiplizieren das Ergebnis mit 20 und übergeben den Wert dann an die Funktion `Math.floor()`, um den Wert auf die nächste ganze Zahl abzurunden.

# --instructions--

Verwende diese Technik, um eine zufällige ganze Zahl zwischen `0` und `9` zu erzeugen und zurückzugeben.

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
assert(code.match(/Math.random/g).length >= 1);
```

Du solltest das Ergebnis von `Math.random` mit 10 multiplizieren, damit es eine Zahl zwischen null und neun ergibt.

```js
assert(
  code.match(/\s*?Math.random\s*?\(\s*?\)\s*?\*\s*?10[\D]\s*?/g) ||
    code.match(/\s*?10\s*?\*\s*?Math.random\s*?\(\s*?\)\s*?/g)
);
```

Du solltest `Math.floor` verwenden, um den Dezimalteil der Zahl zu entfernen.

```js
assert(code.match(/Math.floor/g).length >= 1);
```

# --seed--

## --after-user-code--

```js
(function(){return randomWholeNum();})();
```

## --seed-contents--

```js
function randomWholeNum() {

  // Only change code below this line

  return Math.random();
}
```

# --solutions--

```js
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
```
