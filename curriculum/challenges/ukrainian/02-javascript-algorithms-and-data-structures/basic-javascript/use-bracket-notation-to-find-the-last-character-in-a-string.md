---
id: bd7123c9c451eddfaeb5bdef
title: Використовуйте Дужкову Нотацію для Пошуку Останнього Символу в Рядку
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQGcv'
forumTopicId: 18342
dashedName: use-bracket-notation-to-find-the-last-character-in-a-string
---

# --description--

Щоб отримати останню літеру рядка, ви можете відняти її від довжини рядка.

Наприклад, якщо `const firstName = "Ada"`, ви можете отримати значення останньої літери, використовуючи `firstName[firstName.length - 1]`.

Наприклад:

```js
const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];
```

`lastLetter` повинна мати значення рядка `a`.

# --instructions--

Використовуйте <dfn>дужкову нотацію</dfn>, щоб знайти останній символ у змінній `lastName`.

**Підказка:**Спробуйте подивитися на приклад вище, якщо застрягли.

# --hints--

`lastLetterOfLastName` повинно бути літерою `e`.

```js
assert(lastLetterOfLastName === 'e');
```

Ви повинні використати `.length`, щоб отримати останню літеру.

```js
assert(code.match(/\.length/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(lastLetterOfLastName);
```

## --seed-contents--

```js
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1];
```
