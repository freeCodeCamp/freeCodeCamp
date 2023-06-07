---
id: 56533eb9ac21ba0edf2244ba
title: Die Unveränderlichkeit von Strings verstehen
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWPVaUR'
forumTopicId: 18331
dashedName: understand-string-immutability
---

# --description--

In JavaScript sind `String`-Werte <dfn>unveränderlich</dfn>, d.h. sie können nach ihrer Erstellung nicht mehr verändert werden.

So wird beispielsweise folgender Code einen Fehler erzeugen, da der Buchstabe `B` im String `Bob` nicht mit dem Buchstaben `J` ersetzt werden kann.

```js
let myStr = "Bob";
myStr[0] = "J";
```

Beachte, dass dies *nicht* bedeutet, dass `myStr` kein neuer Wert zugewiesen werden kann. Die einzige Möglichkeit, `myStr` zu ändern, wäre, ihr einen neuen Wert zuzuweisen, etwa so:

```js
let myStr = "Bob";
myStr = "Job";
```

# --instructions--

Korrigiere die Zuweisung an `myStr` so, dass sie den String-Wert von `Hello World` enthält, indem du den Ansatz aus dem obigen Beispiel verwendest.

# --hints--

`myStr` sollte einen Wert des Strings `Hello World` haben.

```js
assert(myStr === 'Hello World');
```

Du solltest den Code oberhalb des vorgegebenen Kommentars nicht ändern.

```js
assert(/myStr = "Jello World"/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(v){return "myStr = " + v;})(myStr);
```

## --seed-contents--

```js
// Setup
let myStr = "Jello World";

// Only change code below this line
myStr[0] = "H"; // Change this line
// Only change code above this line
```

# --solutions--

```js
let myStr = "Jello World";
myStr = "Hello World";
```
