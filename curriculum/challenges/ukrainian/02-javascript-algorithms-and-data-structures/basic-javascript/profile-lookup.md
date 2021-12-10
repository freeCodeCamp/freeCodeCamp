---
id: 5688e62ea601b2482ff8422b
title: Пошук профілю
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqW2Cg'
forumTopicId: 18259
dashedName: profile-lookup
---

# --description--

У нас є безліч об'єктів, що представляють різних людей у наших списках контактів.

Функція `lookUpProfile` яка приймає `name` та властивість (`prop`) як аргументи були попередньо записані для вас.

Функція має перевірити, чи `name` є фактичним контактом `firstName` і даний параметр (`prop`) є властивістю цього контакту.

Якщо обидва є правдою, то поверніть "значення" цієї власності.

Якщо `name` не відповідає жодному контакту, поверніть рядок `No such contact`.

Якщо `prop` не відповідає жодним дійсним властивостям контакту, знайденим за відповідністю  `name`  потім поверніться на рядок `No such property`.

# --hints--

`lookUpProfile("Kristian", "lastName")` повинен повернути рядок `Vos`

```js
assert(lookUpProfile('Kristian', 'lastName') === 'Vos');
```

`lookUpProfile("Sherlock", "likes")` повинен повернутись як `["Intriguing Cases", "Violin"]`

```js
assert.deepEqual(lookUpProfile('Sherlock', 'likes'), [
  'Intriguing Cases',
  'Violin'
]);
```

`lookUpProfile("Harry", "likes")` повинен повернути об'єкт

```js
assert(typeof lookUpProfile('Harry', 'likes') === 'object');
```

`lookUpProfile("Bob", "number")` повинен повернути рядок `No such contact`

```js
assert(lookUpProfile('Bob', 'number') === 'No such contact');
```

`lookUpProfile("Bob", "potato")` повинен повернути рядок `No such contact`

```js
assert(lookUpProfile('Bob', 'potato') === 'No such contact');
```

`lookUpProfile("Akira", "address")` повинен повертати рядок `No such property`

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
