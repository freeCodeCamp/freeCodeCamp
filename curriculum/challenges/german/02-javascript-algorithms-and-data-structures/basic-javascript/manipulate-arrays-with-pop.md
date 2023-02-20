---
id: 56bbb991ad1ed5201cd392cc
title: Arrays mit der pop-Methode manipulieren
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRbVZAB'
forumTopicId: 18236
dashedName: manipulate-arrays-with-pop
---

# --description--

Eine andere Möglichkeit, die Daten in einem Array zu ändern, ist die `.pop()` Funktion.

`.pop()` wird verwendet, um einen Wert am Ende eines Arrays zu entfernen. Wir können diesen entfernten Wert speichern, indem wir ihn einer Variablen zuweisen. Mit anderen Worten: `.pop()` entfernt das letzte Element aus einem Array und gibt dieses Element zurück.

Jede Art von Eintrag kann aus einem Array entfernt werden - Zahlen, Strings, sogar verschachtelte Arrays.

```js
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
```

Das erste `console.log` wird den Wert `6` anzeigen und das zweite wird den Wert `[1, 4]` anzeigen.

# --instructions--

Benutze die Funktion `.pop()`, um das letzte Element aus `myArray` zu entfernen und weise den entfernten Wert einer neuen Variablen `removedFromMyArray` zu.

# --hints--

`myArray` sollte nur `[["John", 23]]` enthalten.

```js
assert(
  (function (d) {
    if (d[0][0] == 'John' && d[0][1] === 23 && d[1] == undefined) {
      return true;
    } else {
      return false;
    }
  })(myArray)
);
```

Du solltest `pop()` auf `myArray` anwenden.

```js
assert(/removedFromMyArray\s*=\s*myArray\s*.\s*pop\s*(\s*)/.test(code));
```

`removedFromMyArray` sollte nur `["cat", 2]` enthalten.

```js
assert(
  (function (d) {
    if (d[0] == 'cat' && d[1] === 2 && d[2] == undefined) {
      return true;
    } else {
      return false;
    }
  })(removedFromMyArray)
);
```

# --seed--

## --after-user-code--

```js
if (typeof removedFromMyArray !== 'undefined') (function(y, z){return 'myArray = ' + JSON.stringify(y) + ' & removedFromMyArray = ' + JSON.stringify(z);})(myArray, removedFromMyArray);
```

## --seed-contents--

```js
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line

```

# --solutions--

```js
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();
```
