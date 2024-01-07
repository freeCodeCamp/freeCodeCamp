---
id: a0b5010f579e69b815e7c5d6
title: Suchen und Ersetzen
challengeType: 1
forumTopicId: 16045
dashedName: search-and-replace
---

# --description--

Führe eine Suche durch, ersetze Teile des Satzes mit den angegebenen Argumenten und gib den neuen Satz zurück.

Das erste Argument ist der Satz, an dem du das Suchen und Ersetzen anwenden wirst.

Das zweite Argument ist das Wort, das du ersetzen wirst (davor).

Mit dem dritten Argument bestimmst du, was das zweite Argument ersetzen soll (danach).

**Hinweis:** Behalte die Groß- und Kleinschreibung des Originalwortes, wenn du es ersetzt. Zum Beispiel, wenn du das Wort `Book` durch das Wort `dog`ersetzen willst, sollte es als `Dog` ersetzt werden

# --hints--

`myReplace("Let us go to the store", "store", "mall")` sollte den String `Let us go to the mall` zurückgeben.

```js
assert.deepEqual(
  myReplace('Let us go to the store', 'store', 'mall'),
  'Let us go to the mall'
);
```

`myReplace("He is Sleeping on the couch", "Sleeping", "sitting")` sollte den String `He is Sitting on the couch` zurückgeben.

```js
assert.deepEqual(
  myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'),
  'He is Sitting on the couch'
);
```

`myReplace("I think we should look up there", "up", "Down")` sollte den String `I think we should look down there` zurückgeben.

```js
assert.deepEqual(
  myReplace('I think we should look up there', 'up', 'Down'),
  'I think we should look down there'
);
```

`myReplace("This has a spellngi error", "spellngi", "spelling")` sollte den String `This has a spelling error` zurückgeben.

```js
assert.deepEqual(
  myReplace('This has a spellngi error', 'spellngi', 'spelling'),
  'This has a spelling error'
);
```

`myReplace("His name is Tom", "Tom", "john")` sollte den String `His name is John` zurückgeben.

```js
assert.deepEqual(
  myReplace('His name is Tom', 'Tom', 'john'),
  'His name is John'
);
```

`myReplace("Let us get back to more Coding", "Coding", "algorithms")` sollte den String `Let us get back to more Algorithms` zurückgeben.

```js
assert.deepEqual(
  myReplace('Let us get back to more Coding', 'Coding', 'algorithms'),
  'Let us get back to more Algorithms'
);
```

# --seed--

## --seed-contents--

```js
function myReplace(str, before, after) {
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```

# --solutions--

```js
function myReplace(str, before, after) {
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.substring(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.substring(1);
  }
  return str.replace(before, after);
}
```
