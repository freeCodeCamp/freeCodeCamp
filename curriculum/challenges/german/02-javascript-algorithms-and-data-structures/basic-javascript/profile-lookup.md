---
id: 5688e62ea601b2482ff8422b
title: Nach Profilen suchen
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqW2Cg'
forumTopicId: 18259
dashedName: profile-lookup
---

# --description--

Wir haben eine Reihe von Objekten, die verschiedene Personen in unseren Kontaktlisten darstellen.

Eine Funktion `lookUpProfile`, die `name` und eine Eigenschaft (`prop`) als Argumente nimmt, wurde bereits für dich geschrieben.

Die Funktion sollte prüfen, ob `name` der `firstName` eines aktuellen Kontakts ist und die angegebene Eigenschaft (`prop`) eine Eigenschaft dieses Kontakts ist.

Wenn beides wahr ist, wird der "Wert" der Eigenschaft zurückgegeben.

Wenn `name` keinem Kontakt entspricht, wird der String `No such contact` zurückgegeben.

Wenn `prop` keiner gültigen Eigenschaft eines Kontakts entspricht, der mit `name` übereinstimmt, wird der String `No such property` zurückgegeben.

# --hints--

`lookUpProfile("Kristian", "lastName")` sollte den String `Vos` zurückgeben

```js
assert(lookUpProfile('Kristian', 'lastName') === 'Vos');
```

`lookUpProfile("Sherlock", "likes")` sollte `["Intriguing Cases", "Violin"]` zurückgeben

```js
assert.deepEqual(lookUpProfile('Sherlock', 'likes'), [
  'Intriguing Cases',
  'Violin'
]);
```

`lookUpProfile("Harry", "likes")` sollte ein Array zurückgeben

```js
assert(typeof lookUpProfile('Harry', 'likes') === 'object');
```

`lookUpProfile("Bob", "number")` sollte den String `No such contact` zurückgeben

```js
assert(lookUpProfile('Bob', 'number') === 'No such contact');
```

`lookUpProfile("Bob", "potato")` sollte den String `No such contact` zurückgeben

```js
assert(lookUpProfile('Bob', 'potato') === 'No such contact');
```

`lookUpProfile("Akira", "address")` sollte den String `No such property` zurückgeben

```js
assert(lookUpProfile('Akira', 'address') === 'No such property');
```

# --seed--

## --seed-contents--

```js
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line

  // Only change code above this line
}

lookUpProfile("Akira", "likes");
```

# --solutions--

```js
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
function lookUpProfile(name, prop) {
  for (let i in contacts) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  return "No such contact";
}
```
