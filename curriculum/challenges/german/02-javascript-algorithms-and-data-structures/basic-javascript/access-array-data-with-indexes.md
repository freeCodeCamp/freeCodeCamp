---
id: 56bbb991ad1ed5201cd392ca
title: Auf Array-Daten mit Indizes zugreifen
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQbTz'
forumTopicId: 16158
dashedName: access-array-data-with-indexes
---

# --description--

Wir können auf die Daten innerhalb von Arrays mit <dfn>Indizes</dfn> zugreifen.

Array-Indizes werden in der gleichen Klammernotation wie Strings geschrieben, außer dass sie anstelle eines Zeichens einen Eintrag im Array spezifizieren. Wie bei Strings verwenden Arrays eine <dfn>nullbasierte</dfn> Indizierung, so dass das erste Element in einem Array den Index `0` hat.

<br>

**Beispiel**

```js
const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
```

`console.log(array[0])` gibt `50` aus, und `data` hat den Wert `60`.

# --instructions--

Erstelle eine Variable namens `myData` und setzte sie, mit Hilfe von Klammernotation, mit dem ersten Wert von `myArray` gleich.

# --hints--

Die Variable `myData` sollte gleich dem ersten Wert von `myArray` sein.

```js
assert(
  (function () {
    if (
      typeof myArray !== 'undefined' &&
      typeof myData !== 'undefined' &&
      myArray[0] === myData
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

Die Daten in der Variable `myArray` sollten mit Hilfe von Klammernotation abgerufen werden.

```js
assert(
  (function () {
    if (code.match(/\s*=\s*myArray\[0\]/g)) {
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
if(typeof myArray !== "undefined" && typeof myData !== "undefined"){(function(y,z){return 'myArray = ' + JSON.stringify(y) + ', myData = ' + JSON.stringify(z);})(myArray, myData);}
```

## --seed-contents--

```js
const myArray = [50, 60, 70];


```

# --solutions--

```js
const myArray = [50, 60, 70];
const myData = myArray[0];
```
