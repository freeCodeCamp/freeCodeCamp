---
id: 56bbb991ad1ed5201cd392ce
title: Arrays mit der unshift-Methode manipulieren
challengeType: 1
videoUrl: 'https://scrimba.com/c/ckNDESv'
forumTopicId: 18239
dashedName: manipulate-arrays-with-unshift
---

# --description--

Du kannst nicht nur mit `shift` Elemente vom Anfang eines Arrays entfernen, du kannst auch mit `unshift` Elemente an den Anfang eines Arrays setzen, d.h. Elemente vor dem Array hinzufügen.

`.unshift()` funktioniert genau wie `.push()`, aber anstatt das Element am Ende des Arrays hinzuzufügen, fügt `unshift()` das Element am Anfang des Arrays hinzu.

Beispiel:

```js
const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
```

Nach dem `shift` würde `ourArray` den Wert `["J", "cat"]` besitzen. Nach dem `unshift` würde `ourArray` den Wert `["Happy", "J", "cat"]` aufweisen.

# --instructions--

Füge `["Paul", 35]` am Anfang der Variable `myArray` mit `unshift()` hinzu.

# --hints--

`myArray` sollte jetzt `[["Paul", 35], ["dog", 3]]` enthalten.

```js
assert(
  (function (d) {
    if (
      typeof d[0] === 'object' &&
      d[0][0] == 'Paul' &&
      d[0][1] === 35 &&
      d[1][0] != undefined &&
      d[1][0] == 'dog' &&
      d[1][1] != undefined &&
      d[1][1] == 3
    ) {
      return true;
    } else {
      return false;
    }
  })(myArray)
);
```

# --seed--

## --after-user-code--

```js
(function(y, z){return 'myArray = ' + JSON.stringify(y);})(myArray);
```

## --seed-contents--

```js
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line

```

# --solutions--

```js
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
```
