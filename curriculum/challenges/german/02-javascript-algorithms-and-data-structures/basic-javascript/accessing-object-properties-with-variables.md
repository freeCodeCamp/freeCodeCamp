---
id: 56533eb9ac21ba0edf2244c9
title: Zugriff auf Objekteigenschaften mit Variablen
challengeType: 1
videoUrl: 'https://scrimba.com/c/cnQyKur'
forumTopicId: 16165
dashedName: accessing-object-properties-with-variables
---

# --description--

Eine weitere Verwendung der Klammerschreibweise für Objekte ist der Zugriff auf eine Eigenschaft, die als Wert einer Variablen gespeichert ist. Das kann sehr nützlich sein, um die Eigenschaften eines Objekts zu durchlaufen oder auf eine Umsetzungstabelle (lookup table) zuzugreifen.

Hier ist ein Beispiel für die Verwendung einer Variablen, um auf eine Eigenschaft zuzugreifen:

```js
const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
```

Der String `Doberman` würde in der Konsole angezeigt werden.

Beachte, dass wir die Variablenbezeichnungen *nicht* mit Anführungszeichen versehen, wenn wir auf die Eigenschaft zugreifen, da wir den *Wert* der Variablen verwenden, nicht die *Bezeichnungen*.

# --instructions--

Setze die Variable `playerNumber` auf `16`. Benutze dann die Variable, um den Namen des Spielers abzufragen und ihn `player` zuzuweisen.

# --hints--

`playerNumber` sollte eine Zahl sein

```js
assert(typeof playerNumber === 'number');
```

Die Variable `player` sollte ein String sein

```js
assert(typeof player === 'string');
```

Der Wert von `player` sollte der String `Montana` sein

```js
assert(player === 'Montana');
```

Du solltest die Klammerschreibweise verwenden, um auf `testObj` zuzugreifen

```js
assert(/testObj\s*?\[.*?\]/.test(code));
```

Du solltest den Wert `Montana` nicht direkt der Variable `player` zuweisen.

```js
assert(!code.match(/player\s*=\s*"|\'\s*Montana\s*"|\'\s*;/gi));
```

Du solltest die Variable `playerNumber` in deiner Klammerschreibweise verwenden

```js
assert(/testObj\s*?\[\s*playerNumber\s*\]/.test(code));
```

# --seed--

## --after-user-code--

```js
if(typeof player !== "undefined"){(function(v){return v;})(player);}
```

## --seed-contents--

```js
// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 42;  // Change this line
const player = testObj;   // Change this line
```

# --solutions--

```js
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
const playerNumber = 16;
const player = testObj[playerNumber];
```
