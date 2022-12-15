---
id: bd7123c9c448eddfaeb5bdef
title: Знайти довжину рядка
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqEAd'
forumTopicId: 18182
dashedName: find-the-length-of-a-string
---

# --description--

Ви можете знайти довжину `String` значення, написавши `.length` після рядкової змінної або рядкового літералу.

```js
console.log("Alan Peter".length);
```

The value `10` would be displayed in the console. Note that the space character between "Alan" and "Peter" is also counted.

Наприклад, якби ми створили змінну `const firstName = "Ada"`, ми б змогли визначити довжину рядка `Ada` за допомогою властивості `firstName.length`.

# --instructions--

Use the `.length` property to set `lastNameLength` to the number of characters in `lastName`.

# --hints--

Не слід змінювати оголошення змінних у розділі `// Setup`.

```js
assert(
  code.match(/let lastNameLength = 0;/) &&
    code.match(/const lastName = "Lovelace";/)
);
```

`lastNameLength` має дорівнювати вісім.

```js
assert(typeof lastNameLength !== 'undefined' && lastNameLength === 8);
```

Ви повинні отримати довжину `lastName`, використовуючи `.length` таким чином: `lastName.length`.

```js
assert(code.match(/=\s*lastName\.length/g) && !code.match(/lastName\s*=\s*8/));
```

# --seed--

## --seed-contents--

```js
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName;
```

# --solutions--

```js
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;
```
