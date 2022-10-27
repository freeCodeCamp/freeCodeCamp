---
id: 56533eb9ac21ba0edf2244ca
title: Objekte für die Suche verwenden
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBk8sM'
forumTopicId: 18373
dashedName: using-objects-for-lookups
---

# --description--

Objekte kann man sich als Schlüssel/Wert-Speicher vorstellen, wie ein Wörterbuch. Wenn du tabellarische Daten hast, kannst du ein Objekt zum Nachschlagen von Werten verwenden, anstatt eine `switch`-Anweisung oder eine `if/else`-Kette. Das ist besonders nützlich, wenn du weißt, dass deine Eingabedaten auf einen bestimmten Bereich beschränkt sind.

Hier ist ein Beispiel für eine einfache Suche nach dem umgekehrten Alphabet:

```js
const alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};

const thirdLetter = alpha[2];
const lastLetter = alpha[24];

const value = 2;
const valueLookup = alpha[value];
```

`thirdLetter` ist der String `Y`, `lastLetter` ist der String `C` und `valueLookup` ist der String `Y`.

# --instructions--

Wandle die switch-Anweisung in ein Objekt namens `lookup` um. Verwende sie, um `val` nachzuschlagen und den zugehörigen String der Variablen `result` zuzuweisen.

# --hints--

`phoneticLookup("alpha")` sollte gleich dem String `Adams` sein

```js
assert(phoneticLookup('alpha') === 'Adams');
```

`phoneticLookup("bravo")` sollte gleich dem String `Boston` sein

```js
assert(phoneticLookup('bravo') === 'Boston');
```

`phoneticLookup("charlie")` sollte gleich dem String `Chicago` sein

```js
assert(phoneticLookup('charlie') === 'Chicago');
```

`phoneticLookup("delta")` sollte gleich dem String `Denver` sein

```js
assert(phoneticLookup('delta') === 'Denver');
```

`phoneticLookup("echo")` sollte gleich dem String `Easy` sein

```js
assert(phoneticLookup('echo') === 'Easy');
```

`phoneticLookup("foxtrot")` sollte gleich dem String `Frank` sein

```js
assert(phoneticLookup('foxtrot') === 'Frank');
```

`phoneticLookup("")` sollte gleich `undefined` sein

```js
assert(typeof phoneticLookup('') === 'undefined');
```

Du solltest die `return`-Anweisung nicht ändern

```js
assert(code.match(/return\sresult;/));
```

Du solltest keine `case`-, `switch`- oder `if`-Anweisungen verwenden

```js
assert(
  !/case|switch|if/g.test(code.replace(/([/]{2}.*)|([/][*][^/*]*[*][/])/g, ''))
);
```

# --seed--

## --seed-contents--

```js
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
```

# --solutions--

```js
function phoneticLookup(val) {
  let result = "";

  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  };

  result = lookup[val];

  return result;
}
```
