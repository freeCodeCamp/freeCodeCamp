---
id: 56bbb991ad1ed5201cd392d3
title: Eigenschaften eines JavaScript-Objekts löschen
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqKdTv'
forumTopicId: 17560
dashedName: delete-properties-from-a-javascript-object
---

# --description--

Wir können auch Eigenschaften von Objekten folgendermaßen löschen:

```js
delete ourDog.bark;
```

Beispiel:

```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
```

Nach der letzten Zeile oben sieht `ourDog` wie folgt aus:

```js
{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
```

# --instructions--

Lösche die Eigenschaft `tails` von `myDog`. Du kannst entweder die Punkt- oder die Klammerschreibweise verwenden.

# --hints--

Du solltest die Eigenschaft `tails` aus `myDog` löschen.

```js
assert(typeof myDog === 'object' && myDog.tails === undefined);
```

Du solltest die Einstellungen von `myDog` nicht verändern.

```js
assert(code.match(/"tails": 1/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line

```

# --solutions--

```js
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails;
```
