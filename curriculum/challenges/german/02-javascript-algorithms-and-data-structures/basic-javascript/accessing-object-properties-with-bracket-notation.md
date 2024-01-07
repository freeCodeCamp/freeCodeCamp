---
id: 56533eb9ac21ba0edf2244c8
title: Zugriff auf Objekteigenschaften mit der Klammerschreibweise
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBvmEHP'
forumTopicId: 16163
dashedName: accessing-object-properties-with-bracket-notation
---

# --description--

Die zweite Möglichkeit, auf die Eigenschaften eines Objekts zuzugreifen, ist die Klammerschreibweise (`[]`). Wenn die Eigenschaft des Objekts, auf das du zugreifen willst, ein Leerzeichen in ihrem Namen hat, musst du die Klammerschreibweise verwenden.

Du kannst die Klammerschreibweise jedoch auch für Objekteigenschaften ohne Leerzeichen verwenden.

Hier ist ein Beispiel für die Verwendung der Klammerschreibweise, um die Eigenschaft eines Objekts zu lesen:

```js
const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
```

`myObj["Space Name"]` wäre der String `Kirk`, `myObj['More Space']` wäre der String `Spock`, und `myObj["NoSpace"]` wäre der String `USS Enterprise`.

Beachte, dass Eigenschaftsnamen mit Leerzeichen in Anführungszeichen stehen müssen (einfach oder doppelt).

# --instructions--

Lies die Werte der Eigenschaften `an entree` und `the drink` von `testObj` in Klammerschreibweise und weise sie `entreeValue` bzw. `drinkValue` zu.

# --hints--

`entreeValue` sollte ein String sein

```js
assert(typeof entreeValue === 'string');
```

Der Wert von `entreeValue` sollte der String `hamburger` sein

```js
assert(entreeValue === 'hamburger');
```

`drinkValue` sollte ein String sein

```js
assert(typeof drinkValue === 'string');
```

Der Wert von `drinkValue` sollte der String `water` sein

```js
assert(drinkValue === 'water');
```

Du solltest die Klammerschreibweise zweimal verwenden

```js
assert(code.match(/testObj\s*?\[('|")[^'"]+\1\]/g).length > 1);
```

# --seed--

## --after-user-code--

```js
(function(a,b) { return "entreeValue = '" + a + "', drinkValue = '" + b + "'"; })(entreeValue,drinkValue);
```

## --seed-contents--

```js
// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj;   // Change this line
const drinkValue = testObj;    // Change this line
```

# --solutions--

```js
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
const entreeValue = testObj["an entree"];
const drinkValue = testObj['the drink'];
```
