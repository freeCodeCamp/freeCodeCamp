---
id: 56bbb991ad1ed5201cd392d2
title: Neue Eigenschaften zu einem JavaScript-Objekt hinzufügen
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQe38UD'
forumTopicId: 301169
dashedName: add-new-properties-to-a-javascript-object
---

# --description--

Du kannst neue Eigenschaften zu bestehenden JavaScript-Objekten hinzufügen, genauso wie du sie ändern würdest.

So würden wir eine Eigenschaft `bark` zu `ourDog` hinzufügen:

```js
ourDog.bark = "bow-wow";
```

oder

```js
ourDog["bark"] = "bow-wow";
```

Wenn wir jetzt `ourDog.bark` auswerten, bekommen wir sein Bellen, `bow-wow`.

Beispiel:

```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";
```

# --instructions--

Füge die Eigenschaft `bark` zu `myDog` hinzu und setze sie auf ein Hundegeräusch, wie z. B. "woof". Du kannst entweder die Punkt- oder die Klammerschreibweise verwenden.

# --hints--

Du solltest die Eigenschaft `bark` zu `myDog` hinzufügen.

```js
assert(myDog.bark !== undefined);
```

Du solltest `bark` nicht zur Initialisierung von `myDog` hinzufügen.

```js
assert(!/bark[^\n]:/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};


```

# --solutions--

```js
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "Woof Woof";
```
