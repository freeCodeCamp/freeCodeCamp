---
id: bd7123c9c448eddfaeb5bdef
title: Пошук довжини рядка
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqEAd'
forumTopicId: 18182
dashedName: find-the-length-of-a-string
---

# --description--

Ви можете знайти довжину значення `String`, написавши `.length` після рядкової змінної або рядкового літерала.

```js
console.log("Alan Peter".length);
```

Консоль показуватиме значення `10`. Зауважте, що пробіл між «Alan» та «Peter» також враховується.

Наприклад, якби ми створили змінну `const firstName = "Ada"`, ми б змогли визначити довжину рядка `Ada` за допомогою властивості `firstName.length`.

# --instructions--

Використайте властивість `.length`, щоб встановити `lastNameLength` на кількість символів у `lastName`.

# --hints--

Ви не повинні змінювати оголошення змінних у розділі `// Setup`.

```js
assert(
  code.match(/let lastNameLength = 0;/) &&
    code.match(/const lastName = "Lovelace";/)
);
```

`lastNameLength` має дорівнювати 8.

```js
assert(typeof lastNameLength !== 'undefined' && lastNameLength === 8);
```

Ви повинні отримати довжину `lastName`, використовуючи `.length`, ось так: `lastName.length`.

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
