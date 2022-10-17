---
id: cf1111c1c11feddfaeb8bdef
title: Ändern von Array-Daten mittels Indizes
challengeType: 1
videoUrl: 'https://scrimba.com/c/czQM4A8'
forumTopicId: 18241
dashedName: modify-array-data-with-indexes
---

# --description--

Anders als bei Strings, sind die Einträge von Arrays <dfn>änderbar (mutable)</dfn> und können frei geändert werden, auch wenn das Array mit `const` deklariert wurde.

**Beispiel**

```js
const ourArray = [50, 40, 30];
ourArray[0] = 15;
```

`ourArray` hat jetzt den Wert `[15, 40, 30]`.

**Hinweis:** Zwischen dem Array-Namen und den eckigen Klammern sollten keine Leerzeichen stehen, wie `array [0]`. Obwohl JavaScript in der Lage ist, dies korrekt zu verarbeiten, kann dies andere Programmierer verwirren, die deinen Code lesen.

# --instructions--

Ändere die Daten, die bei Index `0` von `myArray` gespeichert sind, auf einen Wert von `45`.

# --hints--

`myArray` sollte jetzt `[45, 64, 99]` sein.

```js
assert(
  (function () {
    if (
      typeof myArray != 'undefined' &&
      myArray[0] == 45 &&
      myArray[1] == 64 &&
      myArray[2] == 99
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

Du solltest den richtigen Index verwenden, um den Wert in `myArray` zu ändern.

```js
assert(
  (function () {
    if (code.match(/myArray\[0\]\s*=\s*/g)) {
      return true;
    } else {
      return false;
    }
  })()
);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
const myArray = [18, 64, 99];

// Only change code below this line

```

# --solutions--

```js
const myArray = [18, 64, 99];
myArray[0] = 45;
```
