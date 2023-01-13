---
id: bd7123c9c549eddfaeb5bdef
title: Дужкова нотація для пошуку першого символа рядка
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8JwhW'
forumTopicId: 18341
dashedName: use-bracket-notation-to-find-the-first-character-in-a-string
---

# --description--

Завдяки <dfn>дужковій нотації</dfn> можна отримати символ з певним індексом в рядку.

Більшість сучасних мов програмування, наприклад JavaScript, не починають рахунок з 1, як це роблять люди. Вони починають з 0. Це називається індексацією <dfn>на основі нуля</dfn>.

Наприклад, символом з індексом 0 у слові `Charles` буде `C`. Тому, якщо `const firstName = "Charles"`, ви можете отримати значення першої літери рядка, використовуючи `firstName[0]`.

Приклад:

```js
const firstName = "Charles";
const firstLetter = firstName[0];
```

`firstLetter` матиме значення рядка `C`.

# --instructions--

Використайте дужкову нотацію, щоб знайти перший символ у змінній `lastName` та призначте його до `firstLetterOfLastName`.

**Підказка:** якщо застрягли, перегляньте вищеподаний приклад.

# --hints--

Змінна `firstLetterOfLastName` повинна мати значення `L`.

```js
assert(firstLetterOfLastName === 'L');
```

Ви повинні використати дужкову нотацію.

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
