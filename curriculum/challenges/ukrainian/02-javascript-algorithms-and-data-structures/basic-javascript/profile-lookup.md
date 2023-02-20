---
id: 5688e62ea601b2482ff8422b
title: Пошук профілю
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqW2Cg'
forumTopicId: 18259
dashedName: profile-lookup
---

# --description--

У нас є масив об'єктів, які представляють різних людей зі списку контактів.

Функція `lookUpProfile`, яка приймає `name` та властивість (`prop`) як аргументи, вже записана для вас.

Функція повинна перевірити, чи `name` дійсно є ім’ям (`firstName`) контакту і надана властивість (`prop`) є властивістю цього контакту.

Якщо обидва є істинними, то поверніть значення цієї власності.

Якщо `name` не відповідає жодному контакту, поверніть рядок `No such contact`.

Якщо `prop` не збігається з жодною дійсною властивістю контакту, що відповідає `name`, поверніть рядок `No such property`.

# --hints--

`lookUpProfile("Kristian", "lastName")` має повертати рядок `Vos`

```js
assert(lookUpProfile('Kristian', 'lastName') === 'Vos');
```

`lookUpProfile("Sherlock", "likes")` має повертати `["Intriguing Cases", "Violin"]`

```js
assert.deepEqual(lookUpProfile('Sherlock', 'likes'), [
  'Intriguing Cases',
  'Violin'
]);
```

`lookUpProfile("Harry", "likes")` має повертати масив

```js
assert(typeof lookUpProfile('Harry', 'likes') === 'object');
```

`lookUpProfile("Bob", "number")` має повертати рядок `No such contact`

```js
assert(lookUpProfile('Bob', 'number') === 'No such contact');
```

`lookUpProfile("Bob", "potato")` має повертати рядок `No such contact`

```js
assert(lookUpProfile('Bob', 'potato') === 'No such contact');
```

`lookUpProfile("Akira", "address")` має повертати рядок `No such property`

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
