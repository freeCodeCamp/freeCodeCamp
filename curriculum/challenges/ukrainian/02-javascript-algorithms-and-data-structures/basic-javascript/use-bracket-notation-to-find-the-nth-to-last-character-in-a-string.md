---
id: bd7123c9c452eddfaeb5bdef
title: Використовуйте Дужкову Нотацію для Пошуку Символу N-го до Останнього в Рядку
challengeType: 1
videoUrl: 'https://scrimba.com/c/cw4vkh9'
forumTopicId: 18344
dashedName: use-bracket-notation-to-find-the-nth-to-last-character-in-a-string
---

# --description--

Ви можете використовувати той самий принцип, який ми використовували для отримання останнього символу в рядку, щоб отримати символ N-го до останнього.

Наприклад, ви можете отримати значення третьої до останньої літери рядка `const firstName = "Augusta"`, використовуючи `firstName[firstName.length - 3]`

Наприклад:

```js
const firstName = "Augusta";
const thirdToLastLetter = firstName[firstName.length - 3];
```

`thirdToLastLetter` повинен мати значення рядка `s`.

# --instructions--

Використовуйте <dfn>дужкову нотацію</dfn> для пошуку передостаннього символу в `lastName` в рядку.

**Підказка:**Спробуйте подивитися на приклад вище, якщо застрягли.

# --hints--

`secondToLastLetterOfLastName` повинно бути літерою `c`.

```js
assert(secondToLastLetterOfLastName === 'c');
```

Вам слід використовувати `.length`, щоб отримати передостанню літеру.

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
