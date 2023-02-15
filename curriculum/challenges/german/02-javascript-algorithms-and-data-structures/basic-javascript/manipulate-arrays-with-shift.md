---
id: 56bbb991ad1ed5201cd392cd
title: Arrays mit der shift-Methode manipulieren
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRbVETW'
forumTopicId: 18238
dashedName: manipulate-arrays-with-shift
---

# --description--

`pop()` entfernt immer das letzte Element eines Arrays. Was, wenn du das erste entfernen möchtest?

Das ist der Moment, in dem `.shift()` ins Spiel kommt. Es funktioniert genau wie `.pop()`, nur dass es das erste Element entfernt, anstatt das letzte.

Beispiel:

```js
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
```

`removedFromOurArray` hätte einen Wert des Strings `Stimpson`, und `ourArray` hätte `["J", ["cat"]]`.

# --instructions--

Benutze die Funktion `.shift()`, um das erste Element aus `myArray` zu entfernen und weise dem entfernten Wert einer neue Variable `removedFromMyArray` zu.

# --hints--

`myArray` sollte nun gleich `[["dog", 3]]` sein.

```js
assert(
  (function (d) {
    if (d[0][0] == 'dog' && d[0][1] === 3 && d[1] == undefined) {
      return true;
    } else {
      return false;
    }
  })(myArray)
);
```

`removedFromMyArray` sollte `["John", 23]` enthalten.

```js
assert(
  (function (d) {
    if (
      d[0] == 'John' &&
      d[1] === 23 &&
      typeof removedFromMyArray === 'object'
    ) {
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
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line

```

# --solutions--

```js
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();
```
