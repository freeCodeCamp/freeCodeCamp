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

Here is an example of an article object:

```js
const article = {
  "title": "How to create objects in JavaScript",
  "link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
  "author": "Kaashan Hussain",
  "language": "JavaScript",
  "tags": "TECHNOLOGY",
  "createdAt": "NOVEMBER 28, 2018"
};

const articleAuthor = article["author"];
const articleLink = article["link"];

const value = "title";
const valueLookup = article[value];
```

`articleAuthor` is the string `Kaashan Hussain`, `articleLink` is the string `https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/`, and `valueLookup` is the string `How to create objects in JavaScript`.

# --instructions--

Wandle die switch-Anweisung in ein Objekt namens `lookup` um. Verwende sie, um `val` nachzuschlagen und den zugehörigen String der Variable `result` zuzuweisen.

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
