---
id: 5688e62ea601b2482ff8422b
title: البحث عن الملف الشخصي (Profile Lookup)
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqW2Cg'
forumTopicId: 18259
dashedName: profile-lookup
---

# --description--

لدينا قائمة من الكائنات التي تمثل أشخاص مختلفين في قوائم جهات الاتصال.

تأخذ وظيفة `lookUpProfile` كائن `name` والخاصية (`prop`) كحجج تم كتابتها مسبقاً لك.

يجب أن تتحقق الوظيفة مما إذا كان `name` هو `firstName` جهة الاتصال الفعلية والخاصية (`prop`) هي خاصية جهة الاتصال تلك.

إذا كان كلاهما true، أنتج "قيمة" تلك الخاصية.

إذا كان `name` لا يتطابق مع أي جهات اتصال، أرجع المقطع `No such contact`.

إذا كان `prop` لا يتوافق مع أي خصائص صالحة لجهة اتصال وجدت أنها تتطابق مع `name` أنتج المقطع `No such property`.

# --hints--

يجب أن ينتج `lookUpProfile("Kristian", "lastName")` مقطع `Vos`

```js
assert(lookUpProfile('Kristian', 'lastName') === 'Vos');
```

يجب أن ينتج `lookUpProfile("Sherlock", "likes")` قائمة `["Intriguing Cases", "Violin"]`

```js
assert.deepEqual(lookUpProfile('Sherlock', 'likes'), [
  'Intriguing Cases',
  'Violin'
]);
```

يجب أن ينتج `lookUpProfile("Harry", "likes")` قائمة

```js
assert(typeof lookUpProfile('Harry', 'likes') === 'object');
```

يجب أن ينتج `lookUpProfile("Bob", "number")` مقطع `No such contact`

```js
assert(lookUpProfile('Bob', 'number') === 'No such contact');
```

يجب أن ينتج `lookUpProfile("Bob", "potato")` مقطع `No such contact`

```js
assert(lookUpProfile('Bob', 'potato') === 'No such contact');
```

يجب أن ينتج `lookUpProfile("Akira", "address")` مقطع `No such property`

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
