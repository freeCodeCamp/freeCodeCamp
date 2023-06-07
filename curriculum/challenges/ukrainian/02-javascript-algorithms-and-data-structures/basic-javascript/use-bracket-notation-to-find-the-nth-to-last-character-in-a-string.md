---
id: bd7123c9c452eddfaeb5bdef
title: Дужкова нотація для пошуку n-го символа з кінця рядка
challengeType: 1
videoUrl: 'https://scrimba.com/c/cw4vkh9'
forumTopicId: 18344
dashedName: use-bracket-notation-to-find-the-nth-to-last-character-in-a-string
---

# --description--

Ви можете використати той самий принцип, який ми щойно використовували для отримання останнього символу в рядку, щоб отримати n-ий символ з кінця.

Наприклад, ви можете отримати значення третьої з кінця літери рядка `const firstName = "Augusta"`, використавши `firstName[firstName.length - 3]`

Приклад:

```js
const firstName = "Augusta";
const thirdToLastLetter = firstName[firstName.length - 3];
```

`thirdToLastLetter` матиме значення рядка `s`.

# --instructions--

Використайте <dfn>дужкову нотацію</dfn>, щоб знайти другий з кінця символ у рядку `lastName`.

**Підказка:** якщо застрягли, перегляньте вищеподаний приклад.

# --hints--

`secondToLastLetterOfLastName` має бути літера `c`.

```js
assert(secondToLastLetterOfLastName === 'c');
```

Ви повинні використати `.length`, щоб отримати передостанню літеру.

```js
assert(code.match(/\.length/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(secondToLastLetterOfLastName);
```

## --seed-contents--

```js
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2];
```
