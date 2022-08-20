---
id: bd7123c9c549eddfaeb5bdef
title: Використовуйте Дужкову Нотацію для Пошуку Першого Символу в Рядку
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8JwhW'
forumTopicId: 18341
dashedName: use-bracket-notation-to-find-the-first-character-in-a-string
---

# --description--

<dfn>Дужкова нотація</dfn> - це спосіб отримання символу з певним індексом в рядку.

Більшість сучасних мов програмування, таких як JavaScript, не починають рахувати з 1, як це роблять люди. Вони починають з 0. Це називають індексація <dfn>на основі нуля</dfn>.

Наприклад, символ з індексом 0 у слові `Charles` буде `C`. Отже, якщо `const firstName = "Charles"`, ви можете отримати значення першої літери рядка, використовуючи `firstName[0]`.

Наприклад:

```js
const firstName = "Charles";
const firstLetter = firstName[0];
```

`firstLetter` повинна мати значення рядка `C`.

# --instructions--

Використовуйте дужкову нотацію, щоб знайти перший символ в змінній `lastName` та задайте його до `firstLetterOfLastName`.

**Підказка:**Спробуйте подивитися на приклад вище, якщо застрягли.

# --hints--

Змінна `firstLetterOfLastName` повинна мати значення `L`.

```js
assert(firstLetterOfLastName === 'L');
```

Вам слід використовувати дужкову нотацію.

```js
assert(code.match(/firstLetterOfLastName\s*=\s*lastName\s*\[\s*\d\s*\]/));
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(firstLetterOfLastName);
```

## --seed-contents--

```js
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];
```
